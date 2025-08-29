# JavaScript DOM Concepts

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`

- **getElementById** → Selects a single element by its unique `id`.
- **getElementsByClassName** → Selects all elements with the same class name and returns them like a collection (HTMLCollection).
- **querySelector** → Selects the first element that matches a CSS selector.
- **querySelectorAll** → Selects all elements that match a CSS selector and returns a NodeList.




## 2. How do you create and insert a new element into the DOM?

Steps:
1. Create the element using `document.createElement()`.
2. Add text or attributes if needed.
3. Insert it into the DOM using `appendChild()` or `append()`.

### Example:
```
let div = document.createElement("div");
div.textContent = "Hello";
document.body.appendChild(div);
```
# JavaScript Event Handling Concepts



## 3. What is Event Bubbling and how does it work?
- **Event Bubbling** means when an event happens on an element, it first runs on that element and then propagates upward step by step through its parent elements until it reaches the top (`document`).

---

## 4. What is Event Delegation in JavaScript? Why is it useful?
- **Event Delegation** means instead of adding event listeners to many child elements, we add the listener to their parent and use event bubbling to detect which child triggered the event.

### Why is it useful?
- Reduces memory usage.  
- Works for dynamically added elements.

---

## 5. Difference between `preventDefault()` and `stopPropagation()`
- **preventDefault()** → Stops the browser’s default action (e.g., stops a link from opening or a form from submitting).  
- **stopPropagation()** → Stops the event from bubbling up to parent elements.
