const _manager = Symbol('manager');

const DEFAULTS = {
  x: 50,
  y: 50,
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

  get manager() {
    return this[_manager];
  }

  set manager(value) {
    return this[_manager] = value;
  }

  getVisibleRectangles () {
    return [
      {x: 2, y: 2, width: 500, height: 18},
      {x: 2, y: 20, width: 48, height: 30},
      {x: 2, y: 50, width: 28, height: 252}
    ];
  }

  getVisibleArea () {
    return this.getVisibleRectangles().reduce(function (val, rectangle) {
      return val + rectangle.width * rectangle.height;
    }, 0);
  }

};
