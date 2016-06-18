module.exports = class WindowManager {
  constructor (windows = []) {
    this.windows = [];
    windows.forEach(this.addWindow.bind(this));
  }

  addWindow (window) {
    window.manager = this;
    this.windows.push(window);
  }

};
