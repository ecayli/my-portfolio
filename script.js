// --- Configuration ---
const modal = document.getElementById('window-modal');
const modalTitle = document.getElementById('window-title');
const modalContent = document.getElementById('window-content');

// Array of project data
const projects = [
    {
        title: "Personal Portfolio",
        description: "A responsive portfolio website built with HTML, CSS, and JavaScript. Showcasing projects and skills with a clean, modern UI.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/ecayli/portfolio-website"
    },
    {
        title: "SynchroTrack",
        description:"A neuro-adaptive focus app concept with minimal UI and dynamic gradients to reduce cognitive load and provide ambient visual feedback tailored to different mental states.",
        tech: ["Figma", "UX Design", "Prototyping"],
        // Link structure for SynchroTrack
        link: {
             figma: "https://www.figma.com/proto/9iO9cm1sCzd4C0CzhLUqfo/SynchroTrack-Prototype?node-id=0-1&t=sD2ZWLPAArMmL3rS-1",
             // Case Study button now opens a modal using the 'synchrotrack_case_study' key
             case: "synchrotrack_case_study"
        }
    },
    {
        title: "Task Manager App",
        description: "An interactive to-do list application with local storage support. Allows users to add, delete, and manage daily tasks efficiently.",
        tech: ["DOM", "Events", "Local Storage"],
        link: "#"
    }
];

// Get the container and populate projects
const container = document.getElementById("project-container");

projects.forEach(project => {
    let linkHTML = "";
    
    // Check project links and generate HTML
    if (typeof project.link === "string") {
        // Single link
        linkHTML = `<a href="${project.link}" target="_blank" class="btn-small">View Project</a>`;
    } else if (project.link && typeof project.link === "object") {
        // Multiple links (for SynchroTrack)
        if (project.link.figma) {
            linkHTML += `<a href="${project.link.figma}" target="_blank" class="btn-small">Figma Prototype</a>`;
        }
        if (project.link.case) {
            // Case Study button uses 'openWindow' to trigger the modal
            linkHTML += `<button onclick="openWindow('${project.link.case}')" class="btn-small btn-case-study">View Case Study</button>`;
        }
    }
    
    const cardHTML = `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.tech.join(" • ")}
            </div>
            <div class="project-links-group">
                ${linkHTML}
            </div>
        </div>
    `;
    container.innerHTML += cardHTML;
});


// Data for the modal windows (All content is now in English)
const folderData = {
    education: {
        title: "education 🎓",
        content: `
            <!-- LMU Education -->
            <div class="mb-6">
                <div class="flex justify-between items-baseline flex-wrap">
                    <h3 class="text-xl font-bold text-white">B.Sc. Media Informatics</h3>
                    <span class="text-sm text-gray-400 font-medium">LMU Munich, DE</span>
                </div>
                <p class="text-md italic text-gray-300">Focus: UX Design, Human-Computer Interaction (HCI), Interface Prototyping</p>
                <span class="text-sm italic text-gray-400 block mt-1">October 2023 – Present</span>
            </div>
            <!-- High School Education -->
            <div>
                <div class="flex justify-between items-baseline flex-wrap">
                    <h3 class="text-xl font-bold text-white">Istanbuler Gymnasium (German High School)</h3>
                    <span class="text-sm text-gray-400 font-medium">Istanbul, TR</span>
                </div>
                <p class="text-md italic text-gray-300">Deutsche Auslandsschule, Abitur: 2.1</p>
                <span class="text-sm italic text-gray-400 block mt-1">2017 – 2022</span>
            </div>
        `
    },
    experience: {
        title: "experience 💼",
        content: `
            <div class="mb-8">
                <!-- Header Row: Title & Location -->
                <div class="flex justify-between items-baseline flex-wrap">
                    <h3 class="text-xl font-bold text-white">Software Development Internship</h3>
                    <span class="text-sm text-gray-400 font-medium">Munich, DE</span>
                </div>
                
                <!-- Subheader Row: University & Date -->
                <div class="flex justify-between items-baseline flex-wrap mb-3">
                    <h4 class="text-md italic text-gray-300">Ludwig Maximilians University of Munich</h4>
                    <span class="text-sm italic text-gray-400">October 2023 – February 2024</span>
                </div>

                <!-- Bullet Points -->
                <ul class="list-disc list-outside ml-5 space-y-1 text-gray-300 text-sm leading-relaxed">
                    <li>Worked in an agile development team of 6 members.</li>
                    <li>Developed a Java-based desktop adaptation of the multiplayer game RoboRally.</li>
                    <li>Implemented gameplay structure, event handling, and interface logic.</li>
                    <li>Gained experience in teamwork, problem solving, and iterative development workflows.</li>
                </ul>
            </div>

            <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin: 20px 0;">
        `
    },
    skills: {
        title: "technical skills 🛠️",
        content: `
            <h3 class="text-xl font-bold text-white mb-2">UX & Design</h3>
            <p class="mb-4">User flows, wireframing, interaction design, prototyping (Figma), usability heuristics, dashboard layout principles, information architecture.</p>

            <h3 class="text-xl font-bold text-white mb-2">Tools</h3>
            <p class="mb-4">Figma, Git, GitLab, VSCode, Miro, Notion, Unity, Overleaf, Canva.</p>

            <h3 class="text-xl font-bold text-white mb-2">Programming</h3>
            <p>Java, JavaScript, HTML, CSS, SQL, Haskell, JSON, LaTeX.</p>
        `
    },
    // CASE STUDY CONTENT (Updated to match the latest SynchroTrack screens)
    synchrotrack_case_study: {
        title: "SynchroTrack | UX Case Study",
        content: `
            <div class="case-study-content">
                <h1 class="text-3xl font-bold mb-4">SynchroTrack: Your Dynamic Sonic Focus Companion</h1>

                <h2 class="text-xl font-semibold mt-6 mb-2">💡 Project Summary</h2>
                <p class="mb-4 text-gray-300">
                    <strong>SynchroTrack</strong> is a mobile concept app that guides users into different focus states using 
                    subtle soundscapes and calm gradients. The UI is intentionally minimal and structured around a small set of 
                    core screens: welcome, login, calibration, and focus sessions (Calm, Medium, High).
                </p>

                <h2 class="text-xl font-semibold mt-6 mb-2">🎯 Problem & Design Goal</h2>
                <p class="mb-4 text-gray-300">
                    Most focus or timer apps overload users just when they are trying to reduce distractions. 
                    The goal was to design an interface that feels like a quiet companion: 
                    simple, visually consistent and easy to operate even when the user is mentally tired.
                </p>
                <p class="mb-4 text-gray-300 font-bold">
                    Design goal: Provide a linear, low-friction flow that quickly moves the user from “opening the app” 
                    to “starting a tailored focus session”, with almost no decision overhead.
                </p>

                <h2 class="text-xl font-semibold mt-6 mb-2">🧭 Screen Flow & Interaction</h2>
                <ul class="list-disc list-outside ml-5 space-y-3 text-gray-300">
                    <li>
                        <strong>Welcome Screen</strong> – Brand-first entry with the tagline 
                        “Your dynamic sonic focus companion” and a single primary CTA (“Let’s go”).
                    </li>
                    <li>
                        <strong>Login Screen</strong> – Clean, centered layout with email/password plus 
                        social login options (Facebook, Google). The hierarchy keeps the main login button 
                        visually dominant, with social options as secondary actions.
                    </li>
                    <li>
                        <strong>Calibration Screen</strong> – Short question: “How are you feeling today?”.  
                        Users select a target state via three circular buttons:
                        <ul class="list-disc list-outside ml-6 mt-1 space-y-1">
                            <li><strong>Calm Focus</strong> – low intensity, gentle ambient background.</li>
                            <li><strong>Medium Drive</strong> – balanced rhythm for steady concentration.</li>
                            <li><strong>High Energy</strong> – more energetic pattern for long deep-work blocks.</li>
                        </ul>
                        This screen acts as a very lightweight personalization step without requiring forms or sliders.
                    </li>
                    <li>
                        <strong>Session Screens (Calm / Medium / High)</strong> –  
                        Three separate session layouts share the same structure:
                        <ul class="list-disc list-outside ml-6 mt-1 space-y-1">
                            <li>Large pill-shaped timer card labeled “Current Session”.</li>
                            <li>Central countdown timer (00:00) as the main focal point.</li>
                            <li>Short one-line description that matches the state, e.g. 
                                “Gentle ambient waves for maintaining steady focus without overstimulation.”</li>
                            <li>Single primary “Start Session” button at the bottom for a clear next step.</li>
                        </ul>
                    </li>
                </ul>

                <h2 class="text-xl font-semibold mt-6 mb-2">🎨 Visual Language</h2>
                <ul class="list-disc list-outside ml-5 space-y-2 text-gray-300">
                    <li>
                        <strong>Gradients per state</strong> – All screens use deep blue tones, but 
                        each session has its own gradient intensity: softer for Calm, slightly stronger 
                        for Medium, and brighter for High.
                    </li>
                    <li>
                        <strong>Glassmorphism elements</strong> – Cards and buttons have soft, rounded 
                        shapes with subtle inner highlights, mirroring the glass-like components used 
                        on this portfolio website.
                    </li>
                    <li>
                        <strong>Typography</strong> – A single sans-serif typeface with bold headings and 
                        lighter body text keeps the hierarchy clear without extra decoration.
                    </li>
                    <li>
                        <strong>Focus on one primary action</strong> – Every screen is built around one main CTA 
                        (Let’s go, Login, Sign Up, Start Session), which keeps the experience predictable and calm.
                    </li>
                </ul>

                <h2 class="text-xl font-semibold mt-6 mb-2">📌 What I Practiced</h2>
                <ul class="list-disc list-outside ml-5 space-y-2 text-gray-300">
                    <li>Designing a linear, low-friction onboarding & session flow.</li>
                    <li>Using gradients and glassmorphism in a subtle way that still feels professional.</li>
                    <li>Aligning visual states (Calm / Medium / High) with copywriting and interaction patterns.</li>
                    <li>Preparing a cohesive case-study-ready Figma prototype for a UX portfolio.</li>
                </ul>

                <p class="text-center mt-8">
                    <a href="https://www.figma.com/proto/9iO9cm1sCzd4C0CzhLUqfo/SynchroTrack-Prototype?node-id=0-1&t=sD2ZWLPAArMmL3rS-1" 
                       target="_blank" 
                       class="btn-small btn-case-study">
                        View Figma Prototype
                    </a>
                </p>
            </div>
        `
    }
};

// Window
function openWindow(key) {
    if (folderData[key]) {
        modalTitle.innerText = folderData[key].title;
        modalContent.innerHTML = folderData[key].content;
        modal.classList.add("open");
    }
}

function closeWindow() {
    modal.classList.remove("open");
}

window.onclick = function (e) {
    if (e.target == modal) closeWindow();
};

// Initial Fade-In Animation
const hiddenElements = document.querySelectorAll(
    ".hero, .about, .projects-section h2, .contact-section, .project-card"
);
hiddenElements.forEach((el) => {
    el.classList.add("animate-fadeIn");
});