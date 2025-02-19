
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



// For Image hover effect in About section.
//=======================================================================================================

const image = document.querySelector('.bitmoji');
const imageContainer = image.parentElement;

image.addEventListener('mousemove', (event) => {
  const rect = image.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const distortionX = -(mouseX - centerX) * 0.02; // Adjust distortion factor
  const distortionY = -(mouseY - centerY) * 0.02; // Adjust distortion factor

  image.style.transform = `translate(${distortionX}px, ${distortionY}px)`; 
  
});
image.addEventListener('mouseleave', () => {
  image.style.transform = 'translate(0,0)'; 
  });

//=======================================================================================================


// For Contact Form Submission.

function contactSubmit(){
      alert("Submitted Successfully! Thank you for contacting me :)");
   }





