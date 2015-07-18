/**
 * Created by Sean on 7/17/2015.
 */
var expect = require('chai').expect;
var quoter = require('../app/quoter');

describe('Quoter', function() {
  describe('getQuote()', function() {
    it('should return two strings', function() {
      const quote = quoter.getQuote();
      expect(quote[0]).to.be.a('string');
      expect(quote[1]).to.be.a('string');
      expect(quote[2]).to.be.a('string');
    });
  });
});
