document.addEventListener('DOMContentLoaded', function() {
    const moreInfoButton = document.getElementById('moreInfoButton');
    const nextButton = document.getElementById('nextButton');
  
    moreInfoButton.addEventListener('click', function() {
      window.open('https://en.wikipedia.org/wiki/Hot_pot', '_blank');
    });
  });
  