var definePass='sanjay'
var defineEmail='sanjay@gmail.com';
let myurl='http://www.google.com'

function val(event){
    console.log("hai");
    var password=document.querySelector('.passval').value;
    var mailid =document.querySelector('.emailval').value;
    event.preventDefault();
    
    if(password==definePass && mailid==defineEmail){
    window.location.replace('http://127.0.0.1:5501/homepage.html');
    function preventBack() { window.history.forward(); }  
    setTimeout("preventBack()", 0);  
    window.onunload = function () { null };    
    }
    else{
        
        alert("Incorrect Email or Password");
        event.preventDefault();
    }
}
   

