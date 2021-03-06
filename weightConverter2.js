//document.getElementById("output").style.visibility = "hidden";

document.getElementById("inputValue").addEventListener("input", function(e){ 
    
    var result = e.target.value
    console.log(result);
    
    result = convert(result);
    
    console.log(result);
    showValue(result[0], result[1], result[2], result[3]);
    
});

function convert(numberValue) {
    
    var grams = "";
    var kilograms = "";
    var ounces = "";
    var pounds = "";
    
    if (document.getElementById("option1").checked === true) {
            
        pounds = (numberValue / 453.592).toFixed(3);
        kilograms = (numberValue / 1000).toFixed(3);
        ounces = (numberValue / 28.3495).toFixed(3);

    }
    else if (document.getElementById("option2").checked === true) {
        grams = (numberValue / 0.001).toFixed(4);
        pounds = (numberValue / 0.453592).toFixed(2);
        ounces = (numberValue / 16).toFixed(3);
    }
    else {
        grams = (numberValue / 0.035274).toFixed(3);
        kilograms = (numberValue / 35.274).toFixed(3);
        ounces = (numberValue / 16).toFixed(3);
    }

    store = [grams, kilograms, ounces, pounds];
    return store;
    
}

function showValue(grams, kilograms, ounces, pounds) {
    
        if (document.getElementById("option1").checked === true) {
            document.getElementById("grams").innerHTML = '<h4 class="font-weight-light">Pounds:</h4><div id="gramsOutput">'+pounds+'</div>';
        
            document.getElementById("kilograms1").innerHTML = '<h4 class="font-weight-light">Kilograms:</h4><div id="kgOutput">'+kilograms+'</div>';
    
            document.getElementById("ounces").innerHTML = '<h4 class="font-weight-light">Ounces:</h4><div id="ozOutput">'+ounces+'</div>';
        }
        
        else if (document.getElementById("option2").checked === true) {
            document.getElementById("grams").innerHTML = '<h4 class="font-weight-light">Grams:</h4><div id="gramsOutput">'+grams+'</div></div></div>';
    
            document.getElementById("kilograms1").innerHTML = '<h4 class="font-weight-light">Pounds:</h4><div id="pounds">'+pounds+'</div>';
    
            document.getElementById("ounces").innerHTML = '<h4 class="font-weight-light">Ounces:</h4><div id="ozOutput">'+ounces+'</div>';
        }
        else {
            
            document.getElementById("grams").innerHTML = '<h4 class="font-weight-light">Grams:</h4><div id="gramsOutput">'+grams+'</div>';
    
            document.getElementById("kilograms1").innerHTML = '<h4 class="font-weight-light">Kilograms:</h4><div id="kgOutput">'+kilograms+'</div>';
    
            document.getElementById("ounces").innerHTML = '<h4 class="font-weight-light">Pounds:</h4><div id="pounds">'+pounds+'</div>';
            
        }
            
 
}