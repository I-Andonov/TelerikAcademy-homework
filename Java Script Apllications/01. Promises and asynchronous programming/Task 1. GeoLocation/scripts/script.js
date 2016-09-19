(function(){
let getCick = document.getElementById('click')
    .addEventListener('click', getPozition);

function getPozition() {

    navigator.geolocation.getCurrentPosition(function success(pos) {
        let src = "http://maps.googleapis.com/maps/api/staticmap?center=" +
            pos.coords.latitude + "," + pos.coords.longitude +
            "&zoom=13&size=700x450&sensor=false",
            resultdone = document.getElementById('map');
        resultdone.setAttribute('src', src);

    }, function error(err) {
        let result = document.getElementById('error')
            .innerHTML = 'Error';
            
    });
}

})();