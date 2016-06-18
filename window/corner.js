const Rectangle = require('./rectangle');

module.exports = {
  isSatisfiedBy: function (rectBelow, rectAbove) {
    return (
      this._isTopLeftCorner(rectBelow, rectAbove)
      || this._isTopRightCorner(rectBelow, rectAbove)
      || this._isBottomRightCorner(rectBelow, rectAbove)
      || this._isBottomLeftCorner(rectBelow, rectAbove)
    );
  },

  getRectangles: function (rectBelow, rectAbove) {
    if (this._isBottomRightCorner(rectBelow, rectAbove))
      return this._getBottomRightRectangles(rectBelow, rectAbove);
  },

  _isTopLeftCorner: function (rectBelow, rectAbove) {
    return rectBelow.top < rectAbove.bottom
      && rectAbove.bottom < rectBelow.bottom
      && rectAbove.left < rectBelow.left
      && rectBelow.left < rectAbove.right;
  },

  _isTopRightCorner: function (rectBelow, rectAbove) {
    return rectAbove.top < rectBelow.top
      && rectBelow.top < rectAbove.bottom
      && rectAbove.left < rectBelow.right
      && rectBelow.right < rectAbove.right;
  },

  _isBottomRightCorner: function (rectBelow, rectAbove) {
    return rectAbove.top < rectBelow.bottom
      && rectBelow.bottom < rectAbove.bottom
      && rectAbove.left < rectBelow.right
      && rectBelow.right < rectAbove.right;
  },

  _getBottomRightRectangles: function (rectBelow, rectAbove) {
    let top = new Rectangle({
      x: rectBelow.x,
      y: rectBelow.y,
      width: rectBelow.width,
      height: rectAbove.top - rectBelow.top,
    });

    let bottom = new Rectangle({
      x: rectBelow.x,
      y: rectAbove.y,
      width: rectAbove.left - rectBelow.left,
      height: rectBelow.bottom - rectAbove.top,
    });

    return [top, bottom];
  },

  _isBottomLeftCorner: function (rectBelow, rectAbove) {
    return rectAbove.left < rectBelow.left
      && rectBelow.left < rectAbove.right
      && rectAbove.top < rectBelow.bottom
      && rectBelow.bottom < rectAbove.bottom;
  },
};
