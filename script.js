document.addEventListener("DOMContentLoaded", function () {

    const body = document.body;
    const container = document.querySelector(".container");
    const themeBtn = document.getElementById("themeBtn");
    const links = document.querySelectorAll("a");

    // Smooth transition
    body.style.transition = "background-color 0.4s ease, color 0.4s ease";
    container.style.transition = "background-color 0.4s ease, color 0.4s ease";

    let darkMode = false;

    // ===============================
    // Dark Mode Toggle (FINAL)
    // ===============================
    themeBtn.addEventListener("click", function () {

        if (!darkMode) {
            // Dark mode styles
            body.style.backgroundColor = "#121212";
            body.style.color = "#ffffff";

            container.style.backgroundColor = "#1e1e1e";
            container.style.color = "#ffffff";

            // Make links white
            links.forEach(link => {
                link.style.color = "#ffffff";
            });

            darkMode = true;

        } else {
            // Reset to light mode
            body.style.backgroundColor = "";
            body.style.color = "";

            container.style.backgroundColor = "";
            container.style.color = "";

            // Reset link color
            links.forEach(link => {
                link.style.color = "";
            });

            darkMode = false;
        }
    });

    // ===============================
    // Edit Job Title
    // ===============================
    document.getElementById("editJobBtn").addEventListener("click", function () {
        let newTitle = prompt("Enter new job title:");
        if (newTitle) {
            document.getElementById("jobTitle").textContent = newTitle;
        }
    });

    // ===============================
    // Show / Hide Skills
    // ===============================
    document.getElementById("toggleSkillsBtn").addEventListener("click", function () {
        let skills = document.getElementById("skillsSection");

        if (skills.style.display === "none") {
            skills.style.display = "block";
            this.textContent = "Hide Skills";
        } else {
            skills.style.display = "none";
            this.textContent = "Show Skills";
        }
    });

    // ===============================
    // Live Character Counter
    // ===============================
    document.getElementById("msgBox").addEventListener("keyup", function () {
        document.getElementById("counter").textContent =
            200 - this.value.length;
    });

    // ===============================
    // Date Display
    // ===============================
    document.getElementById("dateDisplay").textContent =
        "Today’s Date: " + new Date().toDateString();
});

// ===============================
// Form Validation
// ===============================
function validateForm() {
    let name = document.getElementById("nameField").value.trim();
    let email = document.getElementById("emailField").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in Name and Email.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}
