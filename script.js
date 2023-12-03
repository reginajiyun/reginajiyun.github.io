document.addEventListener('DOMContentLoaded', function() {
    const circleContainer = document.getElementById('circleContainer');
    const nextButton = document.getElementById('nextButton');
    let currentPage = 1;
  
  
    for (let i = 1; i <= 11; i++) {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      circle.innerText = i;
      circle.addEventListener('mouseover', function() {
        circle.style.backgroundColor = 'white';
        circle.style.color = 'black';
      });
      circle.addEventListener('mouseout', function() {
        circle.style.backgroundColor = 'black';
        circle.style.color = 'white';
      });
      circleContainer.appendChild(circle);
    }
  });
  