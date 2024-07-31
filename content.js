// Function to extract the username and send it to the background script
function extractUsername() {
    console.log("Content script loaded and running.");
    const spanElement = document.querySelector('span[data-login]');
    if (spanElement) {
        const username = spanElement.getAttribute('data-login');
        console.log("Extracted username:", username);
        chrome.runtime.sendMessage({ action: 'fetchExperiences', username: username }, (response) => {
            console.log("Message sent to background script to fetch experiences.");
        });
    } else {
        console.log("No username found on the page.");
    }
}

// Listener to receive the HTML content from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "parseHTML" && message.html) {
        console.log("Received HTML content from background script.");
        
        // Parse the HTML to extract the experiences data
        const parser = new DOMParser();
        const doc = parser.parseFromString(message.html, 'text/html');
        const changelogItems = doc.querySelectorAll('.changelog-item');
        const experiences = [];
        
        changelogItems.forEach(item => {
            // Extract relevant data from each changelog item
            const reason = item.querySelector('.changelog-main .title .reason') ? item.querySelector('.changelog-main .reason').innerText.trim() : 'No reason';
            const content = item.querySelector('.changelog-main .content') ? item.querySelector('.changelog-main .content').innerText : 'No content';
            experiences.push({ reason, content });
        });
        
        console.log("Extracted experiences:", experiences);
        
        // Store the parsed data in local storage
        chrome.storage.local.set({ experiences: experiences }, () => {
            console.log("Experiences data saved to local storage.");
        });
    }
});

// Run the function to extract the username
extractUsername();
