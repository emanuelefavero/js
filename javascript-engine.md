# Javascript Engine

The JavaScript engine is the part of the browser that is responsible for interpreting and executing JavaScript code

## Table of Contents

- [Types of JavaScript Engines](#types-of-javascript-engines)
- [How does the JavaScript engine work?](#how-does-the-javascript-engine-work)
- [Execution Context](#execution-context)
- [Garbage Collection](#garbage-collection)
- [Call Stack](#call-stack)
- [Event Loop](#event-loop)
- [Task Queue](#task-queue)
- [Web APIs](#web-apis)
- [Callback Queue](#callback-queue)
- [Microtask Queue](#microtask-queue)
- [Learn More](#learn-more)

## Types of JavaScript Engines

- **V8** is the JavaScript engine used by Google Chrome, Chromium, and Node.js
- **SpiderMonkey** is the JavaScript engine used by Firefox
- **Chakra** is the JavaScript engine used by Microsoft Edge (now based on V8)
- **JavaScriptCore** is the JavaScript engine used by Safari

## How does the JavaScript engine work?

- When a web page is loaded, the browser's JavaScript engine starts to parse the JavaScript code. It begins by breaking the code down into small chunks, called tokens. These tokens are then organized into a tree-like structure called the Abstract Syntax Tree (AST).

> Once the AST is created, the engine starts to execute the code. This is done by traversing the AST and running the corresponding JavaScript code for each node. The engine also keeps track of the current state of the program, including variables and their values, and any functions that have been defined.

## Execution Context

- Each time a piece of JavaScript code is executed, an execution context is created. This context contains information about the code that is being executed, including the variables and functions that are in scope.

> There are two types of execution contexts: global and function. The global execution context is created when the JavaScript engine starts, and it contains information about the global scope of the program. When a function is called, a new function execution context is created, containing information about the variables and functions that are in scope within that function.

## Garbage Collection

- As the JavaScript engine runs, it creates and destroys many objects and variables. To prevent memory leaks and other performance issues, the engine uses a process called garbage collection to periodically clean up and free up memory that is no longer being used.

> During garbage collection, the engine scans through all the objects and variables that are in memory, and it determines which ones are no longer being used or referenced. These unused objects and variables are then removed from memory, freeing up space for other parts of the program to use.

## Call Stack

- The call stack is a data structure that keeps track of the execution context of the program. When a function is called, a new execution context is created and pushed onto the call stack. When the function finishes executing, its execution context is popped off the call stack.

> The call stack is a LIFO (last in, first out) data structure.

## Event Loop

- The event loop is a mechanism that allows the JavaScript engine to execute code asynchronously. This means that the engine can run code in the background while other code is being executed.

> The event loop works by continuously checking the call stack to see if there are any functions that need to be executed. If there are, the event loop pops the function off the call stack and executes it. If there are no functions to execute, the event loop checks the task queue to see if there are any pending asynchronous tasks. If there are, the event loop pops the task off the task queue and executes it.

## Task Queue

- The task queue is a data structure that contains all the asynchronous tasks that need to be executed. When a task is created, it is pushed onto the task queue. When the event loop pops a task off the task queue, it executes it.

> The task queue is a FIFO (first in, first out) data structure.

## Web APIs

- The web APIs are a set of built-in browser functions that allow JavaScript code to interact with the browser. These functions include things like `setTimeout`, `setInterval`, `fetch`, and `addEventListener`.

> When a web API function is called, it is pushed onto the task queue. When the event loop pops the function off the task queue, it executes it. The web API function then performs its task, and when it is finished, it pushes a callback function onto the task queue. When the event loop pops the callback function off the task queue, it executes it.

## Callback Queue

- The callback queue is a data structure that contains all the callback functions that need to be executed. When a callback function is created, it is pushed onto the callback queue. When the event loop pops a callback function off the callback queue, it executes it.

> The callback queue is a FIFO (first in, first out) data structure.

## Microtask Queue

- The microtask queue is a data structure that contains all the microtasks that need to be executed. When a microtask is created, it is pushed onto the microtask queue. When the event loop pops a microtask off the microtask queue, it executes it.

> The microtask queue is a FIFO (first in, first out) data structure.

## Learn More

- [JavaScript Engine Fundamentals](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)
- [Javascript Engine Wikipedia](https://en.wikipedia.org/wiki/JavaScript_engine#:~:text=A%20JavaScript%20engine%20is%20a,every%20major%20browser%20has%20one.)
- [V8](https://v8.dev/)

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#javascript-engine) &nbsp; [**Go Home &nbsp; 🏠**](README.md)
