document.getElementById('applySession').addEventListener('click', () => {
    // Get session data from local storage
    chrome.storage.local.get('sessionData', (data) => {
        const cookies = data.sessionData;
        // Create a new tab
        chrome.tabs.create({ url: 'https://ticketing.liverpoolfc.com/order.aspx?owners=yes' }, (newTab) => {
            cookies.forEach((cookie) => {
                // Set each cookie to the new tab
                chrome.cookies.set({
                    url: newTab.url,
                    name: cookie.name,
                    value: cookie.value
                });
            });
        });
    });
});