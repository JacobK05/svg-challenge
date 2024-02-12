const { Square } = require('./lib/square.js')

describe('Square', () => {
    test('renders correctly', () => {
      const square = new Square();
      square.setColor("green");
      expect(square.render()).toEqual('<rect x="62" y="62" width="400" height="400" fill="green" />');
    });
  });