import 'assets/css/index.css'
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  element.classList.add('hello');
  var btn = document.createElement('button');

  element.innerHTML = 'hello world';

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());