var test = 'jaja';
console.log('hello world!');


// E 1
window.console.log('experiment 1');

// E 2
console.log('window', window);
console.log('document', document);

// E 3 
window.setTimeout(function hello () { console.log('async hello world') }, '3000')
console.log('window.document', window.document);

// E 4
const body = document.getElementsByClassName('container'); 
console.log(body);

// E 5
const load = function () {
  const h1 = document.getElementsByTagName('h1')[0]; 
  console.log(h1);
  h1.addEventListener('click', function hello() { alert('click!') } )
}
document.addEventListener("DOMContentLoaded", load, false);