

const projects = [
    {
        title: "personal portfolio",
        description: "a responsive portfolio website built with HTML, CSS, and JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "#" 
    },
    {
        title: "weather dashboard",
        description: "real-time weather application that fetches data from an external API. visualizes temperature and conditions dynamically.",
        tech: ["API", "Async/Await", "JSON"],
        link: "#"
    },
    {
        title: "task manager app",
        description: "an interactive to-do list application with local storage support. allows users to add, delete, and manage daily tasks.",
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

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stops the page from refreshing
    alert("Thank you for your message! I will get back to you soon.");
    form.reset(); // Clears the form
});

/* observer*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hero, .about, .projects-section h2, .contact-section, .project-card');
hiddenElements.forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});