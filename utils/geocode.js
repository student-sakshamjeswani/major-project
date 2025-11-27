const axios = require("axios");

async function forwardGeocode(query) {
    const apiKey = process.env.MAP_TOKEN;
    const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(query)}.json?key=${apiKey}&limit=1`;
    const res = await axios.get(url);

    if (res.data.features.length === 0) {
        throw new Error("No matching location found");
    }

    const feature = res.data.features[0];

    return {
        coordinates: feature.center,      // [lng, lat]
        place_name: feature.place_name
    };
}

module.exports = forwardGeocode;
