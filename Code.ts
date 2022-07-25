function init() {
  Logger.log("Hello World!")
}

function winred(e) {
  var report = SpreadsheetApp.getActiveSpreadsheet(); 
  var sheet = report.getSheetByName("Donors");
  var donors = sheet.getDataRange().getValues();
  var newDonor = true;
  for (var i = 0; i < donors.length; i++) {
    if (donors[i][0] == e.Email) {
      Logger.log("Original Entry: "+donors[i]);
      newDonor = false; 
      donors[i][3] += e.Amount;
      Logger.log("New Entry: "+donors[i])
    }
  }
  sheet.getActiveRange()

}

function getEmail() {
  
}

function getSubscribers() {
  
}

function checkSubscribers() {
  
}

function addSubscriber() {
  
}

function serialize(sheet, data: [][], append: boolean = true) {
  if (append) {
    var end = sheet.getDataRange().height;
    var range = sheet.getRange(end,1, data.length, data[0].length)
  } else {
    sheet.getRange(1,1, data.length, data[0].length)
  }

  range.setValues(data);
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

