chrome.runtime.onInstalled.addListener(() => {
    console.log('Session Copier extension installed');
});

chrome.action.onClicked.addListener((tab) => {
    // Extract session data from the current tab
    // (for the sake of simplicity, we'll consider cookies as session data here)
    chrome.cookies.getAll({ url: tab.url }, (cookies) => {
        // Store cookies in local storage for later use
        chrome.storage.local.set({ sessionData: cookies });
    });
});