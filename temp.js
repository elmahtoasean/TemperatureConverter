document.getElementById("celcius").addEventListener("input",function(){
    let celcius = parseFloat(this.value);
    let farenheit = (celcius * 9/5) + 32;
    let kelvin = celcius + 273.16;

    document.getElementById("farenheit").value = (farenheit == isNaN) ? "" : farenheit;
    document.getElementById("kelvin").value = (kelvin == isNaN) ? "" : kelvin;
});

document.getElementById("farenheit").addEventListener("input",function(){
    let farenheit = parseFloat(this.value);
    let celcius = (farenheit - 32) + (5/9);
    let kelvin = celcius + 273.16;

    document.getElementById("celcius").value = (celcius == isNaN) ? "" : celcius;
    document.getElementById("kelvin").value = (kelvin == isNaN) ? "" : kelvin;
});

document.getElementById("kelvin").addEventListener("input",function(){
    let kelvin = parseFloat(this.value);
    let celcius = kelvin = 273.16;
    let farenheit = (celcius * (9/5)) + 32;

    document.getElementById("celcius").value = (celcius == isNaN) ? "" : celcius;
    document.getElementById("farenheit").value = (farenheit == isNaN) ? "" : farenheit;
});