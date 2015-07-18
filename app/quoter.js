/**
 * Created by Sean on 7/17/2015.
 */

var quoter = {
  quotes: {
    '1': ['These violent delights have violent ends.', 'William Shakespeare', 'Romeo and Juliet'],
    '2': ['Now I am become Death, the destroyer of worlds.', 'J. Robert Oppenheimer', ''],
    '3': ['Nothing is true, everything is permitted.', 'Vladimir Bartol', 'Alamut'],
    '4': ['For a moment, nothing happened. Then, after a second or so, nothing continued to happen.', 'Douglas Adams', 'The Hitchhiker\'s Guide to the Galaxy' ]
  },
  getQuote: function() {
    const keys = Object.keys(quoter.quotes);
    return quoter.quotes[keys[ keys.length * Math.random() << 0 ]];
  }
};

module.exports = quoter;
