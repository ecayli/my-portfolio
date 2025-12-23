// Modal setup - these elements handle the 'folder window' popups when you click Education, Skills, etc.
const modal = document.getElementById('window-modal');
const modalTitle = document.getElementById('window-title');
const modalContent = document.getElementById('window-content');

// All projects that appear on the site - add new ones here and the cards auto-generate below
// Each project is self-contained: title, description, tech stack, and link(s)
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

// Dynamically generate project cards from the array above
// This pattern keeps the HTML clean and the content in one place
const container = document.getElementById("project-container");

projects.forEach(project => {
    let linkHTML = "";
    
    // Handle different link types - single link or multiple (Figma + case study)
    if (typeof project.link === "string") {
        // Single link
        if (project.link === "#") {
            linkHTML = `<span class="btn-small btn-disabled">Details coming soon</span>`;
        } else {
            linkHTML = `<a href="${project.link}" target="_blank" class="btn-small">Check it out</a>`;
        }
    } else if (project.link && typeof project.link === "object") {
        // When a project has multiple ways to explore it (like viewing the prototype OR reading the case study)
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


// Content for the 'folder windows' - Education, Experience, Skills, and Random Facts
// Each one tells part of my story with genuine voice (not just dry credentials)
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
        title: "SynchroTrack Case Study 📱",
        content: `
            <div class="case-study-content">
                <h1 class="text-3xl font-bold mb-4">SynchroTrack: My First Real UX Project</h1>
                
                <p class="mb-4 text-gray-300 italic">
                    Spoiler: I made a lot of rookie mistakes, but learned even more.
                </p>

                <h2 class="text-xl font-semibold mt-6 mb-2">🤔 The Problem (aka my personal frustration)</h2>
                <p class="mb-4 text-gray-300">
                    Ever tried using a "productivity" app when your brain is already fried? Yeah, me too. 
                    Most focus apps assume you're a productivity machine who just needs more features, 
                    more trackers, more guilt-inducing statistics.
                </p>
                <p class="mb-4 text-gray-300">
                    <strong>My hypothesis:</strong> What if a focus app could be... less? Less choices, 
                    less cognitive load, less judgment. Just enough to help you start.
                </p>

                <h2 class="text-xl font-semibold mt-6 mb-2">🎯 Design Approach</h2>
                <p class="mb-4 text-gray-300">
                    I went full minimalist (maybe too minimal at first). The entire app flow is basically:
                </p>
                <ol class="list-decimal list-outside ml-5 space-y-2 text-gray-300 mb-4">
                    <li>Open app (no onboarding novels)</li>
                    <li>Quick login (because we have to)</li>
                    <li>One question: "How's your brain today?"</li>
                    <li>Pick your vibe: Calm, Medium, or High energy</li>
                    <li>Start focusing (that's it!)</li>
                </ol>

                <h2 class="text-xl font-semibold mt-6 mb-2">🎨 Design Decisions I'm Proud Of</h2>
                <ul class="list-disc list-outside ml-5 space-y-3 text-gray-300">
                    <li>
                        <strong>Three modes only</strong> – Because when you're overwhelmed, 
                        even choosing between 5 options feels like too much
                    </li>
                    <li>
                        <strong>No timers showing during setup</strong> – You decide to start 
                        when YOU'RE ready, not when the app thinks you should
                    </li>
                    <li>
                        <strong>Gradients that shift with your state</strong> – Visual feedback 
                        without numbers or percentages judging your "productivity score"
                    </li>
                    <li>
                        <strong>Zero notifications</strong> – If you need the app, you'll open it. 
                        We're not Instagram.
                    </li>
                </ul>

                <h2 class="text-xl font-semibold mt-6 mb-2">😅 What I'd Change (learning moments)</h2>
                <ul class="list-disc list-outside ml-5 space-y-2 text-gray-300">
                    <li>The glassmorphism might be too trendy – will it age well?</li>
                    <li>Need better accessibility – contrast ratios aren't great</li>
                    <li>Should test with actual ADHD/anxious users (not just myself)</li>
                    <li>Maybe add ONE customization option for session length?</li>
                </ul>

                <h2 class="text-xl font-semibold mt-6 mb-2">💡 What I Learned</h2>
                <p class="mb-4 text-gray-300">
                    First real project syndrome is real – I wanted to add every cool Figma trick I knew. 
                    But constraint is actually freeing. By limiting myself to one core flow and three states, 
                    I could focus on making each screen actually good instead of just... there.
                </p>
                <p class="mb-4 text-gray-300">
                    Also: components in Figma will save your life. Make them early. Name them properly. 
                    Future you will thank present you.
                </p>

                <p class="text-center mt-8">
                    <a href="https://www.figma.com/proto/9iO9cm1sCzd4C0CzhLUqfo/SynchroTrack-Prototype?node-id=0-1&t=sD2ZWLPAArMmL3rS-1" 
                       target="_blank" 
                       class="btn-small btn-case-study">
                        See it in Action →
                    </a>
                </p>
            </div>
        `
    }
};

// Window functionality - open/close the modal popups
// Simple but effective: classList.add/remove is all you need for showing/hiding
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

// Click outside the modal to close it - feels more natural than having to hunt for an X
window.onclick = function (e) {
    if (e.target == modal) closeWindow();
};

// Fade-in animation on page load - makes the site feel less static
// querySelectorAll finds all the main content blocks and adds the animation class
const hiddenElements = document.querySelectorAll(
    ".hero, .about, .projects-section h2, .contact-section, .project-card"
);
hiddenElements.forEach((el) => {
    el.classList.add("animate-fadeIn");
});