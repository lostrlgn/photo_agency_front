window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

// // Получаем элементы слайдера
// const slider = document.querySelector('.slider_img');
// const prevButton = document.querySelector('.slider_but_left');
// const nextButton = document.querySelector('.slider_but_right');
// const slides = Array.from(slider.querySelectorAll('img'));
// const slideCount = slides.length;
// let slideIndex = 0;

// // Устанавливаем обработчики событий для кнопок

// prevButton.addEventListener('click', showPreviousSlide);
// nextButton.addEventListener('click', showNextSlide);

// // Функция для показа предыдущего слайда
// function showPreviousSlide() {
//   slideIndex = (slideIndex - 1 + slideCount) % slideCount;
//   updateSlider();
// }

// // Функция для показа следующего слайда
// function showNextSlide() {
//   slideIndex = (slideIndex + 1) % slideCount;
//   updateSlider();
// }

// // Функция для обновления отображения слайдера
// function updateSlider() {
//   slides.forEach((slide, index) => {
//     if (index === slideIndex) {
//       slide.style.display = 'block';
//     } else {
//       slide.style.display = 'none';
//     }
//   });
// }

// // Инициализация слайдера
// // updateSlider();


// Получаем все элементы слайдеров на странице
const sliders = document.querySelectorAll('.slider');

// Проходимся по каждому слайдеру и инициализируем его
sliders.forEach(slider => {
  // Получаем необходимые элементы слайдера
  const prevButton = slider.querySelector('.slider_but_left');
  const nextButton = slider.querySelector('.slider_but_right');
  const slidesContainer = slider.querySelector('.slider_img');
  const slides = slider.querySelectorAll('.slide');

  // Задаем начальные значения
  let currentIndex = 0;

  // Функция для переключения на предыдущий слайд
  const prevSlide = () => {
    if (currentIndex === 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex--;
    }
    updateSlide();
  };

  // Функция для переключения на следующий слайд
  const nextSlide = () => {
    if (currentIndex === slides.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateSlide();
  };

  // Функция для обновления отображаемого слайда
  const updateSlide = () => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  };

  // Назначаем обработчики событий на кнопки слайдера
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
});