import { VisitingCardPage } from './app.po';

describe('visiting-card App', () => {
  let page: VisitingCardPage;

  beforeEach(() => {
    page = new VisitingCardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
