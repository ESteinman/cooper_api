import { browser, by, element } from 'protractor'

export class Page {

    navigateTo(destination) {
        return browser.get(destination);
    }

    getTitle() {
        return browser.getTitle();
    }

    getPageOneTitleTexrt() {
        return element(by.tagName('page-one')).element(by.tagName('ion-title')).getText();
    }
}