var role = "Information Technology";
var skills = ["Java", "C", "Adobe CS6 Suite", "Microsoft Suite"];

 var bio= {
   "name":"Nicole Geiger",
   "role":role,
   "contacts":{
      "email":"twirlbug@gmail.com",
      "github":"Twirlbug"
    
   },
   "biopic":"https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/11709736_837723032983625_8493569490743005868_n.jpg",
   "welcomeMessage": "Greetings",
   "skills": skills
 };
 
var formatedName=HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formatedName);
var formatedRole=HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formatedRole);
/*
var work= {
 "jobs":[
  {
"position": "student worker";
"employer"="ATS";
"employerTitle"="boss";
"years"=3;
}
]
};

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
 "project":[
  {
     "name":"Tennis App",
     "type":"Android App"
  }
  {
   "name": "Hello World",
   "type": "Java"
  }
  ]
}
*/

if(bio.skills.length>0){
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

/*

for (jobs in work.jobs){
 $(#workExperience).append(HTMLworkStart);
 var formatEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
   var formatEmpTitle = formatEmployer+formatTitle;
   $(".work-entry:last").append(formatEmptitle);
}
*/

