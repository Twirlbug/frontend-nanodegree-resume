/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Nicole Geiger");


 //$("#main").append("Nicole Geiger ");

  


 
 var skills = ["Java", "C", "Adobe CS6 Suite", "Microsoft Suite"];
 
 //$("#main").append(skills);
 var role = "Info Technology";
 var formattedRole = HTMLheaderRole.replace("%data%", role);
  $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
 
 var bio= {
   "name":"Nicole",
   "role":"Information Technology",
   "contacts":{
      "email":"twirlbug@gmail.com",
      "github":"Twirlbug",
	  "mobile":"262-748-5667",
	  "location":"Kenosha, Wi"},
 "skills": skills
 }
 
 
  //var formattedpic = HTMLbioPic.replace("%data%",  bio.contacts.biopic);
  //$("#header").append(formattedpic);
  <div>
  var formattedEmail = HTMLemail.replace("%data%",  bio.contacts.email);
  $("#header").append(formattedEmail);
  var formattedMobile = HTMLmobile.replace("%data%",  bio.contacts.mobile);
  //$("#header").append(formattedMobile);
  var formattedgithub = HTMLgithub.replace("%data%",  bio.contacts.github);
  $("#header").append(formattedMobile, formattedgithub);
  var formattedLocation = HTMLlocation.replace("%data%",  bio.contacts.location);
  $("#header").append(formattedLocation);
  var img = document.createElement("img");
  </dif>
img.src =  "https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/11709736_837723032983625_8493569490743005868_n.jpg?oh=e87fec3462292493c7dfdaea0f758b87&oe=56918832";
img.style.width = '10%'
img.style.height = 'auto'
var src = document.getElementById("header");
src.appendChild(img);
  

if(bio.skills.length > 0){
 $("#header").append(HTMLskillsStart);
 var formattedSkill=HTMLskills.replace("%data%", bio.skills[0]);
 $("#skills").append(formattedSkill);
 formattedSkill=HTMLskills.replace("%data%", bio.skills[1]);
 $("#skills").append(formattedSkill);
 formattedSkill=HTMLskills.replace("%data%", bio.skills[2]);
 $("#skills").append(formattedSkill);
 formattedSkill=HTMLskills.replace("%data%", bio.skills[3]);
 $("#skills").append(formattedSkill);
}


var work= {
 "jobs":[
  {
"position": "student worker",
"employer":"ATS",
"years":3
},
{
"position": "Assistant",
"employer":"Trancendental Golf",
"years":.5
}
]
}

for (job in work.jobs){
$("#workExperience").append(HTMLworkStart);

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
var formattedEmployerTitle = formattedEmployer + formattedTitle;

$(".work-entry:last").append(formattedEmployerTitle);
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
