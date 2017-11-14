document.getElementById("output").style.visibility = "hidden";
window.onload = grams();

function grams() {
      
    document.getElementById("lbsInput").addEventListener("input", function(e) {
    
    document.getElementById("output").style.visibility = "visible";
   
    var result = e.target.value;
    console.log(result);

    document.getElementById("grams").innerHTML = '<h4 class="font-weight-light">Pounds:</h4><div id="gramsOutput">'+(result / 453.592).toFixed(3)+'</div></div></div>';
    
    document.getElementById("kilograms").innerHTML = '<h4 class="font-weight-light">Kilograms:</h4><div id="gramsOutput">'+(result / 1000).toFixed(3)+'</div></div></div>';
    
    document.getElementById("ounces").innerHTML = '<h4 class="font-weight-light">Ounces:</h4><div id="ounces">'+(result / 28.3495).toFixed(3)+'</div></div></div>';
    
}); 
}

function kilograms() {
    
    document.getElementsById("lbsInput").addEventListener("input", function(e) {
    
    document.getElementsByName('inputNumber')[0].value = '';
    document.getElementById("output").style.visibility = "visible";
   
    var result = e.target.value;
    console.log(result);

    document.getElementById("grams").innerHTML = '<h4 class="font-weight-light">Grams:</h4><div id="gramsOutput">'+(result / 0.001).toFixed(4)+'</div></div></div>';
    
    document.getElementById("kilograms").innerHTML = '<h4 class="font-weight-light">Pounds:</h4><div id="pounds">'+(result / 0.453592).toFixed(2)+'</div></div></div>';
    
    document.getElementById("ounces").innerHTML = '<h4 class="font-weight-light">Ounces:</h4><div id="ounces">'+(result / 16).toFixed(3)+'</div></div></div>';
    
});
}

function ounces() {

    document.getElementById("lbsInput").addEventListener("input", function(e) {
    
    document.getElementById("output").style.visibility = "visible";
   
    var result = e.target.value;
    console.log(result);

    document.getElementById("grams").innerHTML = '<h4 class="font-weight-light">Grams:</h4><div id="gramsOutput">'+(result / 0.035274).toFixed(3)+'</div></div></div>';
    
    document.getElementById("kilograms").innerHTML = '<h4 class="font-weight-light">Kilograms:</h4><div id="gramsOutput">'+(result / 35.274).toFixed(3)+'</div></div></div>';
    
    document.getElementById("ounces").innerHTML = '<h4 class="font-weight-light">Pounds:</h4><div id="gramsOutput">'+(result / 16).toFixed(3)+'</div></div></div>';
    
});
}