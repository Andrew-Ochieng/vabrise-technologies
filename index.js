// validate email
// const email = 'email@emai.com';
// output = email.indexOf('@');

// if(output > 0) {
//     document.write('Valid email');
// } else {
//     document.write('Invalid email');
// }


//document.write(output);




//alpine.js slider
document.addEventListener('alpine:init', () => {
    Alpine.data('slider', () => ({
        currentIndex: 1,
        images: [
            'https://source.unsplash.com/1600x900/?beach',
            'https://source.unsplash.com/1600x900/?cat',
            'https://source.unsplash.com/1600x900/?dog',
            'https://source.unsplash.com/1600x900/?lego',
            'https://source.unsplash.com/1600x900/?textures&patterns'
        ],
        back() {
            if (this.currentIndex > 1) {
                this.currentIndex = this.currentIndex - 1;
            }
        },
        next() {
            if (this.currentIndex < this.images.length) {
                this.currentIndex = this.currentIndex + 1;
            } else if (this.currentIndex <= this.images.length){
                this.currentIndex = this.images.length - this.currentIndex + 1
            }
        },
    }))
})



//swiper code
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });




