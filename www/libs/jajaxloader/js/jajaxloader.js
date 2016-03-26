(function ($) {


    var pluginName = "ajaxloader";
    var cssOverlay = "loader_overlay";
    var cssLoader = "loader";
    //var defaultImg = "/libs/jajaxloader/img/ajax-loader.gif";
    var defaultImg = "https://cdn.rawgit.com/lingtalfi/JAjaxLoader/master/www/libs/jajaxloader/img/ajax-loader.gif";

    $[pluginName] = function (element, options) {

        this.jEl = $(element);
        this.jOverlay = null;
        this.o = {};


        this.init(options);
    };

    $[pluginName].prototype = {
        defaults: {
            /**
             * @param img - string,
             *          the loader img.
             *          If not set, then the cssClass option is used.
             */
            img: '',
            /**
             * @param cssClass - string,
             *          the css class to apply to the loader overlay; only if the img option is not set.
             *          If the cssClass option is not set, the loader will eventually use
             *          a default image.
             */
            cssClass: '',
            /**
             * @param content - string,
             *          The content of the loader (its inner html).
             *          This only works if the loader is not an img
             *          (i.e., if the img option is empty, and the cssClass option is not empty).
             */
            content: '',
            /**
             * @param fadeSpeed - int,
             *      the speed (in ms) at which the overlay fades in and out.
             */
            fadeSpeed: 250,
        },
        init: function (options) {

            this.o = $.extend({}, this.defaults, options);


            if (null === this.jOverlay) {
                this.jOverlay = $('<div style="display: none" class="' + cssOverlay + '"></div>');
                this.jEl.prepend(this.jOverlay);
            }
            else {
                this.jOverlay.removeClass().addClass(cssOverlay);
            }


            var jLoader = null;
            if ('' !== this.o.img) {
                jLoader = $('<img class="' + cssLoader + '" src="' + this.o.img + '"/>');
            }
            else {
                if ('' !== this.o.cssClass) {
                    this.jOverlay.addClass(this.o.cssClass);
                    jLoader = $('<div class="' + cssLoader + '">' + this.o.content + '</div>');
                }
                else {
                    jLoader = $('<img class="' + cssLoader + '" src="' + defaultImg + '"/>');
                }
            }

            this.jOverlay.empty().append(jLoader);
        },
        stop: function () {
            this.jOverlay.fadeOut(this.o.fadeSpeed);
        },
        restart: function () {
            this.jOverlay.fadeIn(this.o.fadeSpeed);
        }
    };

    $.fn[pluginName] = function (options) {


        return this.each(function () {
            var plugin;
            if (undefined == $(this).data(pluginName)) {
                plugin = new $[pluginName](this, options);
                $(this).data(pluginName, plugin);
            }


            if ('stop' === options) {
                plugin = $(this).data(pluginName);
                plugin.stop();
            }
            else {
                plugin = $(this).data(pluginName);
                if ('undefined' !== typeof options) {
                    plugin.init(options);
                    plugin.restart();
                }
                else {
                    plugin.restart();
                }
            }

        });
    };

})(jQuery);