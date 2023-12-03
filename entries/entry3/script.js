document.addEventListener('DOMContentLoaded', function() {
    const imageUrls = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg'
    ];
  
    for (let i = 0; i < imageUrls.length; i++) {
      const imageElement = document.getElementById(`image${i + 1}`);
      imageElement.style.backgroundImage = `url(${imageUrls[i]})`;
    }
  });
  