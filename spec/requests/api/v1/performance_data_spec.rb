require 'rails_helper'
RSpec.describe Api::V1::PerformanceDataController, type: :request do
    let(:user) { FactoryBot.create(:user) }
    let(:credentials) { user.create_new_auth_token }
    let(:headers) { { HTTP_ACCEPT: 'application/json'}.merge!(credentials) }

    describe 'POST /api/v1/performance_data' do
        it 'creates a data entry' do
            post '/api/v1/performance_data', params: {
                performance_data: { data: { message: 'Average' } }
            }, headers: headers

            entry = PerformanceData.last
            expect(entry.data).to eq 'message' => 'Average'
        end

        it 'does not create a data entry' do
            post '/api/v1/performance_data', params: {
                performance_data: { data: { message: 'Error'} }
            }, headers: headers

            entry = PerformanceData.last
            expect(entry.data).to eq 'message' => 'Error'
        end
    end

    describe 'GET /api/v1/performance_data' do
        before do
            5.times { user.performance_data.create(data: { message: 'Average'}) }
        end

        it 'returns a collection of performance data' do
            get '/api/v1/performance_data', headers: headers
            expect(response_json['entries'].count).to eq 5
        end

        it 'only returns current user performance data' do
            get '/api/v1/performance_data', headers: headers
            # binding.pry
            entry = PerformanceData.last
            expected_response = {
                'id' => entry.id,
                "user_id"=> entry.user.id,
                "data"=>{"message"=>"Average"},
                "created_at"=> entry.created_at.iso8601(3),
                "updated_at"=> entry.updated_at.iso8601(3)
            }
            expect(response_json['entries'].last).to eq expected_response
        end
    end
end