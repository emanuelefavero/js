function firstFunction() {
    secondFunction()
}

function secondFunction() {
    thirdFunction()
}

function thirdFunction() {
    // console.trace() method displays a trace that show how the code ended up at a certain point.
    console.trace()
}

firstFunction()

// Trace
// at thirdFunction
// at secondFunction
// at firstFunction
