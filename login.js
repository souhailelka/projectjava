var usernameerror = document.getElementById('username-error');
var emailerror = document.getElementById('email-error');
var pswderror = document.getElementById('pswd-error');
var pswd2error = document.getElementById('pswd2-error');
var submiterror = document.getElementById('submit-error')


 function validusername(){
    var username= document.getElementById('username').value;
    if(username.lenght==0){
        usernameerror.innerHTML='username is required';
        return false;
    }
    if(!username.match((/^[a-z0-9_-]{3,15}$/))){
        usernameerror.innerHTML='write valid username';
        return false;

    }
    usernameerror.innerHTML= '<i class="fas fa-check-circle"></i>';
    return true;

 }

 function validemail(){
    var email=document.getElementById('email').value;
    if(email.lenght==0){
        emailerror.innerHTML='email is required';
        return false ;
    }
    if(!email.match((/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))){
        emailerror.innerHTML='write a valid email';
        return false;
    }
    emailerror.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
 }
 function validpswd(){
    var pswd=document.getElementById('pswd').value;
    if(pswd.lenght==0){
        pswderror.innerHTML='password is required';
        return false ;
    }
    if(!pswd.match((/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/))){
        pswderror.innerHTML='write a valid password';
        return false;
    }
    pswderror.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
 }
 var pswd=document.getElementById('pswd');
 function validpswd2(){
    var pswd2=document.getElementById('pswd2').value;
    if(pswd2.lenght==0){
        pswd2error.innerHTML='password is required';
        return false ;
    }
    if(pswd.textContent !== pswd2.textContent){
        pswd2error.innerHTML='password doesnt match';
        return false ;
    }
    pswd2error.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;



 }
 function validateform(){
    if(!validusername() || !validemail() || !validpswd() || !validpswd2()){
        submiterror.style.display='block';
        submiterror.innerHTML='fix error please';
        setTimeout(function(){submiterror.style.display='none';},3000);
        return false;
    }

 }
 var btn=document.getElementById('btn');
 btn.addEventListener('click',function click(){
    window.location.href='page2.html';
 })