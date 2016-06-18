const Given = require('given');
const expect = require('chai').expect;
const rawWindows = require('./fixtures/windows-cornered').windows;

const WindowManager = require('../manager');
const Window = require('../window');

describe('WindowManager', function () {
  beforeEach(function () {
    this.given = Given(this);

    this.given({
      windowIndex: () => 0,
      rawWindows: () => rawWindows,
      windowManager: function () {
        let windows = this.rawWindows.map(rawWindow => new Window(rawWindow));
        return new WindowManager(windows);
      },
    });
  });

  describe('.windows', function () {
    context('when initialized with windows', function () {
      it('is defined', function () {
        expect(this.windowManager.windows).to.have.length(3);
      });
    });

    context('when initialized without windows', function () {
      beforeEach(function () {
        this.given('rawWindows', () => []);
      });
      it('is an empty array', function () {
        expect(this.windowManager.windows).to.be.an('array');
        expect(this.windowManager.windows).to.have.length(0);
      });
    })
  });

  describe('#addWindow', function () {
    beforeEach(function () {
      this.given('newWindow', () => new Window())
      this.windowManager.addWindow(this.newWindow);
    })
    it('pushes the window onto `windows`', function () {
      let lastIndex = this.windowManager.windows.length - 1;
      let lastWindow = this.windowManager.windows[lastIndex];

      expect(lastWindow).to.equal(this.newWindow);
    });
  });
});
