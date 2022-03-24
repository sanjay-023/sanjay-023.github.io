var definePass='sanjay'
var defineEmail='sanjay@gmail.com';
let myurl='http://www.google.com'

function val(event){
    console.log("hai");
    var password=document.querySelector('.passval').value;
    var mailid =document.querySelector('.emailval').value;
    event.preventDefault();
    
    if(password==definePass && mailid==defineEmail){
     window.location.replace('https://sanjay-023.github.io/microsoftclone/homepage.html');
    // window.location.href='./homepage.html';

    function preventBack() { window.history.forward(); }  
    setTimeout("preventBack()", 0);  
    window.onunload = function () { null };    
    }
    else{
        
        alert("Incorrect Email or Password");
        event.preventDefault();
    }
}
   

