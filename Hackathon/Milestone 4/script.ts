// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
 form.addEventListener('submit', (event: Event) => {
    event.preventDefault();  //prevent page reload


    // Collect input values
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const address = (document.getElementById('address') as HTMLInputElement).value
    const contact = (document.getElementById('contact') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //Generate the Resume content dynamically (output)
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Name:</b><span contenteditable="true">${email}</span></p>
    <p><b>Name:</b><span contenteditable="true">${address}</span></p>
    <p><b>Name:</b><span contenteditable="true">${contact}</span></p> 

    <h3>Education</h3>
    <pcontenteditable="true">${education}</p>

    <h3>Experience</h3>
    <pcontenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <pcontenteditable="true">${skills}</p>
    `;

   // Display the  generated resume
    if (resumeDisplayElement) {

        resumeDisplayElement.innerHTML = resumeHTML;
    }else {
        console.error('the resume display element is missing');
    } 
});