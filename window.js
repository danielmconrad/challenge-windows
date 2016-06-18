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
    // const window = this.windows[index];
    // const windowsInFront = this.windows.splice(0, index);
  }

};
