function greet(name) {
    return `Hello ${name}`;
}

const greet2 = (name) => {
    return `Hello ${name}, welcome.`;
}

// export function for use
// module.exports = greet; // single export

module.exports = {
    greet,
    greet2
}