// async
async function hello() {
    return "Ciao";
}

hello().then((value) => {
    console.log(value);
});

// Hello!

// async with try catch error
async function hello2() {
    try {
        return console.log('Hello');
    } catch (error) {
        console.log(error);
    }
}

hello2().then(() => {
    console.log('World');
});

// Hello
// World
