// Function to format and display the current date
function showCurrentDate() {
    const today = new Date();

    // Arrays for day and month names
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

    // Extract parts of the date
    const dayName = days[today.getDay()];
    const dateNum = today.getDate();
    const monthName = months[today.getMonth()];
    const year = today.getFullYear();

    // Update HTML
    document.getElementById("eventDay").textContent = dayName;
    document.getElementById("eventDate").textContent = dateNum;
    document.getElementById("eventMonthYear").textContent = `${monthName} ${year}`;
}

// Call function on page load
const currentDay = document.getElementById("CurrentDay");
if(currentDay)
{
    showCurrentDate();
}
function displayFooter(footer)
{
    footer.innerHTML += `
        <div class="footer-container">
            <!-- Company Info -->
            <div class="footer-column">
                <h3>Team 11</h3>
                <p>We provide high-quality website services to our customers worldwide.</p>
            </div>

            <!-- Contact Details -->
            <div class="footer-column">
                <h3>Contact Us</h3>
                <p>Email: <a href="mailto:info@mycompany.com">team11@mycompany.com</a></p>
                <p>Phone: <a href="tel:+911234567890">+91 12345 67890</a></p>
                <p>Address: 123 Business Street, Bangalore, India</p>
            </div>

            <!-- Social Media -->
            <div class="footer-column">
                <h3>Follow Us</h3>
                <div class="social-icons">
                    <a href="#" title="Facebook">📘</a>
                    <a href="#" title="Twitter">🐦</a>
                    <a href="#" title="LinkedIn">💼</a>
                    <a href="#" title="Instagram">📸</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            &copy; <span id="year"></span> Team 11. All rights reserved.
        </div>
    `
    document.getElementById("year").textContent = new Date().getFullYear();
}
const footerElements = document.getElementsByClassName("footer");
if (footerElements.length > 0) {
    displayFooter(footerElements[0]);
}

/* Events Object */

const events = {
                "E1": {
                    name: "Hackathon",
                    category: "Tech",
                    date: "2026-06-20",
                    time: "15:00",
                    venue: "Sample Venue",
                    fee: "10",
                    status: "Closed",
                    caption: "Build something amazing"
                },

                "E2": {
                    name: "Gaming Tournament",
                    category: "Gaming",
                    date: "2026-07-10",
                    time: "18:00",
                    venue: "Arena Hall",
                    fee: "20",
                    status: "Open",
                    caption: "Compete with the best"
                },

                "E3": {
                name: "AI Workshop",
                category: "Workshop",
                date: "2026-08-05",
                time: "11:00",
                venue: "Innovation Lab",
                fee: "15",
                status: "Open",
                caption: "Learn and build with AI"
            },

            "E4": {
                name: "Startup Pitch Fest",
                category: "Business",
                date: "2026-09-12",
                time: "14:30",
                venue: "Main Auditorium",
                fee: "25",
                status: "Open",
                caption: "Pitch your next big idea"
            },

            "E5": {
                name: "Cyber Security Challenge",
                category: "Security",
                date: "2026-10-18",
                time: "10:00",
                venue: "Tech Block B",
                fee: "30",
                status: "Closed",
                caption: "Test your hacking defense skills"
            }

            };

/* Populate Event Dropdown */

const eventDropdown = document.getElementById("eventName");
if(eventDropdown)
{
    console.log(eventDropdown);

    for (let id in events) {

        const option = document.createElement("option");

        option.value = id;
        option.textContent = events[id].name;

        eventDropdown.appendChild(option);
    }

    /* Star Rating */

    const stars = document.querySelectorAll(".star");
    const ratingValue = document.getElementById("ratingValue");

    stars.forEach(star => {

        star.addEventListener("click", () => {

            let value = star.getAttribute("data-value");

            ratingValue.value = value;

            stars.forEach(s => {
                s.classList.remove("selected");
            });

            for (let i = 0; i < value; i++) {
                stars[i].classList.add("selected");
            }

        });

    });

    /* Store Feedbacks */

    let feedbacks = [];

    /* Form Submit */

    document.getElementById("feedbackForm").addEventListener("submit", function(e) {

        e.preventDefault();

        const studentName = document.getElementById("studentName").value;
        const regNumber = document.getElementById("regNumber").value.toUpperCase();
        const eventId = document.getElementById("eventName").value;
        const rating = parseInt(ratingValue.value);
        const comments = document.getElementById("comments").value;

        const regPattern = /^[A-Z]{2}\.[A-Z]{2}\.[A-Z][0-9][A-Z]{3}[0-9]{5}$/;

        if (!regPattern.test(regNumber)) {

            alert("Registration number must be in format: XX.XX.XNXXXNNNNN");

            return;
        }

        if (!rating) {
            alert("Please select a rating!");
            return;
        }

        if (!eventId) {
            alert("Please select an event!");
            return;
        }

        const feedback = {
            studentName,
            regNumber,
            eventId,
            rating,
            comments
        };

        feedbacks.push(feedback);

        /* Get Feedbacks For Selected Event */

        const eventFeedbacks = feedbacks.filter(f => f.eventId === eventId);

        /* Calculate Average */

        let total = 0;

        eventFeedbacks.forEach(f => {
            total += f.rating;
        });

        const average = (total / eventFeedbacks.length).toFixed(1);

        /* Summary */

        let summary = "";

        if (average >= 4) {
            summary = "Excellent feedback from students!";
        }
        else if (average >= 3) {
            summary = "Good overall response.";
        }
        else {
            summary = "Needs improvement based on feedback.";
        }

        /* Show Popup */

        document.getElementById("averageRating").innerHTML =
            `<strong>${events[eventId].name}</strong><br>
            Average Rating: ${average} / 5`;

        document.getElementById("feedbackSummary").innerHTML =
            `<strong>Summary:</strong> ${summary}`;

        document.getElementById("popup").style.display = "block";

        /* Reset Form */

        document.getElementById("feedbackForm").reset();

        ratingValue.value = "";

        stars.forEach(s => {
            s.classList.remove("selected");
        });

    });
}

/* Close Popup */

function closePopup() {
    document.getElementById("popup").style.display = "none";
}