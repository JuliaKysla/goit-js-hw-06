const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit',handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const email = formEl.elements.email.value;
    const password = formEl.elements.password.value;
    if (email  === "" || password === "") {
        return alert("Please fill in all the fields!");    
    };
    const formData = {
        email: formEl.elements.email.value,
        password: formEl.elements.password.value
    }
    formEl.reset();
    return console.log(formData);

};



