function validaPeso(peso) {
    let pesoValido = false;

    if(peso > 0) {
        pesoValido = true;
    }

    return pesoValido;
}

function validaAltura(altura) {
    let alturaValida = false;

    if(altura > 0) {
        alturaValida = true;
    }

    return alturaValida;
}

export { validaPeso , validaAltura }