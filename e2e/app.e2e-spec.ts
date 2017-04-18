import { RdmenuPage } from './app.po';

describe('rdmenu App', () => {
  let page: RdmenuPage;

  beforeEach(() => {
    page = new RdmenuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
