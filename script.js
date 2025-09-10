let input = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

function mod(string) {
    m = 100
  return (eval(string) / m);
}


function adjustFontSize() {
    const maxFontSize = 40;
    const minFontSize = 16;
    input.style.fontSize = maxFontSize + 'px';
    while (input.scrollWidth > input.clientWidth && parseInt(input.style.fontSize) > minFontSize) {
        input.style.fontSize = (parseInt(input.style.fontSize) - 1) + 'px';
    }
}



arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
            adjustFontSize();
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
            adjustFontSize();
        } else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
            adjustFontSize();
        } else if (e.target.innerHTML == '%') {
            string = mod(string);
            input.value = string;
            adjustFontSize();
        } else{
            string += e.target.innerHTML;
            input.value = string;
            input.scrollLeft = input.scrollWidth;
            adjustFontSize();
        }
        
    });
});
            