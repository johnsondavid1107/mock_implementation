$(document).ready(function () {

    var demoArray = [{
        id: "companyLogo",
        animation: "fadeTo"
    },
    {
        id: "customerRequirements",
        animation: "fadeTo"
    },
    {
        id: "stakeHolders",
        animation: "fadeTo"
    },
    {
        id: "engagementStrategy",
        animation: "fadeTo"
    },
    {
        id: "implementationPlan",
        animation: "fadeTo"
    },
    {
        id: "actionItems",
        animation: "fadeTo"
    },
    {
        id: "timelines",
        animation: "fadeTo"
    },
    {
        id: "goForwardPlan",
        animation: "fadeTo"
    },
    ];

    var demoIndex = 0;
    $(document).on("keydown", function (e) {

        if (demoIndex + 1 < demoArray.length) {

            //Go forward in slideshow
            if (e.code === "ArrowRight") {
                $("#" + demoArray[demoIndex]["id"]).fadeOut("slow", function () {
                    demoIndex++;
                  
                    console.log("Demo Index is  " + demoIndex)
                    $("#" + demoArray[demoIndex]["id"]).fadeIn("slow", function () {

                    });
                });

                //Go backwards in slideshow
            }
        } else {
            console.log("End of Slideshow")
        }

        if (demoIndex <= demoArray.length && demoIndex !== 0) {
            if (e.code === "ArrowLeft") {
                $("#" + demoArray[demoIndex]["id"]).fadeOut("slow", function () {
                    demoIndex--;
                  
                    console.log("Demo Index is  " + demoIndex)
                    $("#" + demoArray[demoIndex]["id"]).fadeIn("slow", function () {

                    });
                });
            }
        } else {
            console.log("Begining of Slideshow, cant go back")
        }
    })



})