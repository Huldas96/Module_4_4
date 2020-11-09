const REQUIRED = "REQUIRED";
const MIN_LENGHT = "MIN_LENGHT";


// Validate the user input
function Validate(value, flag, validatorValue) {
    if (flag === REQUIRED) {
        return value.trim().length > 0;
    }
    if (flag === MIN_LENGHT) {
        return value.trim().length > validatorValue;
    }
}

// Get the user input value
function getUserInput(inputElementId) {
    return document.getElementById(inputElementId).value;
}

// Create User
function createUser(userName, userPassword) {
    if (!Validate(userName, REQUIRED) || !Validate(userPassword, MIN_LENGHT, 5)) {
        throw new Error("Invalid input - must fill in username and password must be at least six characters long");
    }
    return {
        userName: userName,
        password: userPassword
    };
}

// Greet New User 
function greetUser(user) {
    console.log("Welcome to the team" + user.userName + "!")
}

// What happens when someone clicks the button
function signupHandler(event) {
    event.preventDefault();

    const enteredUsername = getUserInput("username");
    const enteredPassword = getUserInput("password");

    try{
        const newUser = createUser(enteredUsername, enteredPassword);
        greetUser(newUser);
    } catch (err) {
        // This is the only function that has a sideeffect.
        // sometimes you cant avoid it but the goal is to have all the functions as pure and re-usable as possible. 
        alert(err.message); 
    }

}

// Connect to the form 
function connectForm(formId, formSubmitHandler) {
    const form = document.getElementById(formId);
    form.addEventListener("submit", formSubmitHandler);
}

connectForm("user-input", signupHandler);