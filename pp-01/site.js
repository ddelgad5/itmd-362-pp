$('#form').on("submit", function(e) {
  e.preventDefault(); //Prevent link
  console.log("Form Submitted"); //Add to console
  var today = new Date();
  var bdate = $('#date')[0].valueAsDate;
  var tyear = today.getFullYear();
  var byear = bdate.getFullYear();
  console.log("Today's date is " + today);

});
