const text = document.querySelector('#mainText')
const image1 = document.querySelector('#slideLeft1')
const image2 = document.querySelector('#slideRight1')
const image3 = document.querySelector('#slideLeft2')
const image4 = document.querySelector('#slideRight2')

const observerJack = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle('animate__animated');
        entry.target.classList.toggle('animate__jackInTheBox');
        return; 
      }
  
      entry.target.classList.remove('animate__animated');
      entry.target.classList.remove('animate__jackInTheBox');
    });
  });

const observerLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle('animate__animated');
        entry.target.classList.toggle('animate__slideInLeft');
        return; 
      }
  
      entry.target.classList.remove('animate__animated');
      entry.target.classList.remove('animate__slideInLeft');
    });
  });
  
const observerRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle('animate__animated');
        entry.target.classList.toggle('animate__slideInRight');
        return; 
      }
  
      entry.target.classList.remove('animate__animated');
      entry.target.classList.remove('animate__slideInRight');
    });
  });

  observerJack.observe(text);
  observerLeft.observe(image1);
  observerLeft.observe(image3);
  observerRight.observe(image2);
  observerRight.observe(image4);