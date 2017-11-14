document.getElementById("output").addEventListener("input", function(e) {
    var result = e.target.value;
    
    console.log(result);

    document.getElementById("gramsOutput").innerHTML = (result / 0.0022046).toFixed(2);
    
    document.getElementById("")
    
});