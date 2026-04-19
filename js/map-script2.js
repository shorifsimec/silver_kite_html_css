function initMap() {
  const location = { lat: 23.8743187, lng: 90.3790059 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: location,
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Silver Kite Private Ltd",
  });
}

// load map after page load
window.onload = initMap;

function openMap() {
  window.open(
    "https://www.google.com/maps?q=Silver+Kite+Private+Ltd&ll=23.8743187,90.3790059&z=17",
    "_blank"
  );
}