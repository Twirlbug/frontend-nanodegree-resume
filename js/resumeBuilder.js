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
	
	
/*function inName(name){
name  = name.trim().split(" ");
console.log(name);
name[1] = name[1].toUpperCase();
name[0]= name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
return name[0]+" "+name[1];
}
inName("Nicole Geiger");
$('#main).append(internationalizeButton);*/
 
 var bio= {
   "name":"Nicole",
   "role":"Information Technology",
   "contacts":{
      "email":"twirlbug@gmail.com",
      "github":"Twirlbug",
	  "mobile":"262-748-5667",
	  "location":"Pleasant Prairie, Wisconsin"},
 "skills": skills
 }
 
 
  //var formattedpic = HTMLbioPic.replace("%data%",  bio.contacts.biopic);
  //$("#header").append(formattedpic);

  var formattedEmail = HTMLemail.replace("%data%",  bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  var formattedMobile = HTMLmobile.replace("%data%",  bio.contacts.mobile);
  //$("#header").append(formattedMobile);
  var formattedgithub = HTMLgithub.replace("%data%",  bio.contacts.github);
  $("#topContacts").append(formattedMobile, formattedgithub);
  var formattedLocation = HTMLlocation.replace("%data%",  bio.contacts.location);
  $("#topContacts").append(formattedLocation);
  var img = document.createElement("img");
  
 
img.src =  "https://media.licdn.com/media/AAEAAQAAAAAAAAKDAAAAJGNkNTkwNDY3LTVmZGQtNDYxZi04OGQyLTE3ZTkzMDg2ODNkNw.jpg";
//img.style.width = '10%'
//img.style.height = 'auto'
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
 "location":"Kenosha, Wisconsin",
"position": "Extra Hand",
"employer":"PLE",
"dates":"2013-2014",
"desc": "Lawn work",
"years":1
},
{
"location":"Pleasant Prairie, Wisconsin",
"position": "Assistant",
"employer":"Trancendental Golf",
"dates":"2012-2012",
"desc": "Junior Pro",
"years":.5
}
]
}
function displayWork(){
for (job in work.jobs){
$("#workExperience").append(HTMLworkStart);
var formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location)
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
$(".work-entry:last").append(formattedEmployerTitle);

var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);

var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].desc);
$(".work-entry:last").append(formattedDesc);
}

}

displayWork();

var education={
    "schools": [
        {
            "name": "Cornell College",
            "location": "Mount Vernon, IA, US",
            "degree": "BA",
            "major": "Computer Science"
        }
    ]
}

var projects={
    "projects": [
        {
            "name": "Tennis App",
            "type": "Android app",
			"date":"Sept. 2015"
        },
        {
            "name": "Hello World",
            "type": "Java",
			"date":"Dec. 2014"
        }
        
    ]
}

function displayProjects(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].name);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$(".project-entry:last").append(formattedDates);
		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].type);
		$(".project-entry:last").append(formattedDesc);
	
	}
	}
	
	displayProjects();

$(document).click(function(loc){
var x = loc.pageX;
var y = loc.pageY;

logClicks(x,y);
});

$("#mapDiv").append(googleMap);
