/*
Provides Javascript functionality to website
Author: Jaime Rump
Date: 2023 - 02 - 28

Filename: function.js
*/

/* Provides functionality to the testimonial slider*/
const testimonials = document.querySelectorAll('.testimonial');
let activeTestimonial = 0;

setInterval(() => {
    testimonials[activeTestimonial].classList.remove('active');
    activeTestimonial = (activeTestimonial + 1) % testimonials.length;
    testimonials[activeTestimonial].classList.add('active');
}, 5000);

/* Provides functionality to the mobile hamburger menu */
function myFunction() {
    var x = document.getElementById("nav-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/* Adds the non-empty review to the array object when submit button is clicked*/
const reviews = [];
function reviewSubmited() {
    const revname = document.getElementById("review-name").value;
    const revmessage = document.getElementById("review-message").value;
   
    if (revmessage == '') {
        alert("Please enter a message."); 
    } else if (revname == '') {
        alert("Please enter a name."); 
    } else {
        reviews.push(revmessage);
        alert("Review submitted successfully!");
    }
}

/* Submits the non-empty contact request when button is clicked*/
function submited() {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if (!email) {
        alert("Enter an email!");
    } else if (!name) {
        alert("Enter a name!");
    } else if (!message) {
        alert("Enter a message!");
    } else {
        updateTestimonials();
        alert("Message sent!");
    } 
}

/* Submits the non-empty subscription request when button is clicked*/
function subscribed() {
    const email = document.getElementById("subemail").value;
    const name = document.getElementById("subname").value;

    if (!email) {
        alert("Enter an email!");
    } else if (!name) {
        alert("Enter a name!");
    }  else { 
        alert("You're all signed up! Welcome");
    }
}

/* Provides functionality to the blog.html webpage. These links redirect user to outside website.*/
function redirect1() {
    window.location.href = "https://hbr.org/2023/02/7-small-ways-to-be-a-more-inclusive-colleague"; 
}

function redirect2() {
    window.location.href = "https://www.shrm.org/ResourcesAndTools/hr-topics/behavioral-competencies/global-and-cultural-effectiveness/Pages/Do-Public-Statements-About-Social-Injustices-Work-as-Intended.aspx";
}

function redirect3() {
    window.location.href = "https://canadianimmigrant.ca/careers-and-education/workplace/diversity-and-inclusion-in-canadian-workplaces";
}

/* Retrieves the last modified date of the webpage and sets the element. */
function getLastModifiedDate() {
    var lastModified = new Date(document.lastModified);
    var formattedDate = lastModified.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    document.getElementById('lastModified').textContent = formattedDate;
}

/* Retrieves the current date and sets the element. */
function getDate() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const date = `${month}/${day}/${year}`;
    var myParagraph = document.getElementById('date');
    myParagraph.textContent = date;
}

window.addEventListener('load', getDate());
window.addEventListener('load', getLastModifiedDate());






