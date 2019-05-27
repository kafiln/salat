const axios = require("axios");

const { API_URL } = require("./constants");

//TODO: This should be an arg
// const cityId = process.env.city || DEFAULT_CITY

// console.log(cities);

export default function(id) {
    axios.get(`${id}`)
}
