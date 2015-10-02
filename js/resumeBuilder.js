/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName = HTMLheaderName.replace("%data%", name);

 //$("#main").append("Nicole Geiger");

 var formattedRole = HTMLheaderName.replace("%data%", role);
  var role = "Information Technology"
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
