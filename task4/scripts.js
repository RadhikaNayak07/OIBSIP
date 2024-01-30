let currentUser = null;
const users = [];

function showLoginPanel() {
    resetForm('loginForm');
    hideMessages();
    document.getElementById('loginPanel').style.display = 'block';
    document.getElementById('registrationPanel').style.display = 'none';
    document.getElementById('securedPanel').style.display = 'none';
}

function showRegistrationPanel() {
    resetForm('registrationForm');
    hideMessages();
    document.getElementById('loginPanel').style.display = 'none';
    document.getElementById('registrationPanel').style.display = 'block';
    document.getElementById('securedPanel').style.display = 'none';
}

function showSecuredPanel() {
    hideMessages();
    document.getElementById('loginPanel').style.display = 'none';
    document.getElementById('registrationPanel').style.display = 'none';
    document.getElementById('securedPanel').style.display = 'block';
}

function hideMessages() {
    const messages = document.getElementsByClassName('message');
    Array.from(messages).forEach(message => message.style.display = 'none');
}

function showMessage(messageId, messageText, isSuccess) {
    const messageElement = document.getElementById(messageId);
    messageElement.innerText = messageText;
    messageElement.style.color = isSuccess ? 'green' : 'red';
    messageElement.style.display = 'block';
}

function resetForm(formId) {
    const form = document.getElementById(formId);
    form.reset();
    hideMessages();
}

function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        currentUser = username;
        document.getElementById('loggedInUsername').innerText = username;
        showSecuredPanel();
    } else {
        showMessage('loginMessage', 'Invalid username or password. Try again.', false);
    }

    return false;
}

function registerUser() {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (users.some(u => u.username === username)) {
        showMessage('registrationMessage', 'Username already taken. Please choose a different one.', false);
    } else {
        users.push({ username, email, password });
        showMessage('registrationMessage', `User "${username}" registered successfully!`, true);
        showLoginPanel();
    }

    return false;
}

function logout() {
    currentUser = null;
    showLoginPanel();
}
showLoginPanel();
