module.exports = {
  isSatisfiedBy: function (rectBelow, rectAbove) {
    return (
      this._isTopOverlapped(rectBelow, rectAbove)
      || this._isRightOverlapped(rectBelow, rectAbove)
      || this._isBottomOverlapped(rectBelow, rectAbove)
      || this._isLeftOverlapped(rectBelow, rectAbove)
    );
  },

  getRectangles: function (rectBelow, rectAbove) {
    //
  },

  _isTopOverlapped: function (rectBelow, rectAbove) {
    return rectAbove.top < rectBelow.top
      && rectBelow.top < rectAbove.bottom
      && rectAbove.left < rectBelow.left
      && rectAbove.right > rectBelow.right;
  },

  _isRightOverlapped: function (rectBelow, rectAbove) {
    return rectBelow.left < rectAbove.left
      && rectAbove.left < rectBelow.right
      && rectAbove.top < rectBelow.top
      && rectAbove.bottom > rectBelow.bottom;
  },

  _isBottomOverlapped: function (rectBelow, rectAbove) {
    return rectBelow.top < rectAbove.top
      && rectAbove.top < rectBelow.bottom
      && rectAbove.left < rectBelow.left
      && rectAbove.right > rectBelow.right;
  },

  _isLeftOverlapped: function (rectBelow, rectAbove) {
    return rectBelow.left < rectAbove.right
      && rectBelow.right > rectAbove.right
      && rectAbove.top < rectBelow.top
      && rectAbove.bottom > rectBelow.bottom;
  },
};
