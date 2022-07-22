function init() {
  Logger.log("Hello World!")
}

function winred() {
  
}

function getEmail() {
  
}

function getSubscribers() {
  
}

function checkSubscribers() {
  
}

function addSubscriber() {
  
}

function serialize() {
  
  
}

function fetchData(category: string, query: string, uriComponents: string[]) {
  var url: string = "https://firepit.campstrategic.com/api8/" +  category + '/' + query;
  var url = '?' + uriComponents.join('&');
  const requestData = {
    method: 'GET',
    followRedirects: true,
    muteHttpExceptions: true,
    contentType: 'application/json'
  }
  
  return JSON.parse(UrlFetchApp.fetch(url, requestData).getContentText());
}