const hoje = new Date();

// Imprimindo uma string com a data e a hora local
console.log( hoje.toLocaleString() );

// Imprimindo uma string com a data armazenada
console.log( hoje.toString() );

// Imprimindo uma string com a data universal (UTC)
console.log( hoje.toUTCString() );

// Imprimindo timestamp
console.log( hoje.valueOf() );