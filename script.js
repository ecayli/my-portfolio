/* ==========================
   PART 1: DARK MODE TOGGLE
   ========================== */
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});

/* ==========================
   PART 2: DYNAMIC PROJECTS
   ========================== */
const projects = [
    {
        title: "Personal Portfolio",
        description: "A responsive portfolio website built with HTML, CSS, and JavaScript. Features a dark mode toggle and glassmorphism design.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "#" 
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather application that fetches data from an external API. Visualizes temperature and conditions dynamically.",
        tech: ["API", "Async/Await", "JSON"],
        link: "#"
    },
    {
        title: "Task Manager App",
        description: "An interactive to-do list application with local storage support. Allows users to add, delete, and manage daily tasks.",
        tech: ["DOM", "Events", "Local Storage"],
        link: "#"
    }
];

const container = document.getElementById('project-container');

projects.forEach(project => {
    const cardHTML = `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.tech.join(' • ')}
            </div>
            <a href="${project.link}" class="btn-small">View Project</a>
        </div>
    `;
    container.innerHTML += cardHTML;
});

/* ==========================
   PART 3: FORM HANDLING
   ========================== */
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stops the page from refreshing
    alert("Thank you for your message! I will get back to you soon.");
    form.reset(); // Clears the form
});