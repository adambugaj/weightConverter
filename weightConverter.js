function init() {
    // hide the results div
    document.getElementById("output").style.visibility = "hidden";

    // select all the options
    var options = document.querySelectorAll(".option");

    // in loop add the event listeners for each option
    options.forEach(function(option){
        option.addEventListener("click", function(){
            // clear input value, and placeholder
            var inputN = document.getElementsByName("inputNumber")[0];
            inputN.value = "";
            inputN.placeholder = "Enter amount...";
              
            // add event listener for input
            document.getElementById("lbsInput").addEventListener("input", function(e) {
                // show the results on input change (actually, this should only run once)
                document.getElementById("output").style.visibility = "visible";
                // get the value from the input
                var result = e.target.value;
                // use function, to convert input value
                result = convert(result);
                // display the result div
                display(result[0], result[1], result[2]);
            });
        });
    });
}



function display(grams, kilos, ounces) {
    document.getElementById("showGrams").innerHTML = '<h4 class="font-weight-light">Grams:</h4><div id="gramsOutput">'+grams+'</div></div></div>';
    
    document.getElementById("showKilos").innerHTML = '<h4 class="font-weight-light">Kilograms:</h4><div id="kgOutput">'+kilos+'</div></div></div>';
    
    document.getElementById("showOunces").innerHTML = '<h4 class="font-weight-light">Pounds:</h4><div id="pounds">'+ounces+'</div></div></div>';
}


function convert(input) {
    var grams,
        kilos,
        ounces;

        // see if, radio is checked, then calculate
    if(document.querySelector("#grams").checked === true) {
        grams = input;
        kilos = (input / 1000).toFixed(3);
        ounces = (input / 28.3495).toFixed(3);
    }

    if(document.querySelector("#kilos").checked === true) {
        grams = (input / 0.001).toFixed(4);
        kilos = input;
        ounces = (input / 16).toFixed(3);
    }

    if(document.querySelector("#ounces").checked === true) {
        grams = (input / 0.035274).toFixed(3);
        kilos = (input / 35.274).toFixed(3);
        ounces = (input / 16).toFixed(3);
    }
    // return result
    var result = [grams, kilos, ounces];
    return result;
}


// call the app!
init();