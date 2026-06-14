// ALL YOUR JS GOES HERE

//hamburbur menu toggle to open on click
function menuButton() {
    var x = document.getElementById("mobile-links");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

//close menu after clicking on tabs
 function closeMenu() {
    var x = document.getElementById("mobile-links");
        x.style.display = "none";
 }

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByClassName('pic');
var modalImg = document.getElementById("picture");
var i;
for (i = 0; i < images.length; i++) {
  images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
  }
}


 //open faq to show answers

// const faqToggle = document.querySelectorAll('.question');
// for (let i = 0; i < faqToggle.length; i++) {
//     faqToggle[i].addEventListener("click", function() { this.classList.toggle('.faq-open') });
//     console.log (doesitevenwork);
// }

// const faqToggle = document.querySelectorAll('.question');

// for (let i = 0; i < faqToggle.length; i++) {
//     faqToggle[i].addEventListener("click", faqOpen);
//     }
//  function faqOpen () {
//      this.classList.toggle('faq-open');
//  }



// light and dark mode

function darkMode() {

    if (document.getElementById("ld-icon").src = "images/moon-dark-theme-svgrepo-com.svg") {
      document.getElementById("ld-icon").src = "images/light-mode-svgrepo-com.svg"; //switches svg to lightmode icon when in dark mode
        

    const homeaboutheaderDark = document.querySelectorAll('.home-about-header')
        for (let i = 0; i < homeaboutheaderDark.length; i++) {
            homeaboutheaderDark[i].classList.toggle('home-about-header-dark-mode');
        }

    const introheadDark = document.querySelectorAll('.intro-header')
        for (let i = 0; i < introheadDark.length; i++) {
            introheadDark[i].classList.toggle('intro-header-dark-mode');
        }

    const greetlineDark = document.querySelectorAll('.greet-line')
        for (let i = 0; i < greetlineDark.length; i++) {
            greetlineDark[i].classList.toggle('greet-line-dark-mode');
        }

    const mynameDark = document.querySelectorAll('.my-name')
        for (let i = 0; i < mynameDark.length; i++) {
            mynameDark[i].classList.toggle('my-name-dark-mode');
        }

    const learnmoreDark = document.querySelectorAll('.learn-more-button')
        for (let i = 0; i < learnmoreDark.length; i++) {
            learnmoreDark[i].classList.toggle('learn-more-button-dark-mode');
        }

    const linklearnDark = document.querySelectorAll('.learn-button')
        for (let i = 0; i < linklearnDark.length; i++) {
            linklearnDark[i].classList.toggle('learn-button-dark-mode');
        }

    const fallspringDark = document.querySelectorAll('.fall-spring-semesters')
        for (let i = 0; i < fallspringDark.length; i++) {
            fallspringDark[i].classList.toggle('fs-bg-dark-mode');
        }

    const semestertitleDark = document.querySelectorAll('.semester-title')
        for (let i = 0; i < semestertitleDark.length; i++) {
            semestertitleDark[i].classList.toggle('semester-title-dark-mode');
        }

    const textsemesterDark = document.querySelectorAll('.semester-text')
        for (let i = 0; i < textsemesterDark.length; i++) {
            textsemesterDark[i].classList.toggle('semester-text-dark-mode');
        }

    const aboutheaderDark = document.querySelectorAll('.about-header')
        for (let i = 0; i < aboutheaderDark.length; i++) {
            aboutheaderDark[i].classList.toggle('about-header-dark-mode');        
        }    

    const abouttextDark = document.querySelectorAll('.about-text')
        for (let i = 0; i < abouttextDark.length; i++) {
            abouttextDark[i].classList.toggle('about-text-dark-mode');        
        }

    const faqDark = document.querySelectorAll('.faq-bg')
        for (let i = 0; i < faqDark.length; i++) {
            faqDark[i].classList.toggle('faq-bg-dark-mode');    
        }

    const faqtextDark = document.querySelectorAll('.faq-text')
        for (let i = 0; i < faqtextDark.length; i++) {
            faqtextDark[i].classList.toggle('faq-text-dark-mode');
        }

    const faqquestionDark = document.querySelectorAll('.faq-question')
        for (let i = 0; i < faqquestionDark.length; i++) {
            faqquestionDark[i].classList.toggle('faq-question-dark-mode');
        }

    const faqansDark = document.querySelectorAll('.faq-answer')
        for (let i = 0; i < faqansDark.length; i++) {
            faqansDark[i].classList.toggle('faq-answer-dark-mode');        
        }

    const dividerDark = document.querySelectorAll('.rounded')
        for (let i = 0; i < dividerDark.length; i++) {
            dividerDark[i].classList.toggle('rounded-dark-mode');
        }  
     
    const picborderDark = document.querySelectorAll('.pic')
        for (let i = 0; i < picborderDark.length; i++) {
            picborderDark[i].classList.toggle('pic-dark-mode');
        }      
    } else {
        if (document.getElementById("ld-icon").src = "images/light-mode-svgrepo-com.svg") {
            document.getElementById("ld-icon").src = "images/moon-dark-theme-svgrepo-com.svg";
            var element = document.body;
                element.classList.remove("dark-mode");
                console.log
    
        }
    }
}        
 // if light mode icon is there, onclick switches it back to dark mode icon and removes class list dark mode
    //  if (document.getElementById("ld-icon").src = "images/light-mode-svgrepo-com.svg") {
    //      var element = document.body;
    //      element.classList.remove("dark-mode");
         

    //   } else {
    //     document.getElementById("ld-icon").src = "images/moon-dark-theme-svgrepo-com.svg"
    //     var element = document.body;
    //     element.classList.add('dark-mode');
    // //  }


    // }



const currentHour = new Date().getHours();

 if (currentHour >= 18 || currentHour < 6) {

     document.body.classList.add("dark-mode");

 }



// footer copyright year thing
let currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear

// let tooYoung = currentYear - 17;
// let birthYear = new Date(2020);
// let birthMonth;
// let birthDay; 
//  if (birthYear > tooYoung || birthDay != null) {
//     alert("Hey this site is MDNI, get outttt")
//  }
     
//   else {
//      alert("Welcome aboard fellow degenerate")
//    }


// let user = { firstName: “Joanna”, birthYear: “____”}
// document.getElementById(‘name’).innerHTML = user.birthYear
