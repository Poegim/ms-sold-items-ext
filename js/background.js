var contextMenus = {};

contextMenus.createAppMenu = chrome.contextMenus.create(
    {"title":"MobileStore Avg"},
    function () {
        if(chrome.runtime.lastError)
        {
            console.error(chrome.runtime.lastError.message);
        }
    }
);

chrome.contextMenus.onClicked.addListener(contextMenuHandler);

function contextMenuHandler(info, tabs)
{
    if (info.menuItemId === contextMenus.createAppMenu)
    {
        chrome.tabs.executeScript({
            file: 'js/app.js'
        });
    }
}