function initMap() {
        var uluru = {lat: 24.479641, lng: 118.140658};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }