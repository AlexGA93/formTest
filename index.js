/*//////////////////////////////////////////////////////////////////////
Rendering html elements in function that whose <option></option> is selected
//////////////////////////////////////////////////////////////////////*/
function checkbox(termsCheckBox) {
  console.log("checked!");
  //If the checkbox has been checked
  if (termsCheckBox.checked) {
    document.getElementById("submitButton").disabled = false; //Set the disabled property to FALSE and enable the button.
    document.getElementById("submitButton").style.opacity = "1"; //quit opacity
  } else {
    document.getElementById("submitButton").disabled = true; //Otherwise, disable the submit button.
    document.getElementById("submitButton").style.opacity = "0.5"; //quit opacity
  }
}

function selectedOption(id) {
  //console.log("element: " + id);

  if (id == "emailElement") {
    document.getElementById("renderedEmail").removeAttribute("hidden");
    document.getElementById("renderedApi").hidden = "true";
  } else if (id == "apiElement") {
    document.getElementById("renderedApi").removeAttribute("hidden");
    document.getElementById("renderedEmail").hidden = "true";
  } else {
    document.getElementById("renderedEmail").hidden = "true";
    document.getElementById("renderedApi").hidden = "true";
  }
  //unhide renderedElem and write elements
}

////////////////////////////////////////
function popUpDrawing(id, text) {
  //console.log(text);
  //write in input's placeholder
  document.getElementById(id).placeholder = text;
}
function selectedRequestOption(request) {
  $("#form").attr("method", request.toLowerCase());

  if (request == "GET") {
    document.getElementById("url001").removeAttribute("hidden");
    document.getElementById("url002").removeAttribute("hidden");
    document.getElementById("url003").removeAttribute("hidden");
  } else {
    document.getElementById("url001").hidden = "true";
    document.getElementById("url002").hidden = "true";
    document.getElementById("url003").hidden = "true";
  }
  switch (request) {
    case "POST":
      console.log("POST");
      // form elements and call php API(response: "thank  you message")
      break;
    case "GET":
      //write url element
      console.log("GET");
      // take URL parameter to the api (response: Actual Json)
      break;
    case "DELETE":
      console.log("DELETE");
      // taking email form to the api -> locate user's email and delete him ( response: updated json)
      break;
  }
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
// function disableSubmit() {
//   console.log("captcha pressed!");
// }

function pressSubmit() {
  //draw 'success' pannel
  console.log("button pressed!");
}
