let zero = document.getElementById('zero');
let count = 0;

const Plus = () => {
    count++;
    zero.innerHTML = count;
}
const Minus = () => {
    count--;
    zero.innerHTML = count;
}
