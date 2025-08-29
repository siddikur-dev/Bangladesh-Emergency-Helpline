# Javascript QNA

##  1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

###  getElementById: Returns a single element with the specified ID (unique). getElementsByClassName: Returns a live HTMLCollection of elements with the specified class name. querySelector: Returns the first element that matches a CSS selector. querySelectorAll: Returns a static NodeList of all elements matching a CSS selector.

## 2. How do you create and insert a new element into the DOM?
### Use document.createElement() to create the element, then appendChild() or insertBefore() to insert it into the DOM.

## 3. What is Event Bubbling and how does it work?
### Event Bubbling is a process where an event starts from the target element and bubbles up to its parent elements in the DOM hierarchy.

## 4. What is Event Delegation in JavaScript? Why is it useful?
### Event Delegation is a technique where a single event listener is added to a parent element to handle events from its child elements. It’s useful for improving performance and handling dynamically added elements.

## 5. What is the difference between preventDefault() and stopPropagation() methods?
### preventDefault() stops the browser’s default behavior for an event. stopPropagation() prevents the event from bubbling up to parent elements.
