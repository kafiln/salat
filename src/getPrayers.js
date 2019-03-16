// const request = require('request');
const jsdom = require("jsdom");
const axios = require("axios");
const { JSDOM } = jsdom;

// const cities = require('./data/fr/cities_fr.json');
const prayers = require('./data/fr/prayers_fr.json');
const { API_URL } = require("./constants");

//TODO: This should be an arg
// const cityId = process.env.city || DEFAULT_CITY

// console.log(cities);

export default function (id) {
    const headers = {
        // 
        'Accept': '*/*',
        'Content-Type': 'html/text'
    };
    return axios.get(`${API_URL}?ville=${id}`, { headers })
        .then(response => {
            const dom = new JSDOM(`${response.body}`);
            const tds = dom.window.document.getElementsByTagName('td');
            const prayers = getPrayerTimes(tds);
            return prayers;
        }).catch(err => {
            console.log('shit happens')
            console.error(err);
        })
}


let getPrayerTimes = function (tds) {
    var j = 0;
    for (var i = 0; i < tds.length; i++) {
        if (i % 2) {
            prayers[j].time = tds[i].textContent.trim();
            j++;
        }
    }
    // Transorm array to object and return it
    return prayers.reduce((acc, { name, time }) => { acc[name] = time; return acc }, {});
}