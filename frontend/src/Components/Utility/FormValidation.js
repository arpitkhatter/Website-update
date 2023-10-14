function validateForm(event, username, email) {
    // clear all error messages
    const inputs = document.getElementsByClassName("is-danger");
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].classList.contains("error")) {
        inputs[i].classList.remove("is-danger");
      }
    }
  
    if (username === "") {
      document.getElementById("username").classList.add("is-danger");
      return { blankfield: true };
    }
    if (email === "") {
      document.getElementById("email").classList.add("is-danger");
      return { blankfield: true };
    }
    return;
  }
  
  export default validateForm;