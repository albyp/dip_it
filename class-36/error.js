function divide(a, b) {
    if(b === 0) {
        throw new Error("Cannot divideby zero");
    }
    return a / b;
}

console.log(divide(5,2));

// try catch
try {
    // might produce an error
    console.log(divide(10, 0));
} catch(error) {
    console.log("Error has occured:", error.message);
} finally {
    console.log("This runs at the end");
}