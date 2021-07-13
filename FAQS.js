// const questions = document.getElementsByClassName('container');
// const answers = document.getElementsByClassName('content');


// questions.addEventListener('click', function () {
//     answers.classList.toggle('content');
// })


const questions = document.getElementsByClassName("container");
var i;

for (i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


// const questions = document.getElementsByClassName("container");
// var i;

// for (i = 0; i < questions.length; i++) {
//     questions[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         const content = this.nextElementSibling;
//         if (content.style.maxHeight) {
//             content.style.maxHeight = null;
//         } else {
//             content.style.maxHeight = content.scrollHeight + "px";
//         }
//     });
// }