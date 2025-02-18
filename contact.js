
// For Dynamic typing role.
//=======================================================================================================

const dynamicContent = document.getElementById("role");
 const contentOptions = [
   "Web Developer",
   "Python Developer",
   "Front-End Engineer",
   "Data Analyst",
   "Full Stack Developer",
   "Problem Solver"
 ];
 let currentTextIndex = 0;
 let currentCharIndex = 0;
 let typingSpeed = 50; 
 let deletingSpeed = 30; 
 
 function type() {
   if (currentCharIndex < contentOptions[currentTextIndex].length) {
     dynamicContent.textContent += contentOptions[currentTextIndex].charAt(currentCharIndex);
     currentCharIndex++;
     setTimeout(type, typingSpeed);
   } else {
     setTimeout(erase, 1000); // Pause before deleting
   }
 }
 
 function erase() {
   if (currentCharIndex > 0) {
     dynamicContent.textContent = contentOptions[currentTextIndex].substring(0, currentCharIndex - 1);
     currentCharIndex--;
     setTimeout(erase, deletingSpeed);
   } else {
     currentTextIndex = (currentTextIndex + 1) % contentOptions.length; // Cycle through options
     setTimeout(type, 500); // Pause before typing next
   }
 }
 
 // Start the typing effect when the page loads
 document.addEventListener('DOMContentLoaded', type); // Ensures the element is loaded

//=======================================================================================================


function contactSubmit(){
    alert("Submitted Successfully! Thank you for contacting me :)");
}

function changeImg1(){
   document.getElementById('pro_img1').src='images/AI.jpeg'
}
function deChangeImg1(){
   document.getElementById('pro_img1').src='images/AI_Driven_homePage.png'
}

function changeImg2(){
   document.getElementById('pro_img2').src='images/Farm_Help_DiseasePage.png'
}
function deChangeImg2(){
   document.getElementById('pro_img2').src='images/Farm_Help_homePage.png'
}


function changeImg3(){
    document.getElementById('pro_img3').src='images/rouletteGame.jpg'
 }
 function deChangeImg3(){
    document.getElementById('pro_img3').src='images/roulette_code.jpeg'
 }
 
 
 function changeImg4(){
    document.getElementById('pro_img4').src='images/covid_report1.jpg'
 }
 function deChangeImg4(){
    document.getElementById('pro_img4').src='images/financial_report.jpg'
 }


