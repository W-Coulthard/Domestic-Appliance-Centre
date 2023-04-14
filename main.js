let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 52.06683953846858, lng: 1.1380160321422261},
    zoom: 12,


  });
  let marker = new google.maps.Marker({
    position: { lat: 52.06683953846858, lng: 1.1380160321422261},
    map: map,
    title: "Domestic Appliance Centre"
  });
}

initMap();