import { ZoloPage } from './app.po';

describe('zolo App', () => {
  let page: ZoloPage;

  beforeEach(() => {
    page = new ZoloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
