function mostrarDecimal(valor: number): string{
    let decimal = (valor).toString(10)
    return decimal
}
function mostrarHexadecimal(valor: number): string{
    let hexadecimal = (valor).toString(16)
    return hexadecimal
}
function mostrarOctal(valor: number): string{
    let octal = (valor).toString(8)
    return octal
}
function mostrarBinario(valor: number): string{
    let binario = (valor).toString(2)
    return binario
}

function mostrarResultado(): void{
    console.log('Decimal Octal Hexadecimal  Binario')
    for( let i = 0; i <=225; i++){
        console.log(`${mostrarDecimal(i)}  ${mostrarOctal(i)}   ${mostrarHexadecimal(i)}   ${mostrarBinario(i)}`)
    }
}

mostrarResultado()