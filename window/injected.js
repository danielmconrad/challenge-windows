module.exports = {
  isSatisfiedBy: function (rectBelow, rectAbove) {
    return (
      this._isTopInjected(rectBelow, rectAbove)
      || this._isRightInjected(rectBelow, rectAbove)
      || this._isBottomInjected(rectBelow, rectAbove)
      || this._isLeftInjected(rectBelow, rectAbove)
    );
  },

  getRectangles: function (rectBelow, rectAbove) {
    //
  },

  _isTopInjected: function (rectBelow, rectAbove) {
    return rectBelow.top < rectAbove.bottom
      && rectAbove.bottom < rectBelow.bottom
      && rectBelow.left < rectAbove.left
      && rectAbove.right < rectBelow.right;
  },

  _isRightInjected: function (rectBelow, rectAbove) {
    return rectBelow.left < rectAbove.left
      && rectAbove.left < rectBelow.right
      && rectBelow.top < rectAbove.top
      && rectAbove.bottom < rectBelow.bottom;
  },

  _isBottomInjected: function (rectBelow, rectAbove) {
    return rectBelow.top < rectAbove.top
      && rectAbove.top < rectBelow.bottom
      && rectBelow.left < rectAbove.left
      && rectAbove.right < rectBelow.right;
  },

  _isLeftInjected: function (rectBelow, rectAbove) {
    return rectBelow.left < rectAbove.right
      && rectAbove.right < rectBelow.right
      && rectBelow.top < rectAbove.top
      && rectAbove.bottom < rectBelow.bottom;
  },

};
