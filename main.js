let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 1.1380160321422261, lng: 52.06683953846858 },
    zoom: 8,
  });
}

initMap();