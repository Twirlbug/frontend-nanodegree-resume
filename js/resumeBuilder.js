/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName = HTMLheaderName.replace("%data%", name);

<<<<<<< HEAD
 //$("#main").append("Nicole Geiger");
 var role = "Information Technology";
 var formattedRole = HTMLheaderName.replace("%data%", role);

=======
 //$("#main").append("Nicole Geiger ");
var role = "Information Technology";
 var formattedRole = HTMLheaderRole.replace("%data%", role);
  
>>>>>>> master
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
