let tableMilitary;
let tableNonMilitary;
let tableEngine;

// load data files
function preload(){
    tableMilitary = loadTable('data/smithsonian_nasm_military.csv', 'csv', 'header');
    console.log(tableMilitary)

    tableNonMilitary = loadTable('data/smithsonian_nasm_nonmilitary.csv', 'csv', 'header');
    console.log(tableNonMilitary)

    tableEngine = loadTable('data/smithsonian_nasm_engine.csv', 'csv', 'header');
    console.log(tableEngine)
}

function setup(){
    setupMap();
    addCircles();
}

function setupMap(){
    // count rows and columns for each table
    print(tableMilitary.getRowCount() + 'total rows in table');
    print(tableMilitary.getColumnCount() + 'total columns in table');

    print(tableNonMilitary.getRowCount() + 'total rows in table');
    print(tableNonMilitary.getColumnCount() + 'total columns in table');

    print(tableEngine.getRowCount() + 'total rows in table');
    print(tableEngine.getColumnCount() + 'total columns in table');

    // noCanvas();
    // set up initial map center and zoom level
    mymap = L.map('mapid', {scrollWheelZoom: false}).setView([38.889, -77.026], 3);

    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(mymap);


}

function addCircles(){
    // step through the rows of the table and add a dot for each event
    for (var i=0; i<tableMilitary.getRowCount(); i++){
        var row = tableMilitary.getRow(i)

        // create a new dot
        var circle = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
            color: '#b0000a',
            fillColor: '#b0000a',
            fillOpacity: 0.5,
            radius: 50
        })

        // place the new dot on the map and add tooltip to it
        circle.addTo(mymap);
        circle.bindPopup(row.get('title') + '<br>Manufactor: ' + row.get('manufactor') + '<br>Year: ' + row.get('year') + '<br>Type: military').addTo(mymap);

    }

    for (var i=0; i<tableNonMilitary.getRowCount(); i++){
        var row = tableNonMilitary.getRow(i)

        // create a new dot
        var circle = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
            color: '#5d8aa8',
            fillColor: '#5d8aa8',
            fillOpacity: 0.5,
            radius: 50
        })

        // place the new dot on the map and add tooltip to it
        circle.addTo(mymap);
        circle.bindPopup(row.get('title') + '<br>Manufactor: ' + row.get('manufactor') + '<br>Year: ' + row.get('year') + '<br>Type: non-military').addTo(mymap);

    }

    for (var i=0; i<tableEngine.getRowCount(); i++){
        var row = tableEngine.getRow(i)

        // create a new dot
        var circle = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
            color: '#bbbbbb',
            fillColor: '#bbbbbb',
            fillOpacity: 0.5,
            radius: 50
        })

        // place the new dot on the map and add tooltip to it
        circle.addTo(mymap);
        circle.bindPopup(row.get('title') + '<br>Manufactor: ' + row.get('manufactor') + '<br>Year: ' + row.get('year') + '<br>Type: engine' + '<br>Material: ' + row.get('material')).addTo(mymap);

    }

 

}

