# 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
## The difference between getElementById vs getElementsByClassName vs querySelector / querySelectorAll is ;

1.getElementById("id") → It just return one number where id is unique .

2.getElementsByClassName("class") → It returns many elements of which have similar class name .

3.querySelector("cssSelector") → It finds all elements in the page that match my CSS selector and gives back a NodeList .

4.querySelectorAll("cssSelector") → It returns all elements .

# 2.How do you create and insert a new element into the DOM?
let NewDiv = document.createElement("div");
NewDiv.textContent = "Hello World!";
document.body.appendChild(NewDiv);

# 3.What is Event Bubbling and how does it work?
When we click child element, event bubbles goes up to parent → grandparent → document.
## Example: 
click on <button> inside <div> → first button handler, then div handler, then body handler.

# 4.What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is when we put event listener on parent instead of every child.

# 5.What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() → stops default action .
stopPropagation() → stops event bubbling.
