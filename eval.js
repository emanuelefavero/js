// Eval - evaluate a string of JavaScript code in the global context
// NOTE: eval() is a dangerous function, which executes the code it's passed with the privileges of the caller. If you run eval() with a string that could be affected by a malicious party, you may end up running malicious code on the user's machine with the permissions of your webpage / extension. More importantly, third party code can see the scope in which eval() was invoked, which can lead to possible attacks in ways to which the similar Function is not susceptible.
let x = 2
let y = 3
let text = 'x + y'
let sum = eval(text)

console.log(sum) // 5
