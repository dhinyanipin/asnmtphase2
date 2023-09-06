var email=document.getElementById('email');
var pwd=document.getElementById('pwd');
var pwderror=document.getElementById('pwderror');
var err1=document.getElementById('err1');
console.log('button clicked');
function change(){
    email.style.backgroundColor="yellow";
}
function hide(){
    email.style.backgroundColor="white";
}
function validate(){
    if (email.value==''||pwd.value==''){
        alert('field is empty')
        return false;
    }
   
    else if(pwd.value.length<8){
        pwderror.style.color=" red";
        pwderror.innerText='password contains min 8 characters ';

        return false;

    }
    else{
       
  
    var rexp=/^([a-zA-Z1-9\.-]+)@([a-zA-Z\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
     if(rexp.test(email.value)){
        err1.style.color="green";
        err1.innerText='email is valid';
         
         alert('validate proper');  
         return true; 
    }
    else{
        err1.style.color="red";
        err1.innerText='email is invalid';
         return false;   

    }
          
}
    
}