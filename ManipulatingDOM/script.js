const container = document.querySelector("#container");
const greeting = document.createElement("p");
greeting.classList.add("greeting");
greeting.textContent = "Hey I'm red!";
greeting.style.color="red";
container.appendChild(greeting);

const greetingBlue=document.createElement("h3");
greetingBlue.classList.add("greetingBlue");
greetingBlue.textContent="I'm a blue h3";
greetingBlue.style.color="blue";
container.appendChild(greetingBlue);

const secondContainer=document.createElement("div");
secondContainer.classList.add("secondContainer");
secondContainer.style.border="black 3px solid";
secondContainer.style.backgroundColor="pink";
container.appendChild(secondContainer);

const greetingDiv=document.createElement("h1");
greetingDiv.classList.add("greetingDiv");
greetingDiv.textContent="I'm in a div";
secondContainer.appendChild(greetingDiv);

const meToo=document.createElement("p");
meToo.classList.add("meToo");
meToo.textContent="ME TOO!";
secondContainer.appendChild(meToo);