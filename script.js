// Button Click Event
document.getElementById('colorButton').addEventListener('click', () => {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
});

// Image Gallery Slideshow
const images = [
  'images/Trenchcoats.jpeg',
  'images/carpets.jpeg',
  'images/duvet.jpeg',
  'images/Trousers.jpeg'
];

const descriptions = [
  'Stylish trench coat perfect for all seasons.',
  'Luxurious carpets to enhance your home decor.',
  'Comfortable and warm duvets for a good night\'s sleep.',
  'Durable and fashionable trousers for everyday wear.'
];

const reviews = [
  '"Absolutely love this trench coat! Great quality." - Jane',
  '"The carpet is so soft and beautiful!" - Mark',
  '"Best duvet I\'ve ever purchased. Highly recommend!" - Sarah',
  '"These trousers fit perfectly and are very comfortable." - Alex'
];

const shippingInfo = [
  'Ships within 3-5 business days.',
  'Ships within 7-10 business days.',
  'Ships within 5-7 business days.',
  'Ships within 3-5 business days.'
];

let currentImageIndex = 0;

const galleryImage = document.getElementById('galleryImage');
const prevButton = document.getElementById('prevImage');
const nextButton = document.getElementById('nextImage');
const descriptionContent = document.getElementById('descriptionContent');
const reviewsContent = document.getElementById('reviewsContent');
const shippingContent = document.getElementById('shippingContent');

function updateContent(index) {
  galleryImage.src = images[index];
  descriptionContent.textContent = descriptions[index];
  reviewsContent.textContent = reviews[index];
  shippingContent.textContent = shippingInfo[index];
}

prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateContent(currentImageIndex);
});

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateContent(currentImageIndex);
});

// Tabs
document.querySelectorAll('.tablinks').forEach(button => {
  button.addEventListener('click', (e) => {
    document.querySelectorAll('.tabcontent').forEach(tab => tab.classList.remove('active'));
    document.getElementById(e.target.dataset.tab).classList.add('active');
  });
});

// Form Validation
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');

emailInput.addEventListener('input', () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailFeedback.textContent = emailPattern.test(emailInput.value) ? '' : 'Invalid email format';
});

passwordInput.addEventListener('input', () => {
  passwordFeedback.textContent = passwordInput.value.length >= 8 ? '' : 'Password must be at least 8 characters';
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted successfully!');
});