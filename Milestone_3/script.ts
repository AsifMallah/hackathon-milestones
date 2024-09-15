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
            <h2><b>Resume</b></h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Experience</h3>
            <p>${experience}</p>

            <h3>Skills</h3>
            <p>${skills}</p>
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
