var bio = {
  "name": "Rachel Luciano",
  "role": "Web Developer",
  "contacts": {
      "mobile": "111-222-3333",
      "email": "rachelannluciano@gmail.com",
      "github": "rluciano",
      "twitter": "@rluciano",
      "location": "New York, NY"
    },
    "welcomeMsg": "Welcome to my online resume! I am currently working in marketing but I like learning new things on my free time. This online resume is a project for Udacity's Front-End Web Developer Course.",
    "skills": [
        "Microsoft Office", " google analytics", " digital marketing", " email marketing", " content marketing"
    ],
    "bioPic": "images/headshot.jpg"
};

var education = {
    "schools": [
  { 
    "name": "Rutgers University",
    "location": "New Brunswick, NJ",
    "degree": "B.A",
    "major": "Human Resource Management",
    "datesAttended": "September 2010 - May 2013",
    "url": "www.rutgers.edu"
  },
  {
    "name": "Brookdale Community College",
    "location": "Lincroft, NJ",
    "degree": "AA Education",
    "major": "Education",
    "datesAttended": "June 2009 - May 2010",
    "url": "www.brookdalecc.edu"    
    }
  ],
  "onlineCourses": [
  {
    "title": "Front End Web Developer",
    "school": "Udacity",
    "completed": "October 2016 - October 2017",
    "url": "www.udacity.com"
    }
  ]
};

var work = {
  "jobs": [
  {
    "employer": "IQPC",
    "location": "New York, NY",
    "title": "Marketing Manager",
    "datesWorked": "January 2016 - Present",
    "description": "Executed marketing campaigns for B2B conferences and events across North America." 
  },
  {
    "employer": "Junior Achievement of NJ",
    "location": "Princeton, NJ",
    "title": "Development and Marketing Manager",
    "datesWorked": "June 2013 - December 2016",
    "description": "Acted as lead content marketer and graphic designer for all marketing collateral as well as oversaw the NJ Chapter brand strategy."
    }
  ]
};

var projects = {
    "projects": [
  {
    "title": "Online Portfolio - Udacity's Front-End Web Developer Nanodegree",
    "datesWorked": "July 2017",
    "description": "Drafted an online portfolio as one of the projects of Udacity's Fron-End Web Developer Nanodegree",
    "images": ["images/onlineportfoliocat.jpg"],
    "url": "www.udacity.com"
  }
  ]
};

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").prepend(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var biopic = bio.bioPic;
var formattedBiopic = HTMLbioPic.replace("%data%", biopic);
$("#header").append(formattedBiopic);

var welcomeMsg = bio.welcomeMsg;
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", welcomeMsg);
$("#header").append(formattedwelcomeMsg);

var skills = bio.skills;
if(bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkills = HTMLskills.replace("%data%", skills [0]);

    var formattedSkills = HTMLskills.replace("%data%", skills [1]);
    $("#skills").append(formattedSkills);

    var formattedSkills = HTMLskills.replace("%data%", skills [2]);
    $("#skills").append(formattedSkills);

    var formattedSkills = HTMLskills.replace("%data%", skills [3]);
    $("#skills").append(formattedSkills);

    var formattedSkills = HTMLskills.replace("%data%", skills [4]);
    $("#skills").append(formattedSkills);
};

education.display = function() {
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {
        for(i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);

            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            $(".education-entry:last").append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);  
            $(".education-entry:last").append(formattedSchoolLocation);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(i in education.onlineCourses) {             
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
                $(".education-entry:last").append(formattedOnlineDates);

                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }
        
    }
}

education.display();

function displayWork() {

    if(work.jobs.length > 0) {
    
        $("#workExperience").append(HTMLworkStart);

        for(i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

}

displayWork();

projects.display = function() {
    if(projects.projects.length > 0) {
        for(i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
             $(".project-entry:last").append(formattedProjectDates);           
           
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedProjectDescription);

            for(img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }
            

        }
    }
}

projects.display();

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#footerContacts").prepend(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#footerContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#footerContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#footerContacts").append(formattedTwitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#footerContacts").append(formattedLocation);

//tracking clicks on the page:
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

//international button example:
function inName(name) {
    name = name.trim().split (" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).tolowerCase();

    return name[0] +" "+name[1];

    $("#main").append(internationalizeButton);
};

// you want to see a map? here's a map:
$("#mapDiv").append(googleMap);

