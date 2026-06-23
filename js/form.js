// form.js — Contact form validation

const contactForm = document.getElementById('contactForm');

if (contactForm) {

  const nameInput    = document.getElementById('nameInput');
  const emailInput   = document.getElementById('emailInput');
  const messageInput = document.getElementById('messageInput');

  const nameError    = document.getElementById('nameError');
  const emailError   = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  const formSuccess  = document.getElementById('formSuccess');

  // Checks the name field: must be at least 2 characters
  function validateName() {
    const value = nameInput.value.trim();
    if (value.length < 2) {
      nameError.textContent = 'Please enter your full name (at least 2 characters).';
      nameInput.classList.add('input-invalid');
      return false;
    }
    nameError.textContent = '';
    nameInput.classList.remove('input-invalid');
    return true;
  }

  // Checks the email field against a simple email pattern
  function validateEmail() {
    const value = emailInput.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(value)) {
      emailError.textContent = 'Please enter a valid email address.';
      emailInput.classList.add('input-invalid');
      return false;
    }
    emailError.textContent = '';
    emailInput.classList.remove('input-invalid');
    return true;
  }

  // Checks the message field: must be at least 10 characters
  function validateMessage() {
    const value = messageInput.value.trim();
    if (value.length < 10) {
      messageError.textContent = 'Your message should be at least 10 characters.';
      messageInput.classList.add('input-invalid');
      return false;
    }
    messageError.textContent = '';
    messageInput.classList.remove('input-invalid');
    return true;
  }

  // Validate each field as the user types, so errors clear in real time
  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);
  messageInput.addEventListener('input', validateMessage);

  // On submit, run all three checks. Only show success if all pass.
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const isNameValid    = validateName();
    const isEmailValid   = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
      formSuccess.classList.remove('d-none');
      contactForm.reset();

      setTimeout(() => {
        formSuccess.classList.add('d-none');
      }, 5000);
    } else {
      formSuccess.classList.add('d-none');
    }
  });

}