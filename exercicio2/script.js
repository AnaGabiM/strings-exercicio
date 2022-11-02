const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const copiaString = minhaString.trim()

console.log("Original", minhaString.length)
console.log("Copia", copiaString.length)

trocaTraço =  minhaString.replace(/________/, "sticioso")
console.log(trocaTraço)
