const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres:\"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase)

let copia = (frase.replace(/verde/,"rosa").replace(/azul/,"laranja"))
maiusculo = copia.substring(76,101).toUpperCase()
resultado = copia.replace(/mas não deixe o gato sair/, maiusculo)

verde = resultado.includes("verde")
laranja = resultado.includes("laranja")

console.log("contem verde?", verde)
console.log("contem laranja?", laranja)

console.log(resultado)