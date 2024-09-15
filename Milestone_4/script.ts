var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');

// Check if form is not null
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload

        // Collect input values
        var name = (document.getElementById('name') as HTMLInputElement).value;
        var email = (document.getElementById('email') as HTMLInputElement).value;
        var phone = (document.getElementById('phone') as HTMLInputElement).value;
        var education = (document.getElementById('education') as HTMLInputElement).value;
        var experience = (document.getElementById('experience') as HTMLInputElement).value;
        var skills = (document.getElementById('skills') as HTMLInputElement).value;

        // Generate the resume content dynamically
        var resumeHTML = `
            <h2><b>Editable Resume</b></h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
            <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
            <p><b>Phone:</b><span contenteditable="true"> ${phone}</span></p>

            <h3>Education</h3>
            <p contenteditable="true">${education}</p>

            <h3>Experience</h3>
            <p contenteditable="true">${experience}</p>

            <h3>Skills</h3>
            <p contenteditable="true">${skills}</p>
        `;

        // Display the generated resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        } else {
            console.error('The resume display element is missing!');
        }
    });
} else {
    console.error('The form element is missing!');
}
