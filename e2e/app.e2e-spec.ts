import { FeatureBookPage } from './app.po';

describe('feature-book App', () => {
  let page: FeatureBookPage;

  beforeEach(() => {
    page = new FeatureBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
