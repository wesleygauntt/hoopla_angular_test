'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/hoopla_logo.png$/);
    expect(page.imgEl.getAttribute('alt')).toBe('Hoopla');
  });

});
