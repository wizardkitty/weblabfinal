// Initialize EmailJS with your user ID
emailjs.init('Gf7uCPjUWPW_9Lc36');

// Get the form element
const form = document.querySelector('.contactform');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Define the email parameters
  const emailParams = {
    from_name: formData.get('name'),
    from_email: formData.get('email'),
    message: formData.get('message'),
  };

  // Send the email using EmailJS
  emailjs.send('service_x2j9sah', 'template_kyxcev2', emailParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
      form.reset(); // Reset the form
    }, function(error) {
      console.log('FAILED...', error);
      alert('Email failed to send. Please try again later.');
    });
});