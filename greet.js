function greet(name, language) {
    const greetings = {
        English: `Hello, `,
        Spanish: `Hola, `,
        French: `Bonjour, `
    };
    return greetings[language] + name ;
}


console.log(greet('Leli', 'English')); //  Hello, Leli!
console.log(greet('Leli', 'Spanish')); //  Hola, Leli!
console.log(greet('Leli', 'French')); //  Bonjour, Leli!
