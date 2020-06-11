function popUpDrawing(id, text) {
  //console.log(text);
  //write in input's placeholder
  document.getElementById(id).placeholder = text;
}
function myFunction(id, data) {
  switch (data) {
    case 1:
      var text = "First name here";
      popUpDrawing(id, text);
      break;
    case 2:
      var text = "Second name here";
      popUpDrawing(id, text);
      break;
    case 3:
      var text = "You must be over older than 18.";
      popUpDrawing(id, text);
      break;
    case 4:
      var text = "format: email@example.com";
      popUpDrawing(id, text);
      break;
    case 5:
      var text = "max ch:8;Uppercase,Lowercase,Numebrs & Symbols";
      popUpDrawing(id, text);
      break;
  }
}
function disableSubmit() {
  console.log("captcha pressed!");
  var isprivacyToolAvail = false;
  var isconsentToolAvail = false;
  var bothtoolAvail = false;
  var privacytool = "";
  var consenttool = "";
  var submitbutton = document.getElementById("submitButton");
  var style = (style1 = submitbutton.getAttribute("style"));
  style = style.replace("opacity:0.5;", "");
  if (style1.indexOf("opacity:0.5") < 0) {
    style1 = " ";
  }
  if (
    document.getElementById("privacyTool") != undefined &&
    document.getElementById("consentTool") != undefined
  ) {
    isprivacyToolAvail = true;
    privacytool = document.getElementById("privacyTool");
    isconsentToolAvail = true;
    consenttool = document.getElementById("consentTool");
    bothtoolAvail = true;
  }

  if (document.getElementById("privacyTool") != undefined) {
    isprivacyToolAvail = true;
    privacytool = document.getElementById("privacyTool");
  }
  if (document.getElementById("consentTool") != undefined) {
    isconsentToolAvail = true;
    consenttool = document.getElementById("consentTool");
  }
  if (
    submitbutton.hasAttribute("disabled") &&
    bothtoolAvail &&
    consenttool.checked &&
    privacytool.checked
  ) {
    submitbutton.removeAttribute("disabled");
    submitbutton.setAttribute("style", style);
  } else if (
    submitbutton.hasAttribute("disabled") &&
    isprivacyToolAvail &&
    privacytool.checked &&
    consenttool == ""
  ) {
    submitbutton.removeAttribute("disabled");
    submitbutton.setAttribute("style", style);
  } else if (
    submitbutton.hasAttribute("disabled") &&
    isconsentToolAvail &&
    consenttool.checked &&
    privacytool == ""
  ) {
    submitbutton.removeAttribute("disabled");
    submitbutton.setAttribute("style", style);
  } else {
    submitbutton.setAttribute("disabled", true);
    submitbutton.setAttribute("style", style1);
  }
}
function pressSubmit() {
  console.log("button pressed!");
}
