import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToHome(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getHomePageInstruction(): Promise<string> {
    return element(by.tagName('p')).getText() as Promise<string>;
  }

  navigateToRegistration(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}/registration`) as Promise<unknown>;
  }

  getRegistrationPageTitle(): Promise<string> {
    return element(by.tagName('h2')).getText() as Promise<string>;
  }

  getRegistrationForm() {
    return element(by.tagName('form')).isPresent();
  }



}
