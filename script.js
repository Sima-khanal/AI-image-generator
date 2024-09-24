document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('imageForm');
  const promptInput = document.getElementById('promptInput');
  const imageContainer = document.getElementById('imageContainer');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form from refreshing the page

      const prompt = promptInput.value;

      // Clear previous image
      imageContainer.innerHTML = '';

      // Check if prompt is not empty
      if (prompt.trim() === '') {
          alert('Please enter a valid prompt.');
          return;
      }

      // Show loading text while waiting for the image
      const loadingText = document.createElement('p');
      loadingText.textContent = 'Generating image... Please wait.';
      imageContainer.appendChild(loadingText);

      // Fetch request to backend (API) to generate image
      fetch('/generate-image', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: prompt }),
      })
      .then(response => response.json())
      .then(data => {
          // Remove loading text
          imageContainer.innerHTML = '';

          // Check if the image URL is available
          if (data.imageUrl) {
              // Create img element and display the image
              const img = document.createElement('img');
              img.src = data.imageUrl;
              img.alt = prompt;
              img.style.maxWidth = '100%';
              img.style.borderRadius = '8px';

              imageContainer.appendChild(img);
          } else {
              imageContainer.textContent = 'Failed to generate image. Please try again.';
          }
      })
      .catch(error => {
          console.error('Error generating image:', error);
          imageContainer.textContent = 'An error occurred while generating the image.';
      });
  });
});
