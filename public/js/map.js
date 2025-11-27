maptilersdk.config.apiKey = window.mapToken;
const coordinates = window.listing.geometry.coordinates;

const map = new maptilersdk.Map({
    container: 'map',
    style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${mapToken}`,
    center: coordinates,
    zoom: 9,
});

console.log("Coordinates:", coordinates);

const marker = new maptilersdk.Marker({color: "red"})
    .setLngLat(coordinates)
    .setPopup(new maptilersdk.Popup({ offset: 25 })
    .setHTML(`
        <h4>${window.listing.location}</h4>
        <p>Exact location provided after booking</p>
    `))
    .addTo(map);



   
