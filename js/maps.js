const locations1 = [
    ['<b>HOTEL</b><br><b>Boutique Hotel Montana</b><br>Dalyan, Ataturk Blv., 48840 Ortaca/Mugla<br>Price from £52 per night', 36.83691029626133, 28.647366608848156,'hotel'],
    ['<b>HOTEL</b><br><b>Hilton Dalaman</b><br>Sarigerme, Tourism Center, 48610 Ortaca/Mugla<br>Price from £58 per night', 36.710120638794194, 28.72356266283729,'hotel'],
    ['<b>RESTAURANT</b><br><b>Toprakana Restaurant</b><br>Yerbelen, 962. Sk. No:264, 48600 Ortaca/Mugla', 36.82226978875959, 28.794519414297397,'restaurant'],
    ['<b>RESTAURANT</b><br><b>Dolphin Restaurant</b><br>Sarigerme, Cumhuriyet Cd No:27, 48600 Ortaca/Mugla', 36.71540449022069, 28.705833645047463,'restaurant']
  ];
  
const locations2 = [
    ['<b>HOTEL</b><br><b>Swissotel Residences Cesme</b><br>Celal Bayar, 5152. Sk. No:43, 35930 Cesme/Izmir<br>Price from £72 per night', 38.305879739049125, 26.36774001932323, 'hotel'],
    ['<b>HOTEL</b><br><b>Fontana Hotel</b><br>Ciftlik Mah. 1112/2 Sok. No:18 35930 Cesme/Izmir<br>Price from £79 per night', 38.31104292829463, 26.282153324534363, 'hotel'],
    ['<b>RESTAURANT</b><br><b>Halabagi Breakfast</b><br>Musalla, 35930 Cesme/Izmir', 38.28859043265593, 26.309455473781334, 'restaurant'],
    ['<b>RESTAURANT</b><br><b>Mise En Place</b><br>Hidirlik, 81/6 Sk No:3, 35460 Seferihisar/İzmir', 38.19265815706032, 26.842553174442287, 'restaurant']
  ];
  
const locations3 = [
    ['<b>HOTEL</b><br><b>Titanic Beach Hotel</b><br>Guzeloba, Yasar Sobutay Bul No:36, 07230 Muratpasa/Antalya<br>Price from £92 per night', 36.85575697284798, 30.861971676328587, 'hotel'],
    ['<b>HOTEL</b><br><b>Dolphin Palace Hotel</b><br>Kemeragzi, Yasar Sobutay Bulvari No:352, 07112 Aksu/Antalya<br>Price from £88 per night', 36.85541509360303, 30.876071710209736, 'hotel'],
    ['<b>RESTAURANT</b><br><b>Terrrace Steak House</b><br>Kemeragzi Yeni Turizm Yolu Lara Dogakent Sitesi 5, D:A Blok, 07112 Aksu/Antalya', 36.85887724127307, 30.86652470147632, 'restaurant'],
    ['<b>RESTAURANT</b><br><b>Lara Kundu Fish Restaurant</b><br>Kemeragzi Koyu Yolu, 07119 Aksu/Antalya', 36.85886059830216, 30.88337034177273, 'restaurant']
  ];

  

let map;
let markers=[]; 

function initMap() 
{


  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: new google.maps.LatLng(41.1821318232123, 29.074349099158862),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });


  var marker, i;
  var infowindow = new google.maps.InfoWindow();
  

var destinations = document.getElementById("selectBtn");
destinations.addEventListener("change", function() 
{

    deleteMarkers()
  
    window.location.hash='#map';
  
    if(destinations.value == "")
    {
      map.setCenter(new google.maps.LatLng(37.136171,29.929340));
      map.setZoom(6);
    }
  
  
    if(destinations.value == "Mugla")
    {  
      for (i = 0; i < locations1.length; i++) 
      { 
            marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations1[i][1], locations1[i][2]),
            map: map,
            icon:'images/location.png',
            });
            markers.push(marker);      
            google.maps.event.addListener(marker, 'click', (function(marker, i) 
            {
              return function() 
              {
                infowindow.setContent(locations1[i][0]);
                infowindow.open(map, marker);
              }
            })(marker, i));
      }
      map.setCenter(new google.maps.LatLng(locations1[0][1], locations1[0][2]));
      map.setZoom(11);
    }
    
    if(destinations.value == "Izmir")
    {
      for (i = 0; i < locations2.length; i++) 
      { 
            marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations2[i][1], locations2[i][2]),
            map: map,
            icon:'images/location.png',
            });
            markers.push(marker);      
            google.maps.event.addListener(marker, 'click', (function(marker, i) 
            {
              return function() 
              {
                infowindow.setContent(locations2[i][0]);
                infowindow.open(map, marker);
              }
            })(marker, i));
      }
      map.setCenter(new google.maps.LatLng(locations2[0][1], locations2[0][2]));
      map.setZoom(9);
    
    }
    
    if(destinations.value == "Antalya")
    {
      for (i = 0; i < locations3.length; i++) 
      { 
            marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations3[i][1], locations3[i][2]),
            map: map,
            icon:'images/location.png',
            });
            markers.push(marker);      
            google.maps.event.addListener(marker, 'click', (function(marker, i) 
            {
              return function() 
              {
                infowindow.setContent(locations3[i][0]);
                infowindow.open(map, marker);
              }
            })(marker, i));
      }
      map.setCenter(new google.maps.LatLng(locations3[0][1], locations3[0][2]));
      map.setZoom(13.5);
    }
    
    
});

}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
for (let i = 0; i < markers.length; i++) {
  markers[i].setMap(map);
}
}

// Removes the markers from the map, but keeps them in the array.
function hideMarkers()
{
setMapOnAll(null);
}


// Deletes all markers in the array by removing references to them.
function deleteMarkers()
{
hideMarkers();
markers = [];
}

