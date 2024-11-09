// // Get references to the form and display area
// var from = document.getElementById('Resume-Form');
// var resumeDisplayElement = document.getElementById('resume-display');
// //Handle from Submission
// from.addEventListener('submit', function (event) {
//     event.preventDefault();
//     //type assertion
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var phone = document.getElementById('phone').value;
//     var education = document.getElementById('education').value;
//     var experience = document.getElementById('experience').value;
//     var skills = document.getElementById('skills').value;
//     //create resume Output
//     var resumeHTML = "\n<h2><b>Resume</b></h2>\n\n<h3>Personal Information</h3>\n<p><strong>Name:</strong> ".concat(name, " </p>\n<p><strong>EmaiL:</strong> ").concat(email, " </p>\n<p><strong>Phone:</strong> ").concat(phone, " </p>\n\n<h3>Education</h3>\n<p> ").concat(education, " </p>\n\n\n<h3>Experience</h3>\n<p> ").concat(experience, " </p>\n\n\n<h3>Skills</h3>\n<p> ").concat(skills, " </p>\n\n");
//     //display the generated resume
//     if (resumeDisplayElement) {
//         resumeDisplayElement.innerHTML = resumeHTML;
//     }
//     else {
//         console.error('the resume display element is missing');
//     }
// });
