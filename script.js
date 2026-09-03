let btns = document.querySelectorAll("button");
let display = document.querySelector("#display");

let result = "";

for(let btn of btns){
    btn.addEventListener("click", (evt) =>{
        if (evt.target.innerHTML == "=") {
            result = eval(result).toString();
            display.value = result;
        }
        else if (evt.target.innerHTML == "AC") {
            result = "";
            display.value = result;
        }
        else if (evt.target.innerHTML == "DEL") {
            let length = result.length - 1;
            result = result.slice(0, length);
            display.value = result;
        }
        else {
            result += evt.target.innerHTML;
            display.value = result;
        }
    });
};