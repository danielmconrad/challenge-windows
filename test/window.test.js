const Given = require('given');
const expect = require('chai').expect;

const WindowManager = require('../manager');
const Window = require('../window');
const rawWindows = require('./fixtures/windows').windows;

describe('Window', function () {
  beforeEach(function () {
    this.given = Given(this);

    this.given({
      window: function () {
        let window = new Window(this.attributes);
        this.windowManager.addWindow(window);
        return window;
      },
      attributes: function () {
        return {
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height,
        };
      },
      x: () => 2,
      y: () => 2,
      width: () => 500,
      height: () => 300,
      windowManager: function () {
        return new WindowManager(this.otherWindows);
      },
      otherWindows: function () {
        return rawWindows.map((rawWindow) => new Window(rawWindow));
      },
    });
  });

  describe('#getVisibleRectangles', function () {
    it('returns an array of rectangles', function () {
      expect(this.window.getVisibleRectangles()).to.deep.equal([
        {x: 2, y: 2, width: 500, height: 18},
        {x: 2, y: 20, width: 48, height: 30},
        {x: 2, y: 50, width: 28, height: 252}
      ]);
    });
  });

  describe('#getVisibleArea', function () {
    it('returns the sum of the inner area of visible points', function () {
      expect(this.window.getVisibleArea()).to.equal(17496);
    });

  });
});
