var bio = {
    "name" : "Todd Henson",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "(657) 555-1212",
        "email" : "todd@hensonlabs.com",
        "github" : "",
        "twitter" : "",
        "location" : "Corona, CA, USA"
    },
    "welcomeMessage" : "Welcome!",
    "skills" : ["programming","business strategy","managing","educating"],
    "biopic" : "https://s3-us-west-1.amazonaws.com/udacity-content/degrees/catalog-images/nd001.png",
    "display" : function () {

            var formattedName = HTMLheaderName.replace("%data%", bio.name);
            var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
            var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
            var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

            $("#header").append(formattedName);
            $("#header").append(formattedRole);
            $("#header").append(HTMLcontactStart + formattedMobile + formattedEmail + HTMLcontactEnd);
            $("#header").append(formattedPic);
            $("#header").append(formattedWelcomeMessage);

            if (bio.skills.length > 0) {
                $("#header").append(HTMLskillsStart);

                for (i in bio.skills) {
                    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                    $("#skills-h3").append(formattedSkill);
                }
            }
        }
};

var education = {
    "schools" : [
        {
            "name" : "National University",
            "location" : "San Diego, CA, USA",
            "degree" : "Bacher's of Arts",
            "majors" : ["Business Adminstration", "Finance"],
            "dates" : 2003,
            "url" : "www.nu.com"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "JavaScript Basics",
            "school": "Udacity",
            "date" : 2016,
            "url" : "https://www.udacity.com/course/javascript-basics--ud804"
        }
    ],
    "display" : function() {
        
        if (education.schools.length > 0 ) {
        
            $("#education").append(HTMLschoolStart);
        
            for (i in education.schools) {

                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
                var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

                var majors = "";            
                for (j in education.schools[i].majors) {
                    majors = majors + education.schools[i].majors[j] + ", ";
                }
                var formattedMajor = HTMLschoolMajor.replace("%data%", majors.slice(0,(majors.length-2)));

                $(".education-entry:last").append(formattedSchoolName + formattedDegree);
                $(".education-entry:last").append(formattedDates);
                $(".education-entry:last").append(formattedLocation);
                $(".education-entry:last").append(formattedMajor);
            }
        }
        
        if (education.onlineCourses.length > 0 ) {
            
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);

            for (i in education.onlineCourses) {

                var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].school);
                var formattedSchoolName = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].title);
                var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
                var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedTitle + formattedSchoolName);
                $(".education-entry:last").append(formattedDate);
                $(".education-entry:last").append(formattedURL);
            }
        }
    }
};

var work = {
    "jobs" : [
        {
            "employer" : "Independent/Self-Employed",
            "title" : "Junior Software Developer",
            "location" : "Seoul",
            "dates" : "Dec 2014 to Present",
            "description" : "The most fantastic job description ever conceived"
        },
        {
            "employer" : "Chung-Ang University",
            "title" : "Lecturer",
            "location" : "Seoul, South Korea",
            "dates" : "Feb 2011 to Feb 2013",
            "description" : "Another of the most fantastic job descriptions ever conceived"
        }
    ],
    "display" : function() {
        
        if (work.jobs.length > 0 ) {
        
            $("#workExperience").append(HTMLworkStart);
        
            for (i in work.jobs) {

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(formattedDates + formattedLocation);
            $(".work-entry:last").append(formattedDescription);
            }
        }
    }
};


var projects = {
    "projects": [
        {
            "title" : "", 
            "dates": "",
            "description" : "",
            "images" : []
        }
    ],
    "display" : function() {
          
    }
};

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);