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
	  "location":"Kenosha, Wi"},
 "skills": skills
 }
 
 
  //var formattedpic = HTMLbioPic.replace("%data%",  bio.contacts.biopic);
  //$("#header").append(formattedpic);

  var formattedEmail = HTMLemail.replace("%data%",  bio.contacts.email);
  $("#header").append(formattedEmail);
  var formattedMobile = HTMLmobile.replace("%data%",  bio.contacts.mobile);
  //$("#header").append(formattedMobile);
  var formattedgithub = HTMLgithub.replace("%data%",  bio.contacts.github);
  $("#header").append(formattedMobile, formattedgithub);
  var formattedLocation = HTMLlocation.replace("%data%",  bio.contacts.location);
  $("#header").append(formattedLocation);
  var img = document.createElement("img");
 
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
"position": "Extra Hand",
"employer":"PLE",
"dates":"2013-2014",
"desc": "Lawn work",
"years":1
},
{
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
            "city": "Mount Vernon, IA, US",
            "degree": "BA",
            "major": "Computer Science"
        }
    ]
}

var projects={
    "programs": [
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

projects.display= function(){
	for (program in projects.program){
		$("#projects").append(HTMLprojectsStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.programs.name);
		$(".program-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.programs.date);
		$(".program-entry:last").append(formattedDates);
		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.programs.type);
		$(".program-entry:last").append(formattedDesc);
	
	}
	}

$(document).click(function(loc){
var x = loc.pageX;
var y = loc.pageY;

logClicks(x,y);
});


