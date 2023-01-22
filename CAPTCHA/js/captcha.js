// arrays

const small=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const upper=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const special=[ '!', '#', '$', '%', '*', '+', '@'];

//onload this function works and a captcha is generated
function captchaGenerate()
{  
  let captcha="";
  for(let i=0;i<2;i++)
  {
    
    captcha+=small[ Math.floor((Math.random() * 25))];
    
    captcha+=special[Math.floor((Math.random() * 6))];
    captcha+=upper[Math.floor((Math.random() * 25))];
   
  }
  //setting the warning while nothing is entered

    var text=document.getElementById("usertext").innerHTML;
    if(text=="")
    {
    document.getElementById("warning").innerHTML="Please enter the above captcha";
    }
    else{
      document.getElementById("warning").innerHTML="";
    }
    document.getElementById("captcha").innerHTML=captcha;
}


//adding an event listener to check weather the document is loaded properly
document.addEventListener("DOMContentLoaded", function()
{
 
  var input = document.getElementById("usertext");
  input.addEventListener("keyup",Checkdata);

  var disp=document.getElementById("sbbtn");
  disp.addEventListener('mouseenter',check)

  disp.addEventListener('mouseleave',showbtn)
 
});

//function for checking each and every single input using keyup event handletr
function Checkdata()
  {
    
    var inpt=document.getElementById("usertext").value;
    if(inpt==document.getElementById("captcha").innerHTML)
    {
      document.getElementById("warning").style.color='#188351';
      document.getElementById("warning").innerHTML="you are done";
    }
    else{
      document.getElementById("warning").innerHTML="careful buddy";
    }
  }


//adding an event listner for button to check wheather the input is correct and setting the position of the button;
function check()
{
  
  if(document.getElementById("usertext").value!=document.getElementById("captcha").innerHTML)
  {
    
    document.getElementById("sbbtn").style.display="none";   
  }
  else{
    document.getElementById("sbbtn").style.display="block";  
  }
  // code to be executed when the mouse pointer enters the element
}
function showbtn()
{
  
  document.getElementById("sbbtn").style.display="block"; 
}
