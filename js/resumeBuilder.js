/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName = HTMLheaderName.replace("%data%", "Nicole Geiger");

 //$("#main").append("Nicole Geiger ");
var role = "Information Technology";
 var formattedRole = HTMLheaderRole.replace("%data%", role);
  
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 
 var skills = ["Java", "C", "Adobe CS6 Suite", "Microsoft Suite"];
 
 //$("#main").append(skills);
 
 var bio= {
   "name":"Nicole",
   "role":"Information Technology",
   "contacts":{
      "email":"twirlbug@gmail.com",
      "github":"Twirlbug"},
  "biopic":"https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/11709736_837723032983625_8493569490743005868_n.jpg"
  // "skills": skills
 };
 //bio.skills= skills;

var work= {
 "jobs":[
  {
"position": "student worker",
"employer":"ATS",
"years":3
}
]
}

var education={
    "schools": [
        {
            "name": "Cornell College",
            "city": "Mount Vernon, IA, US",
            "degree": "BA",
            "major": "Computer Science"
        }
    ]
}


var programs={
    "programs": [
        {
            "name": "Tennis App",
            "type": "Android app"
        },
        {
            "name": "Hello World",
            "type": "Java"
        }
        
    ]
}
