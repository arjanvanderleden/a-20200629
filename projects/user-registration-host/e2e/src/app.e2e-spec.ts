import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe("Home page", () => {

    beforeEach(() => {
      page.navigateToHome();
    });

    it('should display a registration hint', () => {
      expect(page.getHomePageInstruction()).toContain("You can register");
    });

  })


  describe("Registration page", () => {

    beforeEach(() => {
      page.navigateToRegistration();
    });


    it('should display the title the page', () => {
      expect(page.getRegistrationPageTitle()).toContain("Please register");
    });

    it('should have a form', () => {
      expect(page.getRegistrationForm()).toBe(true);
    });

    it('should have a form with 4 inputs fields', () => {
      expect(page.getRegistrationForm()).toBe(true);
    });
  })




  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
