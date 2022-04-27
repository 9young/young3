
function validateform() {
  var name=document.myform.name.value;  
  var address=document.myform.address.value;
  var number=document.myform.number.value;
  var x=document.myform.email.value;  
  var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf("."); 

  if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  } if(address==null || address==""){  
    alert("address can't be blank");  
    return false;  
  } if (number==null || number==""){
    alert("number can't be blank");
    return false;
  }
   if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
    return false;  
    }  
  } 
 
 
 
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  } 