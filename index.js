
// var gmailValue

// document.querySelector(".input-button button").addEventListener("click",function(){
  
//     gmailValue = $("#gmail").val()
//     if(gmailValue.endsWith("@gmail.com")){
//         alert("vaild gmail")
//     }if(gmailValue === ""){
//         alert("wrong")
//         $("#gmail").addClass("error")
        
//     }
// })
let errorMessage = document.querySelector("#error")
let form = document.getElementById("form")
let gmail = document.getElementById("gmail")
gmail.required = false
console.log(gmail)
form.addEventListener("submit", errorMass)


function errorMass(e){
    let messages = []
    if(gmail.value == '' || gmail.value == null){
        messages.push("no text")
        gmail.required = true
        gmail.classList.add("error")
        setTimeout(function(){gmail.classList.remove("error");gmail.required = false}, 2000)
        
    }
    if(!(gmail.value.endsWith("@gmail.com"))){
        gmail.classList.add("error")
        gmail.required = true
        messages.push("not this way")
           }
  
    if(messages.length > 0){
        e.preventDefault()
    }
}