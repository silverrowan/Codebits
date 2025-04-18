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

//page load/unload events (call on document obj)
    DOMContentLoaded
    load
    beforeunload
    unload

//mouse events ("DOM level 3???") for each mouse button click 3 events occur in order: mousedown, mouseup, click
    click           = both one mousedown AND one mouseup occur over Element
    mousedown       = pressing down on mouse button
    mouseup         = releasing mouse button
    dblclick        = doubleclick (two click events) * if have both click and dblclic on same element wont know which of click or double click was done
    mousemove   * can lead to performance issues - registers even w 1 px movement. best to add only when needed and then remove 
    mouseover       - cursor moves from outside to inside boundaries of elmnt
    mouseout        - reverse of mouseover
    mouseenter      - diff from over in that doesnt fire when moves over descendant elements
    mouseleave      - reverse as mouseenter

    wheel event? mentioned in quiz as when using the wheel, but not in body of explanation, needs more research

    //mouse objects have property "button" that indicates WHICH button on mouse clicked with. event.button
        0 - "main" button, usually left
        1 - auxiliary button, usually middle/wheel
        2 - secondary, usually right btn
        3 - 4th btn, usually browser back btn
        4 - 5th, usually browser forward btn

    //modifier keys - when clicking: Shift, Ctrl, Alt, & Meta (windows/command keys by OS) 
    //on the event object, four boolean properties for these buttons
        if (e.shiftKey) keys.push('shift')
            e.ctrlKey ... 'ctrl'
            e.altKey ... 'alt'
            e.metaKey ... 'meta'

    //mouse coordinates as properties passed to event
        screenX - mouse in rel'n to entire screen
        screenY
        clientX - coords w/in applications client area
        clientY

//Keyboard events (order: keydown, keypress,<--before change to text box,After change to textbox--> keyup)
    keydown - when you press down & repeatedly when held down
    keypress - when press a CHARACTER like a,b,c NOT arrow, home, or end. also repeatedly on press & hold
    keyup   - when release key

    //keyboard event properties (noteworthy @ this stage)
        key - the character pressed
        code - the physical key code

//Event delegation - assign single handler to parent instead of multiple to children
    //using event bubbling to handle events at a higher level in the DOM than the element on which the event originated
    then use switch statement to separate out the different responses eg
    menu.addEventListener('click', (event) => {
        let target = event.target;
    
        switch(target.id) {
            case 'home':
                code
            break;
            case...etc
        }
    });

//Event Construction
let event = new Event(type, [,options]);
    type = string to identify the event, eg. 'click'
    options =  object w 2 optional properties
        bubbles: is a boolean value that deterrmines if it bubbles or not (true=bubbles)
        cancelable: boolean value that specifies if event can be cancelled (true=can cancel)
        default is false to both!

//Event Dispatch - after creating an event, can dispatch it - make it happen via code, no user input req'd
    element.dispatchEvent(event);
    event.isTrusted is true if generated by user actions, false if generated by code. 


    //can use a function to trigger another event via creating a custom event
        //does this have to trigger off code based events already occuring, or can it be linked w user triggered events
        //why do this instead of just putting the chained on event in the original? - apparently to decouple the code exectution.....
        

