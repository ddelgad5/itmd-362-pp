$('#form').on("submit", function(e) {
  e.preventDefault(); //Prevent link
  console.log("Form Submitted"); //Add to console
  var today = new Date(); //Get todays date
  var bdate = $('#date')[0].valueAsDate; //Get user DOB
  var tyear = today.getFullYear(); //Get todays year
  var byear = bdate.getFullYear(); //Get users YOB
});

function formsubmitted() {
  console.log("Form passed proper tests");
  
}
