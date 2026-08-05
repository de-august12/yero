async function loadPropagation(){

    try {

        const response = await fetch(
            "https://services.swpc.noaa.gov/products/summary/10cm-flux.json"
        );

        const solar = await response.json();

        document.getElementById("sfi").innerHTML =
            solar.flux || "unavailable";

    } catch(error){

        document.getElementById("sfi").innerHTML =
            "unavailable";

    }


    let conditions = {

        k: 2,
        a: 6,
        sunspots: 120

    };


    document.getElementById("kindex").innerHTML =
        conditions.k;

    document.getElementById("aindex").innerHTML =
        conditions.a;

    document.getElementById("sunspots").innerHTML =
        conditions.sunspots;


    updateBands(conditions.k);

    updateDX();

}



function updateBands(k){

    let bands = "";


    if(k <= 2){

        bands += "160m: fair<br>";
        bands += "80m: good<br>";
        bands += "40m: good<br>";
        bands += "20m: excellent<br>";
        bands += "17m: excellent<br>";
        bands += "15m: excellent<br>";
        bands += "10m: good<br>";
        bands += "6m: fair<br>";

    }

    else {

        bands += "160m: poor<br>";
        bands += "80m: fair<br>";
        bands += "40m: fair<br>";
        bands += "20m: reduced<br>";
        bands += "17m: reduced<br>";
        bands += "15m: poor<br>";
        bands += "10m: poor<br>";
        bands += "6m: closed<br>";

    }


    document.getElementById("bands").innerHTML =
        bands;

}



function updateDX(){

    let spots = [

        "14.074 MHz FT8 - G4ABC to JA1XYZ",
        "7.074 MHz FT8 - DL1AAA to W1XYZ",
        "28.400 MHz SSB - EA7ABC to PY2ABC"

    ];


    document.getElementById("dxcluster").innerHTML =
        spots.join("<br>");

}



function updateUTC(){

    let time = new Date();

    document.getElementById("utc").innerHTML =
        time.toUTCString();

}



loadPropagation();

updateUTC();

setInterval(updateUTC, 1000);
