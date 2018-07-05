(function ($) {
  function PreLoad(imgList, options) {
    this.imgs = (typeof imgList === 'String') ? [imgList]: imgList
    this.opts = $.extend({}, PreLoad.DEFAULTS, options)
    this._unordered()

  }

  PreLoad.DEFAULTS = {
    each: null,
    all: null
  }

  PreLoad.prototype._unordered = function () {
    const imgList = this.imgs
    const opts = this.opts
    let count = 0, len = imgList.length
    $.each(imgList, function (i, src) {
      if (typeof src !== 'string') return
      const imgObj = new Image()
      imgObj.src = src
      $(imgObj).on('load error', function () {
        opts.each && opts.each(count)
        if (count >= len - 1) {
          opts.all && opts.all()
        }
        count++
      })
    })
  }

  $.extend({
    preload: function (imgList, opts) {
      new PreLoad(imgList, opts)
    }
  })
})(jQuery)
