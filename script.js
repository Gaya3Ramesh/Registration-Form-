document.getElementById("form_submit").addEventListener("click", (e) => {

  let person = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    birthday: document.getElementById("birthday").value,
    email: document.getElementById("email").value,
    phnNum: document.getElementById("phnNum").value,
    gender:document.getElementById('male').value,
    gender:document.getElementById('female').value,
    // gender: document.getElementById("male").value,
    // gender: document.getElementById("female").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    zipCode: document.getElementById("zipCode").value,
    state: document.getElementById("state").value,
    country: document.getElementById("country").value,
    // hobby: document.getElementById("drawing").value,
    // hobby: document.getElementById("singing").value,
    // hobby: document.getElementById("dancing").value,
    // hobby: document.getElementById("other").value,
    // hobby: document.getElementById("otherHobby").value,

    
  };


  console.log(person);
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("birthday").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phnNum").value = "";
  
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("city").value = "";
  document.getElementById("zipCode").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
//   document.getElementById("hobby").value = "";
});


$(document).ready(function(){
    $("#form_submit").click(function(){
        if (document.getElementById('male').checked) {
            gender = document.getElementById('male').value;
        }else{
            gender = document.getElementById('female').value;
        }
        console.log(gender);
    });
});

var form=document.getElementById("frm-grp");
  document.getElementById("form_submit").addEventListener("click", (e) =>{
      var checkbox = document.getElementsByName("hobby");
      for(var i = 0; i < checkbox.length; i++){
          if(checkbox[i].checked == true){
              console.log(checkbox[i].value);
          }
      }
    
  });   