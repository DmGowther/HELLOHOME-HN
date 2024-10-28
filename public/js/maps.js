import L from "leaflet";

export function initializeMap() {
  const map = L.map("map").setView([15.7835, -90.2308], 6);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);

  L.marker([15.7835, -90.2308])
    .addTo(map)
    .bindPopup("¡Aquí está tu ubicación!")
    .openPopup();
}
