function podeSubir(x, y) {
    let altura = x;
    let acompanhada = y;
    if (altura > 1.40 && altura <= 2) {
        return "Acesso autorizado."
    } else if (altura <= 1.40 && altura >= 1.20 && acompanhada) {
        return "Acesso autorizado somente com acompanhante."
    } else {
        return "Acesso negado."
    }
}

console.log(podeSubir(2.0, false))