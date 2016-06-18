const Given = require('given');
const expect = require('chai').expect;

const WindowManager = require('../manager');
const Window = require('../window');
const rawContained = require('./fixtures/windows-contained');
const rawCornered = require('./fixtures/windows-cornered');

describe('Window', function () {
  beforeEach(function () {
    this.given = Given(this);

    this.given({
      window: function () {
        let window = new Window(this.rawDataSource.bottomWindow);
        this.windowManager.addWindow(window);
        return window;
      },
      rawDataSource: () => rawCornered,
      windowManager: function () {
        return new WindowManager(this.otherWindows);
      },
      otherWindows: function () {
        return this.rawDataSource.windows
          .map((rawWindow) => new Window(rawWindow));
      },
      expectedVisibleRectangles: function () {
        return this.rawDataSource.visibleRectangles;
      }
    });
  });

  describe('#getVisibleRectangles', function () {
    context('when the windows are contained', function () {
      beforeEach(function () {
        this.given('rawDataSource', () => rawContained);
      });
      it('returns an array of rectangles', function () {
        expect(this.window.getVisibleRectangles())
          .to.deep.equal(this.rawDataSource.visibleRectangles);
      });
    });

    context('when the windows are cornered', function () {
      beforeEach(function () {
        this.given('rawDataSource', () => rawCornered);
      });
      it('returns an array of rectangles', function () {
        expect(this.window.getVisibleRectangles())
          .to.deep.equal(this.expectedVisibleRectangles);
      });
    });

  });

  describe('#getVisibleArea', function () {
    context('when the windows are contained', function () {
      beforeEach(function () {
        this.given('rawDataSource', () => rawContained);
      });
      it('returns the sum of the inner area of visible points', function () {
        expect(this.window.getVisibleArea()).to.equal(140000);
      });
    });

    context('when the windows are cornered', function () {
      beforeEach(function () {
        this.given('rawDataSource', () => rawCornered);
      });
      it('returns the sum of the inner area of visible points', function () {
        expect(this.window.getVisibleArea()).to.equal(19000);
      });
    });
  });
});
