  var sheet = SpreadsheetApp.openById("19zl68ksLiff3eYE-y_LfplhkD3I0MFsGjOOm5Y5lHYA").getSheets()[0];

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

function getDiceData(){
  range=sheet.getRange("B1:F1");
  return range.getValues();
}

function getPlayerData(column){
//    var sheet = SpreadsheetApp.openById("19zl68ksLiff3eYE-y_LfplhkD3I0MFsGjOOm5Y5lHYA").getSheets()[0];
//  range=sheet.getRange("G1");
//  range.setValue(column);
  cellRange=column+"2:"+column+"25";
  range=sheet.getRange(cellRange);
  return range.getValues();
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
