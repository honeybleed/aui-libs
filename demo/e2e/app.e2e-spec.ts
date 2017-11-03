import { AuiIconDemoPage } from './app.po';

describe('@aui/icon-demo App', () => {
  let page: AuiIconDemoPage;

  beforeEach(() => {
    page = new AuiIconDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
