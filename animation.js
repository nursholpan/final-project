

// Get the menu animation 
const menuBar = document.querySelector('.Menu');


window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        menuBar.classList.add('scrolled');
    } else {
        menuBar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded',function(){
     AOS.init({
        duration:1000,
        easing:"ease-in-out"
        once:true,   
    });
});
// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.Intersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });


// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observer(el));
