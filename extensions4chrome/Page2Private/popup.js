chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let currentUrl = tabs[0].url;
	console.log(currentUrl);
	// Öppna ett nytt inkognitofönster
	chrome.windows.create(
		{"incognito": true,
		"url": currentUrl,
		"focused": true});

});



