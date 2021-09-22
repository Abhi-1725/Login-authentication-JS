function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".msg");

    messageElement.textContent = message;
    messageElement.classList.remove("msg--success", "error-msg");
    messageElement.classList.add(`msg--${type}`);

}

function setInputError(inputElement, message) {
    inputElement.classList.add("error-msg");
    inputElement.parentElement.querySelector(".input-error-msg").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("error-msg");
    inputElement.parentElement.querySelector(".input-error-msg").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const accForm = document.querySelector("#sign-up");

     document.querySelector("#account").addEventListener("click",  e => {
         e.preventDefault();
         loginForm.classList.add("form-hidden");
         accForm.classList.remove("form-hidden");
     });

     document.querySelector("#link-login").addEventListener("click",  e => {
         e.preventDefault();
        loginForm.classList.remove("form-hidden");
        accForm.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(loginForm, "msg", "Invalid username/password combination");
    });

    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "signupUsername" && e.target.value.length > 1 && e.target.value.length < 12) {
                setInputError(inputElement, "Username must be at least 12 characters in length");
            }
        });
    });

    inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
    });
});

