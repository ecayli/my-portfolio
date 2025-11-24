

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
const modal = document.getElementById('modal-window');
const modalTitle = document.getElementById('window-title');
const modalContent = document.getElementById('window-content');

// Files
const folderData = {
    'education': {
        title: "education 🎓",
        content: `
            <h3>University (2021-2025)</h3>
            <p>Computer Engineering Bachelor's Degree.<br>Focus on Software Architecture & Algorithms.</p>
            <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin: 20px 0;">
            <h3>High School (2017-2021)</h3>
            <p>Science & Mathematics Department.</p>`
    },
    'experience': {
        title: "experience 💼",
        content: `
            <h3>Freelance Frontend Developer (2024-Present)</h3>
            <p>Developing responsive websites for clients using modern web technologies.</p>
            <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin: 20px 0;">
            <h3>Internship (Summer 2023)</h3>
            <p>Assisted senior developers in UI testing and bug fixing.</p>`
    },
    'skills': {
        title: "technical skills 🛠️",
        content: `
            <p><strong>Languages:</strong> HTML, CSS, JavaScript, Python</p>
            <p><strong>Tools:</strong> Git, GitHub, VS Code, Figma</p>
            <p><strong>Frameworks:</strong> React (Learning), Bootstrap</p>`
    }
};

// Window
function openWindow(key) {
    if(folderData[key]) {
        modalTitle.innerText = folderData[key].title;
        modalContent.innerHTML = folderData[key].content;
        modal.classList.add('open');
    }
}

function closeWindow() {
    modal.classList.remove('open');
}

window.onclick = function(e) {
    if (e.target == modal) closeWindow();
}

const hiddenElements = document.querySelectorAll('.hero, .about, .projects-section h2, .contact-section, .project-card');
hiddenElements.forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});