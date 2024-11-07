//intersection observer
//a class that takes a callback function in its constructor
//it can observe multiple elements or entries at the same time
//it will run anytime the visibility of one of the observed elements changes
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll(".container");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll(".resume-container");
hiddenElements2.forEach((el) => observer.observe(el));

const hiddenElements3 = document.querySelectorAll(".resume-header");
hiddenElements3.forEach((el) => observer.observe(el));

const hiddenElements4 = document.querySelectorAll(".skills");
hiddenElements4.forEach((el) => observer.observe(el));

const hiddenElements5 = document.querySelectorAll(".more-about");
hiddenElements5.forEach((el) => observer.observe(el));

const hiddenElements6 = document.querySelectorAll(".contact-me");
hiddenElements6.forEach((el) => observer.observe(el));


// Start the server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });