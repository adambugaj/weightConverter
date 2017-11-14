document.getElementById("output").style.visibility = "hidden";
window.onload = grams();

function grams() {
      
     var inputN = document.getElementsByName("inputNumber")[0];
         inputN.value = "";
         inputN.placeholder = "Enter grams...";
    
    document.getElementById("lbsInput").addEventListener("input", function(e) {
    
    document.getElementById("output").style.visibility = "visible";
   
    var result = e.target.value;
    
    var grams = (result / 453.592).toFixed(3);
    var kilos = (result / 1000).toFixed(3);
    var ounces = (result / 28.3495).toFixed(3);

    display(grams, kilos, ounces); 
}); 
}

function kilograms() {
    
     var inputN = document.getElementsByName("inputNumber")[0];
         inputN.value = "";
         inputN.placeholder = "Enter kilograms...";
    
    document.getElementById("lbsInput").addEventListener("input", function(e) {
    
    document.getElementById("output").style.visibility = "visible";
    
   
    var result = e.target.value;

    var grams = (result / 0.001).toFixed(4);
    var kilos = (result / 0.453592).toFixed(2);
    var ounces = (result / 16).toFixed(3);

    display(grams, kilos, ounces);
});
}

function ounces() {

     var inputN = document.getElementsByName("inputNumber")[0];
         inputN.value = "";
         inputN.placeholder = "Enter ounces...";
    
    document.getElementById("lbsInput").addEventListener("input", function(e) {
        
        
    
    document.getElementById("output").style.visibility = "visible";
   
        
    var result = e.target.value;

    var grams = (result / 0.035274).toFixed(3);
    var kilos = (result / 35.274).toFixed(3);
    var ounces = (result / 16).toFixed(3);

    display(grams, kilos, ounces);
});
}


function display(grams, kilos, ounces) {
    document.getElementById("grams").innerHTML = '<h4 class="font-weight-light">Grams:</h4><div id="gramsOutput">'+grams+'</div></div></div>';
    
    document.getElementById("kilograms1").innerHTML = '<h4 class="font-weight-light">Kilograms:</h4><div id="kgOutput">'+kilos+'</div></div></div>';
    
    document.getElementById("ounces").innerHTML = '<h4 class="font-weight-light">Pounds:</h4><div id="pounds">'+ounces+'</div></div></div>';
}