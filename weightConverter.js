document.getElementById("output").style.visibility = "hidden";

document.getElementById("lbsInput").addEventListener("input", function(e) {
    
    document.getElementById("output").style.visibility = "visible";
   
    var result = e.target.value;
    console.log(result);

    document.getElementById("gramsOutput").innerHTML = (result / 0.0022046).toFixed(2);
    
    document.getElementById("kgOutput").innerHTML = (result / 2.2046).toFixed(2);
    
    document.getElementById("ozOutput").innerHTML = (result / 16).toFixed(2);
    
});