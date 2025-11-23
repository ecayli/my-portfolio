/* ==========================
   PART 1: DARK MODE TOGGLE
   ========================== */

// 1. Select the button and the body
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// 2. Add Event Listener to the button
toggleButton.addEventListener('click', function() {
    // Toggles the 'dark-mode' class on or off
    body.classList.toggle('dark-mode');
});


/* ==========================
   PART 2: DYNAMIC PROJECTS
   ========================== */

// 1. The Data - An Array of Objects
const projects = [
    {
        title: "Personal Portfolio",
        description: "A responsive portfolio website built with HTML, CSS, and JavaScript. Features a dark mode toggle.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "#" 
    },
    {
        title: "Weather App",
        description: "An application that fetches weather data from an API and displays it to the user.",
        tech: ["API", "Async/Await", "JSON"],
        link: "#"
    },
    {
        title: "To-Do List",
        description: "An interactive task manager that saves data to local storage.",
        tech: ["DOM Manipulation", "Events"],
        link: "#"
    }
];

// 2. Select the container where we want to put the projects
const container = document.getElementById('project-container');

// 3. The Loop - Generate HTML for each project
projects.forEach(project => {
    
    // Create the HTML card structure using a "Template Literal"
    const cardHTML = `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                <small>${project.tech.join(' • ')}</small>
            </div>
            <a href="${project.link}" class="btn-small">View Project</a>
        </div>
    `;

    // Add this new card to the container
    container.innerHTML += cardHTML;
});