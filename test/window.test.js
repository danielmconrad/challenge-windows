const Given = require('given');
const expect = require('chai').expect;

const WindowManager = require('../manager');
const Window = require('../window');

describe('Window', function () {
  beforeEach(function () {
    this.given = Given(this);

    this.given({
      x: () => 2,
      y: () => 2,
      width: () => 500,
      height: () => 300,
      attributes: function () {
        return {
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height,
        };
      },
      windowManager: function () {
        return new WindowManager(this.otherWindows);
      },
      window: function () {
        let window = new Window(this.attributes);
        this.windowManager.addWindow(window);
        return window;
      },
      otherWindows: function () {
        return this.otherRawWindows.map((rawWindow) => new Window(rawWindow));
      },
      otherRawWindows: () => [
        {
          id: 'first',
          x: 100,
          y: 50,
          width: 1000,
          height: 300,
        },
        {
          id: 'second',
          x: 900,
          y: 200,
          width: 50,
          height: 600,
        },
        {
          id: 'third',
          x: 50,
          y: 20,
          width: 500,
          height: 500,
        },
      ]
    });
  });

  describe('#getVisibleRectangles', function () {
    it('returns an array of rectangles', function () {
      expect(this.window.getVisibleRectangles())
        .to.deep.equal([

        ])
    });
  });

  describe('#getVisibleArea', function () {

  });
});
