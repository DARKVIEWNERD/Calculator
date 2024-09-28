let display = document.getElementById("display");
        let lastResult = null;

        function calculateToDisplay(input) {
           
            if (lastResult !== null||display.value=="Error") {
                display.value = "";
                lastResult = null;
            }
            display.value += input;
        }

        function clearResult() {
            display.value = "";
           
        }

        function calculate() {
            try {
                lastResult = eval(display.value);
                display.value = lastResult || ""; 
            } catch (error) {
                display.value = "Error";
                lastResult = null;
                
            }
        }