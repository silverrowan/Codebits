// Select existing element (in DOM) & assign to variable
const item1 = document.querySelector('#id') //or (first element) by class, or 
const item2 = document.querySelectorAll('p') //or (all) by html tag
const btn = document.querySelector("button") //first one only
const buttons = document.querySelectorAll("button")

//Create a new element in DOM
const newItem = document.createElement('div') // html tag needed
    //give it a class
    newItem.classList.add("className")
    //give it some content (as text)
    newItem.textContent = "text"
    //give it some css style
    newItem.style.color = "green"
    newItem.style.border = "1px, solid, blue"
    newItem.style.backgroundColor = "grey" //NOTE diff from css name! dash replaced w camelCase.
    
    //put it in the document as last child of element "item1"
    item1.appendChild(newItem);

//give a single item a click function - only allows one event type!
    btn.onclick = () => functionCode
//give a single item multiple listeners
    btn.addEventListener("click",  () => functionCode)
//give all of an item a click function
    buttons.forEach((button) => {
        button.addEventListener("click", () => functionCode)
    });

//Some Useful "events"
    click
    dblclick
    keydown
    keyup