//stretches slider image's container to the device height
function stretchSlider() {
    $('.carousel .item').css("height", $(window).height());
}

//Google Maps initial function
function initGoogleMap() {
    var var_location = new google.maps.LatLng(45.430817,12.331516);

    var var_mapoptions = {
        scrollwheel: false,
        center: var_location,
        zoom: 14
    };

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title:"Venice"});

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var_marker.setMap(var_map);
}


$(function(){

    stretchSlider();
    //stretch slider image's container when window is resized
    $(window).resize(function(){
        stretchSlider();
    });

    //setting up sliders images
    $('#slide1').css("background-image", "url(resources/img/carousel/photo1.jpg)");
    $('#slide2').css("background-image", "url(resources/img/carousel/photo2.jpg)");
    $('#slide3').css("background-image", "url(resources/img/carousel/photo3.jpg)");
    //EOF setting up sliders images

    //isotope configuration
    var $container = $('#isotope').imagesLoaded( function() {
        $container.isotope({
            itemSelector: '.col-md-6',
            isFitWidth: true
        });
        $container.isotope({ filter: '*' });
        $('#filters').on( 'click', 'label', function() {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
        });
    });

    //calling initGoogleMap() function on load
    google.maps.event.addDomListener(window, 'load', initGoogleMap);
});

