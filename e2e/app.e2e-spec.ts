import { NgxIntlTelInputPage } from './app.po';

describe('ngx-intl-tel-input App', () => {
  let page: NgxIntlTelInputPage;

  beforeEach(() => {
    page = new NgxIntlTelInputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
