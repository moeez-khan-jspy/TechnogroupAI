!function(l) {
    "use strict";
    l(".color-trigger").on("click", function() {
        l(this).parent().toggleClass("visible-palate")
    }),
    l(".color-palate .colors-list .palate").on("click", function() {
        var a = l(this).attr("data-theme-file")
          , t = l('link[id="theme-color-file"]');
        l(t).attr("href", a),
        l(".color-palate .colors-list .palate").removeClass("active"),
        l(this).addClass("active")
    });
    var a = l(".color-palate .box-version li")
      , t = l("body");
    a.on("click", function(a) {
        l(this).hasClass("box") ? t.addClass("box-layout") : t.removeClass("box-layout")
    });
    var o = l(".color-palate .rtl-version li")
      , s = l(".page-wrapper");
    o.on("click", function(a) {
        l(this).hasClass("rtl") ? s.addClass("rtl") : s.removeClass("rtl")
    })
}(jQuery);
