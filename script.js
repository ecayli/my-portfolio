// --- Configuration ---
const modal = document.getElementById('window-modal');
const modalTitle = document.getElementById('window-title');
const modalContent = document.getElementById('window-content');

// Array of project data - matching CV information
const projects = [
    {
        title: "Personal Portfolio",
        description: "You're looking at it! Built from scratch with vanilla JS and CSS because I wanted to understand every line. Features a clean layout with consistent UI principles, color hierarchy, and responsive design that actually works on mobile.",
        tech: ["HTML", "CSS", "JavaScript", "UI Design"],
        link: "https://github.com/ecayli/portfolio-website"
    },
    {
        title: "SynchroTrack",
        description: "My ongoing UX project - an adaptive productivity app that doesn't overwhelm you. Three focus states (Calm, Medium, Deep) because choice paralysis is real. Applied everything from LMU's UX courses about cognitive load and navigation logic.",
        tech: ["Figma", "UX Design", "Prototyping", "Interaction Design"],
        link: {
             figma: "https://www.figma.com/proto/9iO9cm1sCzd4C0CzhLUqfo/SynchroTrack-Prototype?node-id=0-1&t=sD2ZWLPAArMmL3rS-1",
             case: "synchrotrack_case_study"
        }
    },
    {
        title: "RoboRally Desktop Game",
        description: "Turned a board game into a Java desktop app with 5 teammates. Spent 4 months in agile sprints implementing gameplay logic, event handling, and making sure robots moved in the right order. First taste of real teamwork (and merge conflicts).",
        tech: ["Java", "Agile", "Team Project", "Problem Solving"],
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
        if (project.link === "#") {
            linkHTML = `<span class="btn-small btn-disabled">Details coming soon</span>`;
        } else {
            linkHTML = `<a href="${project.link}" target="_blank" class="btn-small">Check it out</a>`;
        }
    } else if (project.link && typeof project.link === "object") {
        // Multiple links (for SynchroTrack)
        if (project.link.figma) {
            linkHTML += `<a href="${project.link.figma}" target="_blank" class="btn-small">Try the Prototype</a>`;
        }
        if (project.link.case) {
            linkHTML += `<button onclick="openWindow('${project.link.case}')" class="btn-small btn-case-study">Read Case Study</button>`;
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


// Data for the modal windows - now with more personality
const folderData = {
    education: {
        title: "education 🎓",
        content: `
            <div class="mb-6">
                <div class="flex justify-between items-baseline flex-wrap">
                    <h3 class="text-xl font-bold text-white">B.Sc. Medieninformatik</h3>
                    <span class="text-sm text-gray-400 font-medium">LMU Munich</span>
                </div>
                <p class="text-md italic text-gray-300">Focus: UX Design, Human-Computer Interaction, Interface Prototyping</p>
                <span class="text-sm italic text-gray-400 block mt-1">October 2025 – Present</span>
                <ul class="list-disc list-outside ml-5 mt-2 space-y-1 text-gray-300 text-sm">
                    <li>Switched from pure Informatik to find the perfect blend of tech and human-centered design</li>
                    <li>Currently applying UX principles from UX1 & UX2 courses in real projects</li>
                    <li>Finally found where code meets creativity</li>
                </ul>
            </div>
            
            <div class="mb-6">
                <div class="flex justify-between items-baseline flex-wrap">
                    <h3 class="text-xl font-bold text-white">B.Sc. Informatik (field switch)</h3>
                    <span class="text-sm text-gray-400 font-medium">LMU Munich</span>
                </div>
                <p class="text-md italic text-gray-300">Started here, realized I wanted more human-centered computing</p>
                <span class="text-sm italic text-gray-400 block mt-1">October 2022 – October 2025</span>
            </div>
            
            <div>
                <div class="flex justify-between items-baseline flex-wrap">
                    <h3 class="text-xl font-bold text-white">Istanbuler Gymnasium – Istanbul Erkek Lisesi</h3>
                    <span class="text-sm text-gray-400 font-medium">Istanbul, Turkey</span>
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
                <div class="flex justify-between items-baseline flex-wrap">
                    <h3 class="text-xl font-bold text-white">Softwareentwicklungspraktikum</h3>
                    <span class="text-sm text-gray-400 font-medium">Munich, DE</span>
                </div>
                
                <div class="flex justify-between items-baseline flex-wrap mb-3">
                    <h4 class="text-md italic text-gray-300">Ludwig Maximilians University of Munich</h4>
                    <span class="text-sm italic text-gray-400">October 2023 – February 2024</span>
                </div>

                <ul class="list-disc list-outside ml-5 space-y-1 text-gray-300 text-sm leading-relaxed">
                    <li>Worked in an agile development team of 6 members</li>
                    <li>Developed a Java-based desktop adaptation of the multiplayer game RoboRally</li>
                    <li>Implemented gameplay structure, event handling, and interface logic</li>
                    <li>Gained experience in teamwork, problem solving, and iterative development workflows</li>
                </ul>
            </div>

            <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin: 20px 0;">

            <div class="mb-8">
                <h3 class="text-xl font-bold text-white mb-3">Certifications</h3>
                <div class="mb-4">
                    <h4 class="text-md font-semibold text-gray-300">Complete Intro to Web Development</h4>
                    <span class="text-sm italic text-gray-400">FrontendMasters Online – Self-paced (Ongoing)</span>
                </div>
            </div>
        `
    },
    skills: {
        title: "skills & tools 🛠",
        content: `
            <h3 class="text-xl font-bold text-white mb-2">UX & Design</h3>
            <p class="mb-4 text-gray-300">
                User flows, wireframing, interaction design, prototyping (Figma), usability heuristics, 
                basic dashboard layout principles, information architecture.
            </p>
            <p class="mb-4 text-sm text-gray-400">
                Currently mastering Figma components and learning how to make interfaces that don't make people cry.
            </p>

            <h3 class="text-xl font-bold text-white mb-2">Tools</h3>
            <p class="mb-4 text-gray-300">
                Figma, Git, GitLab, VSCode, Miro, Notion, Unity, Overleaf
            </p>

            <h3 class="text-xl font-bold text-white mb-2">Programming</h3>
            <p class="mb-4 text-gray-300">
                Java, JavaScript, HTML, CSS, SQL, Haskell, JSON, LaTeX
            </p>
            <p class="text-sm text-gray-400">
                Java for when things need to be object-oriented, JavaScript for when they need to be confusing, 
                and Haskell for when I need a good cry.
            </p>
        `
    },
    random: {
        title: "beyond code 🎲",
        content: `
            <h3 class="text-xl font-bold text-white mb-4">Things that make me, me:</h3>
            
            <ul class="space-y-3 text-gray-300">
                <li class="flex items-start">
                    <span class="text-2xl mr-3">🇹🇷</span>
                    <div>
                        <strong>München Öğrenci ve Mezunlar Birliği</strong><br>
                        <span class="text-sm text-gray-400">Supporting Turkish students in Munich since 2023. If you're new here, reach out!</span>
                    </div>
                </li>
                
                <li class="flex items-start">
                    <span class="text-2xl mr-3">🌍</span>
                    <div>
                        <strong>Model United Nations (2017-2022)</strong><br>
                        <span class="text-sm text-gray-400">5 years of debating in German and English. Still use those diplomatic skills in merge conflicts.</span>
                    </div>
                </li>
                
                <li class="flex items-start">
                    <span class="text-2xl mr-3">✍️</span>
                    <div>
                        <strong>Sapere Aude! Magazine Contributor</strong><br>
                        <span class="text-sm text-gray-400">Wrote for our German school magazine. From articles to interfaces – still crafting experiences.</span>
                    </div>
                </li>
                
                <li class="flex items-start">
                    <span class="text-2xl mr-3">💬</span>
                    <div>
                        <strong>Trilingual brain</strong><br>
                        <span class="text-sm text-gray-400">Turkish (ana dil), German (Abitur-level), English (debugging & docs)</span>
                    </div>
                </li>
                
                <li class="flex items-start">
                    <span class="text-2xl mr-3">📚</span>
                    <div>
                        <strong>Currently learning</strong><br>
                        <span class="text-sm text-gray-400">FrontendMasters courses, accessibility best practices, and why CSS is like that</span>
                    </div>
                </li>
            </ul>

            <p class="text-center mt-8 text-gray-400 text-sm">
                Always happy to connect with fellow students and designers in Munich!
            </p>
        `
    },
    // Updated case study with more authentic voice
    synchrotrack_case_study: {
        title: "SynchroTrack Case Study",
        content: `
            <div class="case-study-content">
                <h1 class="text-3xl font-bold mb-2">SynchroTrack</h1>
                <p class="text-lg text-gray-300 mb-6">An Adaptive Focus Companion for Different Mental States</p>

                <div class="prototype-preview mb-6">
                    <img src="synchrotrack-mockup.png" alt="SynchroTrack screens preview" class="w-full rounded-lg shadow-lg mb-4" />
                    <div class="flex gap-4 justify-center">
                        <a href="https://www.figma.com/proto/9iO9cm1sCzd4C0CzhLUqfo/SynchroTrack-Prototype?node-id=0-1&t=sD2ZWLPAArMmL3rS-1" 
                           target="_blank" 
                           class="btn-small btn-case-study">
                            View Figma Prototype
                        </a>
                        <a href="https://www.figma.com/file/9iO9cm1sCzd4C0CzhLUqfo/SynchroTrack-Case-Study" 
                           target="_blank" 
                           class="btn-small">
                            View Design Process
                        </a>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-6 mb-2">Project Overview</h2>
                <p class="mb-4 text-gray-300">
                    SynchroTrack is a conceptual mobile application designed to help users enter and maintain 
                    different focus states through adaptive audio-visual feedback. This project demonstrates 
                    my ability to apply UX principles from my Medieninformatik studies at LMU Munich to create 
                    a cohesive, user-centered design solution.
                </p>

                <h2 class="text-xl font-semibold mt-6 mb-2">Design Challenge</h2>
                <p class="mb-4 text-gray-300">
                    How might we design a focus application that adapts to users' varying mental states 
                    without adding cognitive overhead or decision fatigue?
                </p>
                
                <h2 class="text-xl font-semibold mt-6 mb-2">My Role & Timeline</h2>
                <ul class="list-disc list-outside ml-5 space-y-1 text-gray-300 mb-4">
                    <li>Role: UX Designer (Individual Project)</li>
                    <li>Duration: 4 weeks (ongoing iterations)</li>
                    <li>Tools: Figma, FigJam, Notion</li>
                </ul>

                <h2 class="text-xl font-semibold mt-6 mb-2">Design Process</h2>
                
                <h3 class="text-lg font-semibold mt-4 mb-2 text-gray-100">1. Research & Problem Definition</h3>
                <p class="mb-4 text-gray-300">
                    I analyzed existing productivity apps and identified common pain points:
                </p>
                <ul class="list-disc list-outside ml-5 space-y-1 text-gray-300 mb-4">
                    <li>Feature overload creating paradox of choice</li>
                    <li>One-size-fits-all approaches ignoring mental state variations</li>
                    <li>Aggressive notification patterns increasing stress</li>
                    <li>Complex onboarding flows deterring regular use</li>
                </ul>

                <h3 class="text-lg font-semibold mt-4 mb-2 text-gray-100">2. Ideation & Concept Development</h3>
                <p class="mb-4 text-gray-300">
                    Based on cognitive load theory and principles from my HCI courses, I developed a three-state model:
                </p>
                <div class="grid grid-cols-3 gap-4 mb-4">
                    <div class="text-center p-4 bg-gray-800 rounded-lg">
                        <div class="text-2xl mb-2">☁️</div>
                        <h4 class="font-semibold text-gray-100">Calm Focus</h4>
                        <p class="text-sm text-gray-400">Low intensity for deep work</p>
                    </div>
                    <div class="text-center p-4 bg-gray-800 rounded-lg">
                        <div class="text-2xl mb-2">〰️</div>
                        <h4 class="font-semibold text-gray-100">Medium Drive</h4>
                        <p class="text-sm text-gray-400">Balanced for steady tasks</p>
                    </div>
                    <div class="text-center p-4 bg-gray-800 rounded-lg">
                        <div class="text-2xl mb-2">⚡</div>
                        <h4 class="font-semibold text-gray-100">High Energy</h4>
                        <p class="text-sm text-gray-400">Peak performance mode</p>
                    </div>
                </div>

                <h3 class="text-lg font-semibold mt-4 mb-2 text-gray-100">3. Information Architecture</h3>
                <p class="mb-4 text-gray-300">
                    I designed a linear, minimal flow with only five core screens to reduce cognitive load:
                </p>
                <pre class="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 mb-4">
App Entry → Welcome → Login → Calibration → Session → Active
                                    ↓
                             (Choose State)
                </pre>

                <h3 class="text-lg font-semibold mt-4 mb-2 text-gray-100">4. Design System Creation</h3>
                <p class="mb-4 text-gray-300">
                    I developed a comprehensive design system in Figma:
                </p>
                <ul class="list-disc list-outside ml-5 space-y-2 text-gray-300 mb-4">
                    <li><strong>Color Psychology:</strong> Deep blues for calm, graduated intensity for higher energy states</li>
                    <li><strong>Typography:</strong> Inter family with clear hierarchy (32pt → 14pt scale)</li>
                    <li><strong>Component Library:</strong> Reusable buttons, inputs, cards with multiple states</li>
                    <li><strong>8pt Grid System:</strong> Ensuring consistent spacing and alignment</li>
                </ul>

                <h3 class="text-lg font-semibold mt-4 mb-2 text-gray-100">5. Prototyping & Interaction Design</h3>
                <p class="mb-4 text-gray-300">
                    The Figma prototype includes:
                </p>
                <ul class="list-disc list-outside ml-5 space-y-2 text-gray-300 mb-4">
                    <li>Smart animate transitions between screens</li>
                    <li>Interactive component states (hover, pressed, disabled)</li>
                    <li>Micro-interactions for enhanced feedback</li>
                    <li>State-specific visual treatments</li>
                </ul>

                <h2 class="text-xl font-semibold mt-6 mb-2">Key Design Decisions</h2>
                
                <div class="space-y-4 mb-6">
                    <div>
                        <h4 class="font-semibold text-gray-100 mb-1">Limited Choice Architecture</h4>
                        <p class="text-gray-300 text-sm">Only three states to prevent decision paralysis while maintaining user agency</p>
                    </div>
                    <div>
                        <h4 class="font-semibold text-gray-100 mb-1">Progressive Disclosure</h4>
                        <p class="text-gray-300 text-sm">Information revealed only when needed, reducing cognitive load</p>
                    </div>
                    <div>
                        <h4 class="font-semibold text-gray-100 mb-1">Ambient Feedback</h4>
                        <p class="text-gray-300 text-sm">Visual gradients and colors provide non-intrusive state awareness</p>
                    </div>
                    <div>
                        <h4 class="font-semibold text-gray-100 mb-1">Accessibility First</h4>
                        <p class="text-gray-300 text-sm">44pt touch targets, proper contrast ratios, clear visual hierarchy</p>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-6 mb-2">Figma Prototype Features</h2>
                <ul class="list-disc list-outside ml-5 space-y-2 text-gray-300 mb-4">
                    <li>7 fully designed screens with consistent design system</li>
                    <li>Interactive prototype with realistic user flows</li>
                    <li>Component documentation and design specs</li>
                    <li>Process documentation showing design evolution</li>
                    <li>Accessibility annotations and developer handoff notes</li>
                </ul>

                <h2 class="text-xl font-semibold mt-6 mb-2">Results & Learnings</h2>
                <p class="mb-4 text-gray-300">
                    This project taught me:
                </p>
                <ul class="list-disc list-outside ml-5 space-y-2 text-gray-300 mb-4">
                    <li>The importance of constraint in reducing cognitive load</li>
                    <li>How to create and maintain a consistent design system</li>
                    <li>The value of documenting design decisions</li>
                    <li>How to balance aesthetics with usability</li>
                </ul>

                <h2 class="text-xl font-semibold mt-6 mb-2">Next Steps</h2>
                <p class="mb-4 text-gray-300">
                    With additional resources, I would:
                </p>
                <ul class="list-disc list-outside ml-5 space-y-1 text-gray-300 mb-4">
                    <li>Conduct user research with 5-8 target users</li>
                    <li>Run usability tests on the prototype</li>
                    <li>Iterate based on feedback</li>
                    <li>Develop metrics for measuring success</li>
                </ul>

                <div class="text-center mt-8 p-6 bg-gray-800 rounded-lg">
                    <p class="text-gray-300 mb-4">Want to see the full design process and interactive prototype?</p>
                    <div class="flex gap-4 justify-center flex-wrap">
                        <a href="https://www.figma.com/proto/9iO9cm1sCzd4C0CzhLUqfo/SynchroTrack-Prototype?node-id=0-1&t=sD2ZWLPAArMmL3rS-1" 
                           target="_blank" 
                           class="btn-small btn-case-study">
                            Try the Prototype
                        </a>
                        <a href="https://www.figma.com/file/9iO9cm1sCzd4C0CzhLUqfo/SynchroTrack-Case-Study" 
                           target="_blank" 
                           class="btn-small">
                            View Figma File
                        </a>
                    </div>
                </div>
            </div>
        `
    }
};

// Window functionality remains the same
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