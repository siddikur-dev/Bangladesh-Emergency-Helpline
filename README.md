# Bangladesh-Emergency-Helpline

"A centralized web portal for quick access to all emergency hotline numbers in Bangladesh."
JavaScript Q&A

1. Difference between getElementById, getElementsByClassName, querySelector / querySelectorAll

getElementById → selects one element by id.

getElementsByClassName → returns all elements with class (HTMLCollection, live).

querySelector → returns first match (CSS selector).

querySelectorAll → returns all matches (NodeList, static).

2. How to create and insert a new element
   const div = document.createElement("div");
   div.innerText = "Hello!";
   document.body.appendChild(div);

3. Event Bubbling

Event travels from the target element → parent → up to document.

4. Event Delegation

Attach one event listener to a parent to handle events for its child elements. Useful for performance + dynamic elements.

5. preventDefault() vs stopPropagation()

preventDefault() → stops default action (form submit, link navigation).

stopPropagation() → stops event from bubbling to parents.
