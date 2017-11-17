/* ============================================================
 * Plugin Core Init
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */
$(document).ready(function() {
    'use strict';
    // Initialize Search
    $('[data-pages="search"]').search({
        // Bind elements that are included inside search overlay
        searchField: '#overlay-search',
        closeButton: '.overlay-close',
        suggestions: '#overlay-suggestions',
        brand: '.brand',
        // Callback that will be run when you hit ENTER button on search box
        onSearchSubmit: function(searchString) {
            console.log("Search for: " + searchString);
        },
        // Callback that will be run whenever you enter a key into search box. 
        // Perform any live search here.  
        onKeyEnter: function(searchString) {
            console.log("Live search for: " + searchString);
            var searchField = $('#overlay-search');
            var searchResults = $('.search-results');

            /* 
                Do AJAX call here to get search results
                and update DOM and use the following block 
                'searchResults.find('.result-name').each(function() {...}'
                inside the AJAX callback to update the DOM
            */

            // Timeout is used for DEMO purpose only to simulate an AJAX call
            clearTimeout($.data(this, 'timer'));
            searchResults.fadeOut("fast"); // hide previously returned results until server returns new results
            var wait = setTimeout(function() {

                searchResults.find('.result-name').each(function() {
                    if (searchField.val().length != 0) {
                        $(this).html(searchField.val());
                        searchResults.fadeIn("fast"); // reveal updated results
                    }
                });
            }, 500);
            $(this).data('timer', wait);

        }
    });
});
$(document).ready(function(){



    $('.carousel-overlay-black').on('mouseenter',function(){
        $(this).next().carousel('next');
        $(this).next().carousel('cycle');
    }).on('mouseleave', function() {
        $(this).next().carousel(0);
        $(this).next().carousel('pause');

    });

    var $window = $(window);
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize <=767) {
            $('.carousel').addClass('carousel-autoscroll');
        }
        else {
            if ($('.carousel').hasClass('carousel-autoscroll'))
                $('.carousel').removeClass('carousel-autoscroll');
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener

    $(window).resize(checkWidth);


    $('.carousel-autoscroll').waypoint(function(direction){
            //if(direction == 'up'){
            $(this.element).carousel('next');
            $(this.element).carousel('cycle');
            var prev = this.previous();
            var next = this.next();
            if(prev) {
                $(prev.element).carousel(0);
                $(prev.element).carousel('pause');
            }
            if(next) {
                $(next.element).carousel(0);
                $(next.element).carousel('pause');
            }
            //console.log($(this));
            // alert();
        }, {
            offset: 300
        }
    );


});