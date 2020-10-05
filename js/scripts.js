const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p1 = document.createElement('p');
p1.textContent = "Hey I'm red!";
p1.style.color = 'red';


container.appendChild(p1);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

container.appendChild(h3);

const div = document.createElement('div');
div.setAttribute('style', 'background-color: pink; border: 1px solid black');

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!";

const p2 = document.createElement('p');
p2.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p2);
container.appendChild(div);