// Sample data for demonstration
const images = [
  { src: 'https://i.pinimg.com/474x/7d/6e/71/7d6e71b06451cb93f0615ed687b8a878.jpg', alt: 'Generated Image 1' },
  { src: 'https://i.pinimg.com/474x/6f/cc/fb/6fccfb5e9f4251c53947d6aef7097564.jpg', alt: 'Generated Image 2' },
  { src: 'https://i.pinimg.com/474x/71/09/41/7109413f26f68afcddf6a1c96811c5bd.jpg', alt: 'Generated Image 3' },
];

const galleryContainer = document.getElementById('galleryContainer');

images.forEach(image => {
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('gallery-item');

  const imgElement = document.createElement('img');
  imgElement.src = image.src;
  imgElement.alt = image.alt;

  imgDiv.appendChild(imgElement);
  galleryContainer.appendChild(imgDiv);
});
