

//   const imagesElements = document.querySelectorAll(".iage");
// const optionsObServer = {
//     rootMargin: "0px"
// }

// const obServerCallback = (entries, observer) => {
//   entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//           const foto = entry.target;
//           foto.classList.add("animation");
//           observer.unobserve(foto); 

//       }
//   });
// };
// const obServer = new IntersectionObserver(obServerCallback, optionsObServer);

// imagesElements.forEach((iage) => {
//     obServer.observe(iage)
// })


const images = document.querySelectorAll('img');
const items = document.querySelectorAll('.item');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
            observer.unobserve(entry.target);
        }
    });
});

images.forEach(image => {
    observer.observe(image);
});

items.forEach(item => {
    observer.observe(item);
});