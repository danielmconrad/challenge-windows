const Rectangle = require('./rectangle');

module.exports = {
  isSatisfiedBy: function (rectBelow, rectAbove) {
    return (rectBelow.x < rectAbove.x)
      && (rectBelow.y < rectAbove.y)
      && (rectBelow.width > rectAbove.width)
      && (rectBelow.height > rectAbove.height);
  },

  getRectangles: function (rectBelow, rectAbove) {
    let top = new Rectangle({
      x: rectBelow.x,
      y: rectBelow.y,
      width: rectBelow.width,
      height: rectAbove.y,
    });

    let left = new Rectangle({
      x: rectBelow.x,
      y: rectAbove.y,
      width: rectBelow.x + rectAbove.x,
      height: rectAbove.height,
    });

    let right = new Rectangle({
      x: rectAbove.x + rectAbove.width,
      y: rectAbove.y,
      width: (rectBelow.x + rectBelow.width) - (rectAbove.x + rectAbove.width),
      height: rectAbove.height,
    });

    let bottom = new Rectangle({
      x: rectBelow.x,
      y: rectAbove.y + rectAbove.height,
      width: rectBelow.width,
      height: (rectBelow.y + rectBelow.height) - (rectAbove.y + rectAbove.height),
    });

    return [top, left, right, bottom];
  },
};
