(function($) {
    $.hunterPopup = function(box, options) {
        var box = $(box);
        var defaults = {
            title: 'jQuery hunterPopup Demo',
            placement: 'left',
            width: '100%',
            height: '100%',
            content: $('<div><h3>jQuery hunterPopup Demo</h3></div>'),
            event: closePopup
        };
        var obj = $.extend(defaults, options);

        // var template = $('<div class="Hunter-pop-up" id="Hunter-pop-up"><a class="close"><i class="glyphicon glyphicon-remove"></i></a><div class="arrow"></div><h3 class="title"></h3><div id="Hunter_pop_wrap" class="Hunter-wrap"></div></div>');
        var template = $('<div class="Hunter-pop-up" id="Hunter-pop-up"><div id="Hunter_pop_wrap" class="Hunter-wrap"></div></div>');
        var title = $('.title', template);
        var pop_wrap = $('#Hunter_pop_wrap', template);

        $(document).click(function() {
            template.remove();
        });

        box.click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            $('.Hunter-pop-up').remove();
            var _this = $(this);
            var offset = _this.offset();
            var top = offset.top + _this.outerHeight() + 15;
            if(obj.placement == 'left') {
                template.css({
                    'left': offset.left,
                    'top': top
                });
            } else {
                template.addClass("Hunter-pop-up-right");
                template.css({
                    'left': offset.left - obj.width + _this.width() / 2,
                    'top': top
                });
            }

            buildPopup();
            $('body').append(template);
            $('.Hunter-pop-up').click(function(event) {
                event.stopPropagation();
            });

            obj.event();

        });
        var reqContent;
        box.mouseover(function(event) {
            // debugger;
            event.preventDefault();
            event.stopPropagation();
            $('.Hunter-pop-up').remove();
            var _this = $(this);
            var offset = _this.offset();
            var top = offset.top + _this.outerHeight() + 15;

            //_this.addClass('active');
            _this.attr('aria-expanded', 'true');
            let id = _this.data('dropdown');
            reqContent = $('#'+id).html();
            console.log("content "+ reqContent);
            
            if(obj.placement == 'left') {
                template.css({
                    'left': offset.left,
                    'top': top
                });
            } else {
                template.addClass("Hunter-pop-up-right");
                template.css({
                    'left': offset.left - obj.width + _this.width() / 2,
                    'top': top
                });
            }

            buildPopup();
            $('body').append(template);
            $('.Hunter-pop-up').hover(function(event) {
                event.stopPropagation();
            });

            obj.event();

        });


        function buildPopup() {
            buildPopupContent();
            closePopup();
        };

        function buildPopupContent() {
            title.text(obj.title);

            var _content = obj.content;
            _content.show("slow").delay(5000);
            pop_wrap.children().remove();
            pop_wrap.append(reqContent);//_content);
           //  pop_wrap.style.minWidth('100px');//(obj.width);
           //  pop_wrap.height('100px');//(obj.height);
        };

        function closePopup() {
            template.on('click', '.close', function(event) {
                event.preventDefault();
                event.stopPropagation();
                template.remove();
            });
        }
        // box.mouseout(function(event) {
        //     event.preventDefault();
        //     event.stopPropagation();
        //     template.remove();
        // });
    };

    $.fn.extend({
        hunterPopup: function(options) {
            options = $.extend({}, options);
            this.each(function() {
                new $.hunterPopup(this, options);
            });
            return this;
        }

    });
})(jQuery);