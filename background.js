/*HKing 2016-04-29*/
var rulArr = [];
chrome.runtime.onMessage.addListener(function( request, sender, sendResponse ){
    rulArr.push(request.url);
    console.clear();
    console.log(rulArr);
    sendResponse(null);
});
