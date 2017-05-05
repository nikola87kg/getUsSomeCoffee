import { GetUsSomeCoffeeAppPage } from './app.po';

describe('get-us-some-coffee-app App', () => {
  let page: GetUsSomeCoffeeAppPage;

  beforeEach(() => {
    page = new GetUsSomeCoffeeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
