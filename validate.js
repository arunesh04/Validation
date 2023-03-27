function formvalidation() {

    // Name validation
    var span1=document.getElementById("sname") 
    span1.innerHTML=""

    var name=document.getElementById("fname").value;
    if (name==null || name==""){ 
        span1.innerHTML='Name cannot be empty'
        return false;  
    }

    // Email validation
    var span2=document.getElementById("smail")
    span2.innerHTML=""

    var email=document.getElementById("mail").value;
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
    {  
        span2.innerHTML="Please enter a valid e-mail address"  
        return false;  
    }
    // Phone number Validation
    var span3=document.getElementById("pno")
    span3.innerHTML=""

    var pno=document.getElementById("phno").value;
    var phoneno1 = /^\d{10}$/;
    var phoneno2= /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if(!pno.match(phoneno1)){
        span3.innerHTML="Phone number is not valid"
        return false;
    }
    // Gender Validation
    var span4 = document.getElementById("gen")
    span4.innerHTML=""

    var gen = document.getElementsByName("gender")

    if ((gen[0].checked == false) && (gen[1].checked == false) &&(gen[2].checked == false)) 
    {
        span4.innerHTML="Please choose your Gender";
        return false;
    }
    // Course Validation
    var span5 = document.getElementById("course")
    span5.innerHTML=""

    var cor = document.getElementsByName("course")

    if ((cor[0].checked == false) && (cor[1].checked == false) && (cor[2].checked == false)) 
    {
        span5.innerHTML="Please choose atleast a course";
        return false;
    }
    // Address Validation
    var span6 = document.getElementById("str")
    span6.innerHTML=""

    var street=document.getElementById("street").value;
    if(street==""||street==null){
        span6.innerHTML="Enter the Street name";
        return false;
    }

    var span7 = document.getElementById("cit")
    span7.innerHTML=""

    var city=document.getElementById("city").value;
    if(city==""||city==null){
        span7.innerHTML="Enter the City name and State";
        return false;
    }
    // Password Validation
    var span8 = document.getElementById("passwrd")
    span8.innerHTML=""

    pass1=document.getElementById("pass").value;
    pass2=document.getElementById("cpass").value;
    var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!pass1.match(passw)){
        span8.innerHTML="Password should have 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
        return false;
    }
    if(pass1!=pass2){
        span8.innerHTML="Password doesn't match"
        return false;
    }
}
// Password viewer
function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
        
      }
  }
