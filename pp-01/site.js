$('#form').on("submit", function(e) {
  e.preventDefault(); //Prevent link
  console.log("Attempting submission"); //Add to console
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
    //calculate months
    var tmonth = today.getMonth();
    var bmonth = bdate.getMonth();
    //console.log("tmonth = " + tmonth);
    //console.log("bmonth = " + bmonth);
    if ( tmonth > bmonth ) {
      formsubmitted();
    }
    else if ( tmonth === bmonth ) {
      //calculate days
      var tday = today.getDay();
      var bday = bdate.getDay();
      console.log("tday = " + tday);
      console.log("bday = " + bday);

    }
    else {
      console.log("Less than 18 yrs. old");
      notlegal();
    }
  }
  else {
    console.log("Less than 18 yrs. old");
    notlegal();
  }
});

function formsubmitted() {
  console.log("Form passed proper tests");
  $('#form').remove();
  $('body').append('<h2 id="post">Form submitted successfully.</h2>');
}

function notlegal() {
  window.alert("You must be 18 years or older.");
}
