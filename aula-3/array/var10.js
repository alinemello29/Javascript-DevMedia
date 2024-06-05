var funcionarios = [
    "Bárbara",
    "Carlos",
    "Helena",
    "Maria",
    "Rogério"
];

console.log(funcionarios);

// [ 'Bárbara', 'Carlos', 'Helena', 'Maria', 'Rogério' ]

var novos_funcionarios = [
    "Guilherme",
    "Jéssica"
];

funcionarios[0] = novos_funcionarios[1];
funcionarios[4] = novos_funcionarios[0];

console.log(funcionarios);

// [ 'Jéssica', 'Carlos', 'Helena', 'Maria', 'Guilherme' ]