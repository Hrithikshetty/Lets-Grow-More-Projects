function displayData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return;
    }
    else{
        const regForm    = document.querySelector('#registration-form')
      ,   tableTbody = document.querySelector('#registration-table tbody')
      ;
    regForm.onsubmit = evt => 
      {
      evt.preventDefault() 

      let newRow = tableTbody.insertRow()

      newRow.insertCell().textContent = regForm.name.value  
      newRow.insertCell().textContent = regForm.email.value 
      newRow.insertCell().textContent = regForm.password.value 
      
      regForm.reset()
      }
    }
localStorage.setItem("ls_name", name);
localStorage.setItem("ls_email", email);
localStorage.setItem("ls_password", password);
}

    
