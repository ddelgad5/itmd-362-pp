$('#form').on("submit", function(e) {
  e.preventDefault(); //Prevent link
  console.log("Form Submitted"); //Add to console
  var today = new Date(); //Get todays date
  var bdate = $('#date')[0].valueAsDate; //Get user DOB
  var tyear = today.getFullYear(); //Get todays year
  var byear = bdate.getFullYear(); //Get users YOB
  if ( tyear - byear > 18 ) {
    console.log("Greater than 18 yrs. old");
    formsubmitted();
  }
  else if ( tyear - byear === 18 ) {
    console.log("Equal to 18 yrs. old");

  }
  else {
    console.log("Less than 18 yrs. old");
    notlegal();
  }
});

function formsubmitted() {
  console.log("Form passed proper tests");

}

function notlegal() {
  window.alert("You must be 18 years or older.");
}
