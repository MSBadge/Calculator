let input = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

function mod(string) {
    m = 100
  return (eval(string) / m);
}

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else if (e.target.innerHTML == '%') {
            string = mod(string);
            input.value = string;
        } else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    });
});
            