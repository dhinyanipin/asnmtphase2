var email1=document.getElementById('email1');
var err2=document.getElementById('err2');
var phone=document.getElementById("phone");
var err3=document.getElementById('err3');
var psd=document.getElementById('psd');
var err4=document.getElementById('err4');

function validate1(){
    console.log ('button clicked');
    if (email1.value==""||phone.value==""){
        alert("filed is empty")
        return false;
    }
    
 if(psd.value==""){
            alert("filed is empty")
            return false;
        }
   else{
  
    if (phone.value.length<10) {
                err3.style.color="red";
                 err3.innerText="contains 10 nos";
                 return false;
              }
    

        
        var ph1=/^([0-9]{3}[-\s\.]+)([0-9]{3}[-\s\.]+)[0-9]{4}$/im
        
          if(ph1.test(phone.value)){
            err3.style.color="green";
            err3.innerText='phone no is valid';
            return false;
            }

             
          else{
                err3.style.color="red";
                err3.innerText='phone no must be in xxx.xxx.xxx orxxx-xxx-xxxx or xxx xxx xxxx';
                 return false;
             }
       
    
     var emxp=/^([a-zA-Z1-9\.-]+)@([a-zA-Z\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
     
     if(emxp.test(email1.value)){
       err2.style.color="green";
       err2.innerText='email is valid';
        
       return false;
        }
     else{
       err2.style.color="red";
       err2.innerText='email is invalid';
        return false;   
         }
        
        var ps1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if(ps1.test(psd.value)){
            err4.style.color="green";
            err4.innerText="password is valid";
            if(psd.value.length>10||psd.value.length<15){
                err4.style.color="green";
            err4.innerText="strong password ";

            }
            if(psd.value.length>8||psd.value.length<10){
                err4.style.color="orange";
            err4.innerText="medium password ";
            
                
            }
            if(psd.value.length=8){
                err4.style.color="red";
            err4.innerText=" poor password ";
            return false;
                
            }
            if(ph1.test(phone.value)){
                if(emxp.test(email1.value)){
                    alert("validation proper")
                    return true;
                }
             
            }
        }
        else{
            err4.style.color="red";
            err4.innerText=' Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number  ';
             return false;   
        }
    }
    }
    
    
  

    
    

