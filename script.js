
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
        title: "personal Portfolio",
        description: "a responsive portfolio website built with HTML, CSS, and JavaScript. features a dark mode toggle and glassmorphism design.",
        tech: ["html", "css", "javascript"],
        link: "#" 
    },
    {
        title: "weather dashboard",
        description: "real-time weather application that fetches data from an external API. visualizes temperature and conditions dynamically.",
        tech: ["api", "async/await", "json"],
        link: "#"
    },
    {
        title: "task manager app",
        description: "an interactive to-do list application with local storage support. allows users to add, delete, and manage daily tasks.",
        tech: ["dom", "events", "local storage"],
        link: "#"
    }
];

const container = document.getElementById('project-container');

projects.forEach(project => {
    // HTML yapısını senin yeni CSS'ine göre temizledik
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