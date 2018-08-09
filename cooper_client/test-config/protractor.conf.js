const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTImeout: 11000,
    specs: [
        '../e2e/**/*.e2e-spec.ts'
    ],
    capabilitites: {
        'broswerName': 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:8100/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {}
    },
    onPrepare() {
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }
};