// background.js

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.local.clear(() => {
	  console.log("LocalStorage 초기화 완료.");
	});
  });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	console.log("Background script received a message:", message);
	if (message.action === 'fetchExperiences' && message.username) {
	  const username = message.username;
	  const fetchUrl = `https://profile.intra.42.fr/users/${username}/experiences/cursus_id/21`;
  
	  console.log(`Fetching experiences for username: ${username} from URL: ${fetchUrl}`);
  
	  fetch(fetchUrl)
		.then(response => {
		  if (!response.ok) {
			throw new Error(`Network response was not ok: ${response.statusText}`);
		  }
		  return response.text();
		})
		.then(html => {
		  // Send the HTML data to the content script
		  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {action: "parseHTML", html: html});
		  });
		})
		.catch(error => console.error('Error fetching experiences:', error));
	}
  });
  