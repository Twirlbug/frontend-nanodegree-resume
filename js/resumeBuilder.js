/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName = HTMLheaderName.replace("%data%", name);

 //$("#main").append("Nicole Geiger ");
var role = "Information Technology";
 var formattedRole = HTMLheaderRole.replace("%data%", role);
  
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 
 var skills = ["Java", "C", "Adobe CS6 Suite", "Microsoft Suite"];
 
 $("#main").append(skills);
 
 var bio= {
   "name"="Nicole",
   "role"=role,
   "contact info"="twirlbug@gmail.com",
   "picture url"="https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/11709736_837723032983625_8493569490743005868_n.jpg?oh=e87fec3462292493c7dfdaea0f758b87&oe=56918832",
   "welcome message"= "Greetings",
   "skills"= skills
 };
