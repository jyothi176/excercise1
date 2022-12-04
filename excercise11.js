 <!-- Exercise-11 -->
 function validation() {
 let name = document.getElementById("name")
 if (name.value.length < 6) {
 alert('invalid name')
 }
 let pass = document.getElementById("password")

 if (pass.value.length < 6) {
 alert("invalid password")
 }
 let phone = document.getElementById("phno").value

 if (phone.length > 10 || phone.length < 10) {
 if (!phone.match(/[1-9][0-9]{9}$/))
 alert("invalid phno")
 }

 }
