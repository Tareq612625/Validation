
// let submitBtn=document.querySelector("#submitBtn");

// submitBtn.addEventListener('click', validationCheck)
// option1.addEventListener('click', createInput);
// option2.addEventListener('click', createInput);
// option3.addEventListener('click', createInput);


// function createInput(){
//     let inputFrom=document.querySelector("#input");

//     let div=document.createElement("div")
//     div.className="form-group"
//     div.innerHTML=`<br><input type="text" class="form-control" id="inputValue"><br>
//     <button type="submit" class="btn btn-primary" id="submitBtn">Submit</button>`
//     inputFrom.appendChild(div)
// }

// function validationCheck(){
// // let inputValue=document.querySelector("inputValue").Value;
// // re=/^[0-9]{4}$/
// // reTest(re, inputValue)
// console.log("clasdfs");

// }

// function reTest(re, str){
//     if(re.test(str)){
//        // console.log(`'${re}' is matched '${str}'`); }
//         console.log(`Valid Email ='${str}'`); }
//     else{
//      //console.log(`'This is not valid postal code'${str}`); 
//      console.log(`'This is not valid Email'${str}`); 
//     }

// let option1=document.querySelector("#option1");
// let option2=document.querySelector("#option2");
// let option3=document.querySelector("#option3");
// option3=addEventListener('click', validationCheckPostalCode);
// option3=addEventListener('click', validationCheckEmail);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#option1').addEventListener('click', validationCheckEmail);
    document.querySelector('#option2').addEventListener('click', validationCheckNumber);
    document.querySelector('#option3').addEventListener('click', validationCheckPostalCode);
    if ('document' in window) {
      console.log('doc');
    }
  });
////////////validation function
///Email check
function validationCheckEmail(event){
    let answer = prompt("Enter Your Email: " );
    console.log(answer);
    re=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    reTest(re, answer)
    function reTest(re, str){
            if(re.test(str)){
                alert(`Valid  ='${str}'`); }
            else{
             alert(`'This is not valid '${str}`); 
            }

        }

    event.preventDefault()
}
/////////Number Check
function validationCheckNumber(event){
    let answer = prompt("Enter Your Number: " );
    console.log(answer);
    re=/^(\+)?(88)?01[0-9]{9}$/

    reTest(re, answer)
    function reTest(re, str){
            if(re.test(str)){
                alert(`Valid  ='${str}'`); }
            else{
             alert(`'This is not valid '${str}`); 
            }

        }

    event.preventDefault()
}


function validationCheckPostalCode(event){
    let answer = prompt("Enter Your Postal Code Value: " );
    console.log(answer);

    let  re=/^[0-9]{4}$/

    reTest(re, answer)
    function reTest(re, str){
            if(re.test(str)){
                alert(`Valid  ='${str}'`); }
            else{
             alert(`'This is not valid '${str}`); 
            }

        }

    event.preventDefault()
}
