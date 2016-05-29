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
    "skills" : ["generalist","programmer","business strategist","marketer","educator"],
    "bioPicURL" : "https://s3-us-west-1.amazonaws.com/udacity-content/degrees/catalog-images/nd001.png",
    "display" : function () {

            var formattedName = HTMLheaderName.replace("%data%", bio.name);
            var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
            var formattedPic = HTMLbioPic.replace("%data%", bio.bioPicURL);
            var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

            $("#header").append(formattedName);
            $("#header").append(formattedRole);
            $("#header").append(formattedMobile + formattedEmail);
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

var work = {
    "jobs" : [
        {
            "employer" : "Independent/Self-Employed",
            "title" : "Junior Software Developer",
            "location" : "Seoul",
            "dates" : "Dec 2014 to Present",
            "description" : "Job description"
        },
        {
            "employer" : "Chung-Ang University",
            "title" : "Lecturer",
            "location" : "Seoul, South Korea",
            "dates" : "Feb 2011 to Feb 2013",
            "description" : "Job description"
        }
    ]
};

var education = {
    "formal" : [
        {
            "schoolName" : "National University",
            "location" : "San Diego, CA, USA",
            "degree" : "Bacher's of Arts",
            "major" : "Business Adminstration",
            "dateOfGraduation" : "2003"
        }
    ],
    "informal" : [
        {
            "Coursera": [
                {
                    "institutionName" : "Duke University",
                    "courseName": "Java Design Patterns"
                },
                {
                    "institutionName" : "University of Maryland",
                    "courseName": "Object-Oriented Programming"
                }
            ],
            "Udacity": [
                {
                    "courseName": "Develop Android Applications"
                },
                {
                    "courseName": "JavaScript Basics"
                }
            ]
        }
    ]
};

var projects = {};

function displayWork() {
    for (i in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

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

education.display = function() {
    for (i in education.formal) {

        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.formal[i].schoolName);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.formal[i].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.formal[i].dateOfGraduation);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.formal[i].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.formal[i].major);

        $(".education-entry:last").append(formattedSchoolName + formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
    }
};

function displayProjects() {
}

bio.display();
displayWork();
education.display();
displayProjects;

$("#mapDiv").append(googleMap);