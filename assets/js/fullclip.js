import $ from 'jquery';

export default function(options) {
  let _this = this
  this.each(function () {
    let obj = $(this)

    var settings = $.extend({
      current: 0,
      images: [],
      transitionTime: 1000,
      wait: 3000,
      static: false
    }, options);

    // preload images
    var i, end;
    for (i = 0, end = settings.images.length; i < end; ++i) {
        new Image().src = settings.images[i];
    }
    // sort out the transitions + specify vendor prefixes
    obj
      .css('background-image', 'url(' + settings.images[settings.current] + ')')
      .css('-webkit-transition', 'background ' + settings.transitionTime + 's ease-in-out')
      .css('-moz-transition', 'background ' + settings.transitionTime + 'ms ease-in-out')
      .css('-ms-transition', 'background ' + settings.transitionTime + 'ms ease-in-out')
      .css('-o-transition', 'background ' + settings.transitionTime + 'ms ease-in-out')
      .css('transition', 'background ' + settings.transitionTime + 'ms ease-in-out')

    // if only one image, set as static background
    if (settings.static) {
      obj
        .css('background-image', 'url(' + settings.images[settings.current] + ')');
      return;
    }

    // change the background image
    (function update() {
      settings.current = (settings.current + 1) % settings.images.length;
        obj.css('background-image', 'url(' + settings.images[settings.current] + ')');
        setTimeout(update, settings.wait);
    }());
  });
}($)
