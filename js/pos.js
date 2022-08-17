
function initMap() {
    const map = new google.maps.Map(document.getElementById("mapView"), {
      zoom: 6,
      center: { lat: 37.91411270820343, lng: 29.11869446140924 },
    });
    const infoWindow = new google.maps.InfoWindow({
      content: "",
      disableAutoPan: true,
    });
    // Create an array used to label the markers.
    const labels = [
      '<b>HOTEL</b><br><b>Boutique Hotel Montana</b><br>Dalyan, Ataturk Blv., 48840 Ortaca/Mugla<br>Price from £52 per night',
      '<b>HOTEL</b><br><b>Hilton Dalaman</b><br>Sarigerme, Tourism Center, 48610 Ortaca/Mugla<br>Price from £58 per night',
      '<b>HOTEL</b><br><b>Swissotel Residences Cesme</b><br>Celal Bayar, 5152. Sk. No:43, 35930 Cesme/Izmir<br>Price from £72 per night', 
      '<b>HOTEL</b><br><b>Nova Boutique Hotel</b><br>Sigacik, 129. Sk. No:48, 35460 Seferihisar/Izmir<br>Price from £79 per night',    
      '<b>HOTEL</b><br><b>Titanic Beach Hotel</b><br>Guzeloba, Yasar Sobutay Bul No:36, 07230 Muratpasa/Antalya<br>Price from £92 per night', 
      '<b>HOTEL</b><br><b>Dolphin Palace Hotel</b><br>Kemeragzi, Yasar Sobutay Bulvari No:352, 07112 Aksu/Antalya<br>Price from £88 per night',
      '<b>RESTAURANT</b><br><b>Toprakana Restaurant</b><br>Yerbelen, 962. Sk. No:264, 48600 Ortaca/Mugla', 
      '<b>RESTAURANT</b><br><b>Dolphin Restaurant</b><br>Sarigerme, Cumhuriyet Cd No:27, 48600 Ortaca/Mugla',
      '<b>RESTAURANT</b><br><b>Halabagi Breakfast</b><br>Musalla, 35930 Cesme/Izmir', 
      '<b>RESTAURANT</b><br><b>Mise En Place</b><br>Hidirlik, 81/6 Sk No:3, 35460 Seferihisar/İzmir',
      '<b>RESTAURANT</b><br><b>Terrrace Steak House</b><br>Kemeragzi Yeni Turizm Yolu Lara Dogakent Sitesi 5, D:A Blok, 07112 Aksu/Antalya',
      '<b>RESTAURANT</b><br><b>Lara Kundu Fish Restaurant</b><br>Kemeragzi Koyu Yolu, 07119 Aksu/Antalya'
    ];
    
    const icon = 'images/location.png';
    // Add some markers to the map.
    const markers = locations.map((position, i) => {
      const label = labels[i % labels.length];
      
      
      const marker = new google.maps.Marker({
        position,
        map : map,
        icon: icon,
        
        
      });
  
      // markers can only be keyboard focusable when they have click listeners
      // open info window when marker is clicked
      marker.addListener("click", () => {
        infoWindow.setContent(label);
        infoWindow.open(map, marker);
      });
      return marker;
    });
  
    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
  }
  
  const locations = [
    { lat: 36.83691029626133, lng: 28.647366608848156 },
    { lat: 36.710120638794194, lng: 28.72356266283729 },
    { lat: 38.305879739049125, lng: 26.36774001932323 },
    { lat: 38.19481567399632, lng: 26.78697900819562 },
    { lat: 36.85575697284798, lng: 30.861971676328587 },
    { lat: 36.85541509360303, lng: 30.876071710209736 },
    { lat: 36.82226978875959, lng: 28.794519414297397 },
    { lat: 36.71540449022069, lng: 28.705833645047463 },
    { lat: 38.28859043265593, lng: 26.309455473781334 },
    { lat: 38.19265815706032, lng: 26.842553174442287 },
    { lat: 36.85887724127307, lng: 30.86652470147632 },
    { lat: 36.85886059830216, lng: 30.88337034177273 },
   
  ];
  
  window.initMap = initMap;
  