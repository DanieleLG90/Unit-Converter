/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
/*
let imput = "20"
let imputConvert = Number(imput)
const meterFeet = 3.281

let meterFeetConversion = imputConvert * meterFeet
console.log (meterFeetConversion.toFixed(3))
*/
const meterFeet = 3.281
const literGallons = 0.264
const kgPound = 2.204

let inputEl = document.getElementById ("input-el")
const convertBtn = document.getElementById ("convert-btn")
let lengthText = document.getElementById ("length-text")




convertBtn.addEventListener ("click", function (){
    conversion (meterFeet, lengthText, "meters", "ft")
    
})

function conversion (number, text, par1, par2) {
    let firstConv = parseInt(inputEl.value) * number
    let secondConv = parseInt(inputEl.value) / number
    
    text.innerHTML = 
        `${inputEl.value} ${par1} = ${firstConv.toFixed(3)} ${par2} | 
        ${inputEl.value} ${par2} = ${secondConv.toFixed(3)} ${par1} `
    
    
    
    
}