const container = document.querySelector(`#container`);

const p = document.createElement('p');
p.style.color = 'red';
p.textContent = `Hey I'm red!`;
container.appendChild(p);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = `I'm a blue H3!`;
container.appendChild(h3);

const divColored = document.createElement('div');
divColored.style.backgroundColor = 'pink';
divColored.style.border = '5px solid black';
    const h1 = document.createElement('h1');
    h1.textContent = `I'm in a div`;
    divColored.appendChild(h1);

    const pInner = document.createElement('p');
    pInner.textContent = "ME TOO!";
    divColored.appendChild(pInner);
container.appendChild(divColored);

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});