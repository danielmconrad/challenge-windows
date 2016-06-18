module.exports = class Rectangle {
  constructor (attributes) {
    this.x = attributes.x;
    this.y = attributes.y;
    this.width = attributes.width;
    this.height = attributes.height;

    this.top = attributes.y;
    this.left = attributes.x;
    this.right = attributes.x + attributes.width;
    this.bottom = attributes.y + attributes.height;
  }
};
