// 1. Select the button element from the HTML
const toggleButton = document.getElementById('theme-toggle');
// 2. Select the body element
const body = document.body;
// 3. Add an "Event Listener" to listen for clicks
toggleButton.addEventListener('click',function() {
    // 4. Toggle the class "dark-mode" on the body
        body.classList.toggle('dark-mode')
});