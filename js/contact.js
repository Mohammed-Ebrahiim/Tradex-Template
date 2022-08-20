//validation//validation//validation//validation//validation//validation//validation
var formTag = document.getElementById('FormTag')

formTag.addEventListener('input', function (e) {
    console.log(e.target.id)

    switch (e.target.id) {
        case "userName":

            NameValidation(e.target)
            break;
        case "email":
            emailValidation(e.target)

            break
        case 'password':
            passwordValidation(e.target)

            break
    }
})

formTag.addEventListener('submit' , function(e){
    e.preventDefault()
    console.log(e)
})


function NameValidation(input){
    var inputValue = input.value.trim()
    console.log(inputValue.length);
    (inputValue.length < 3) ? showError(input , "enter at least 3 character") : removeError(input)
}

function showError(element , msg){
    element.nextElementSibling.innerText = msg
    element.nextElementSibling.classList.add('text-danger')
}

function removeError(element){
    element.nextElementSibling.innerText = ""
}
// regular experssion of email ==> http://zparacha.com/validate-email-address-using-javascript-regular-expression
function emailValidation(input){

    // nouran@hotmail.com
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    var inputValue = input.value    

    console.log(emailPattern.test(inputValue))
    if(emailPattern.test(inputValue) == false) showError(input , "enter a valid Email")
    else removeError(input)

}
// var d = new Date()

// regular experssion of password ==> https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
function passwordValidation(input){
    var inputValue = input.value
    var passwordPattern = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})");
    if(passwordPattern.test(inputValue) == false) showError(input , "enter at least 1 capital character , 1 small character , 1 letter , 1 special character....")
    else removeError(input)
}
//validation