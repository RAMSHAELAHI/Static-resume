// // Get references to the form and display area
//  const From = document.getElementById('Resume-Form') as HTMLFormElement;
//  const ResumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

//  //Handle from Submission
//  From.addEventListener('submit' ,(event: Event) =>{
//     event.preventDefault();
 

//     //type assertion
//     const name =( document.getElementById('name') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const phone = (document.getElementById('phone') as HTMLInputElement).value;
//     const education = (document.getElementById('education') as HTMLInputElement).value;
//     const experience =( document.getElementById('experience') as HTMLInputElement).value;
//     const skills= (document.getElementById('skills') as HTMLInputElement).value;

 
//     //create resume Output
//     const resumeHTML = `
// <h2><b>Resume</b></h2>

// <h3>Personal Information</h3>
// <p><strong>Name:</strong> ${name} </p>
// <p><strong>EmaiL:</strong> ${email} </p>
// <p><strong>Phone:</strong> ${phone} </p>

// <h3>Education</h3>
// <p> ${education} </p>


// <h3>Experience</h3>
// <p> ${experience} </p>


// <h3>Skills</h3>
// <p> ${skills} </p>

// ` ;

// //display the generated resume
// if (resumeDisplayElement){
//     resumeDisplayElement.innerHTML = resumeHTML;
     
// } else {
//     console.error ('the resume display element is missing');
// } 

// }) ; 
