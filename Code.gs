  var sheet = SpreadsheetApp.openById("your_spreadsheet_id").getSheets()[0];

function doGet() {
//  return HtmlService.createHtmlOutputFromFile('index')
//      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  var html = HtmlService.createTemplateFromFile("yahtzee").evaluate();
  html.setTitle("Social Distancing Yahtzee");
  return html;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .getContent();
}
function showDice(side1,side2,side3,side4,side5)  {

  range=sheet.getRange("B1");
  range.setValue(side1);
  range=sheet.getRange("C1");
  range.setValue(side2);
  range=sheet.getRange("D1");
  range.setValue(side3);
  range=sheet.getRange("E1");
  range.setValue(side4);
  range=sheet.getRange("F1");
  range.setValue(side5);
  range=sheet.getRange("A1:F1");
  range.setBackground('#ffda33');

}

function recordScore(cell,score) {
  range=sheet.getRange(cell);
  range.setValue(score);
}

function setUpScore(name,column) {
  range=sheet.getRange(column+"2:"+column+"25").activate();
//  range.clear({contentsOnly: true, skipFilteredRows: true});
  range.clear();
  range=sheet.getRange(column+"2");
  range.setValue(name);
  range=sheet.getRange(column+"10");
  range.setValue("=sum("+column+"4:"+column+"9)");
  range=sheet.getRange(column+"11");
  range.setValue("=IF("+column+"10>=35,35,0)");
  range=sheet.getRange(column+"12");
  range.setValue("="+column+"10+"+column+"11");
  range=sheet.getRange(column+"23");
  range.setValue("=sum("+column+"15:"+column+"22)");
  range=sheet.getRange(column+"24");
  range.setValue("="+column+"12");
  range=sheet.getRange(column+"25");
  range.setValue("="+column+"23+"+column+"24");  
}
