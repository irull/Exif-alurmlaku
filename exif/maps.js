// variabel global marker
var marker;

// function taruhMarker(peta, posisiTitik) {
//   if (marker) {
//     // pindahkan marker
//     marker.setPosition(posisiTitik);
//   } else {
//     // buat marker baru
//     marker = new google.maps.Marker({
//       position: posisiTitik,
//       map: peta,
//     });
//   }
//   // isi nilai koordinat ke form
//   document.getElementById("lat").value = posisiTitik.lat();
//   document.getElementById("lng").value = posisiTitik.lng();
// }

// fungsi initialize untuk mempersiapkan peta
function initialize() {
  var propertiPeta = {
    center: new google.maps.LatLng(-6.209004369420562, 106.8473994296479),
    // center: new google.maps.LatLng(
    //   document.getElementById("Lat").value =posisiTitik.lat(),
    //   document.getElementById("Long").value =posisiTitik.long()
    // ),
    zoom: 5, //Tingkat skala (0:Bumi, 1:Peta Dunia, 5:Landmass/Continent, 10:Kota, 15:Jalan, 20:Bangunan)
    mapTypeId: google.maps.MapTypeId.ROADMAP, // Tipe MAPS yang digunakan (ROADMAP, satelite, terrain, hybrit)
  };

  var peta = new google.maps.Map(
    document.getElementById("googleMap"),
    propertiPeta
  );

  // membuat Marker
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(
      [document.querySelector("#latitude")],
      [document.querySelector("#langtitude")]
    ),
    map: peta,
    // animation: google.maps.Animation.DROP, // DROP //Menambahkan Animasi MARKER BOUNCE
    icon: "https://icons.iconarchive.com/icons/flaticonmaker/flat-style/32/flag-icon.png",
  });

  // even listner ketika peta diklik
  google.maps.event.addListener(peta, "click", function (event) {
    taruhMarker(this, event.latLng);
  });
}

// event jendela di-load
google.maps.event.addDomListener(window, "load", initialize);
