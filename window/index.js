const _ = require('lodash');
const _manager = Symbol('manager');

const contained = require('./contained');
const corner = require('./corner');
// const injected = require('./injected');
// const overlapped = require('./overlapped');
// const coverred = require('./coverred');
const Rectangle = require('./rectangle');

const DEFAULTS = {
  x: 0,
  y: 0,
  width: 400,
  height: 300,
};

module.exports = class Window {

  constructor(attributes = {}) {
    this.x = attributes.x || DEFAULTS.x;
    this.y = attributes.y || DEFAULTS.y;
    this.width = attributes.width || DEFAULTS.width;
    this.height = attributes.height || DEFAULTS.height;
  }

  getRectangle () {
    return new Rectangle({
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    });
  }

  get manager () {
    return this[_manager];
  }

  set manager (value) {
    return this[_manager] = value;
  }

  getVisibleRectangles () {
    const windowIndex = this.manager.windows.indexOf(this);
    const windowsInFront = this.manager.windows.splice(0, windowIndex);

    let visibleRectangles = [this.getRectangle()];

    windowsInFront.reverse().forEach((windowInFront) => {
      visibleRectangles = visibleRectangles.map((visibleRectangle) => {
        let windowInFrontRect = windowInFront.getRectangle()
        return this._getDifferenceRectangles(visibleRectangle, windowInFrontRect);
      });
      visibleRectangles = _.flatten(visibleRectangles);
    });

    return visibleRectangles;
  }

  getVisibleArea () {
    return this.getVisibleRectangles().reduce(function (val, rectangle) {
      return val + rectangle.width * rectangle.height;
    }, 0);
  }

  _getDifferenceRectangles (rectBelow, rectAbove) {
    if (contained.isSatisfiedBy(rectBelow, rectAbove))
      return contained.getRectangles(rectBelow, rectAbove);

    // if (overlapped.isSatisfiedBy(rectBelow, rectAbove))
    //   return overlapped.getRectangles(rectBelow, rectAbove);

    if (corner.isSatisfiedBy(rectBelow, rectAbove))
      return corner.getRectangles(rectBelow, rectAbove);

    // if (injected.isSatisfiedBy(rectBelow, rectAbove))
    //   return injected.getRectangles(rectBelow, rectAbove);

    return [rectBelow];
  }

};
