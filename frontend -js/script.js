//alert('Pop up to block')
console.log('debugging this very easy, Javascript is interpreted lang, each line can be interpreted in console itself')

//variables
let x = 10
let name = "vaibhav"
console.log('x is ', (typeof(x)))
console.log('name is ', (typeof(name)))

//function
function sayhello(name) {
    console.log('hello ' + name)        //hit from console
}

//accessing button of html in js
let inpUser = document.getElementById('inpUser')
let hellobutton = document.getElementById('hellobutton')

hellobutton.onclick = function() {
    let name = inpUser.value
    alert(' Hello ' + name)
}