// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadpdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // Collect input values
    var profilePictureInput = document.getElementById('profilePicture');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generate the Resume content dynamically (output)
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(address, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(contact, "</span></p> \n\n    <h3>Education</h3>\n    <pcontenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <pcontenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <pcontenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the  generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing');
    }
});
