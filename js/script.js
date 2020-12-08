// // Set up initial map center and zoom level
// var map = L.map('mapid', {scrollWheelZoom: false}).setView([38.889, -77.026], 3);

// L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
//     maxZoom: 18,
// }).addTo(map);

// // Load data using d3
// Promise.all([
//     d3.csv("./data/smithsonian_nasm_aircraft.csv"),
//     d3.csv("./data/smithsonian_nasm_engine.csv"),
// ]).then(function(data){
//     console.log(data);

// }).catch(function(error){
//     // handle error   
// })