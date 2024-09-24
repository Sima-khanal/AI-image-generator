document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const formResponse = document.getElementById('formResponse');

  // Simulate form submission (for now)
  setTimeout(() => {
      formResponse.innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;
      formResponse.style.color = 'green';
      document.getElementById('contactForm').reset(); // Reset the form
  }, 1000); // Simulate a delay for form submission
});
