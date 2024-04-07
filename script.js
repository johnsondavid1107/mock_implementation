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
        animation: "fadeTo",
        subSlide: [{
            id: "demo",
            animation: 'swipeTo'

        }]
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
    {
        id: "Fin",
        animation: "fadeTo"
    },
    ];

    var demoIndex = 0;
    var subSlideIndex = 0
    var inTransition = false;


    $(document).on("keydown", function (e) {

        if (inTransition) {
            return
        }

        if (demoIndex + 1 < demoArray.length && !inTransition) {
            inTransition = true;

            //Go forward in slideshow
            if (e.code === "ArrowRight") {
                if (demoArray[demoIndex]["subSlide"] && subSlideIndex < demoArray[demoIndex]["subSlide"].length) {

                    $("#content").css("position", "relative");
                    $("#content").animate({
                        "right": "2000px"
                    }, function () {
                        $("#content").hide()
                        $("#demo").show(function () {
                            $("#demo").animate({
                                "left": "-2000px"
                            });
                        });

                    });
                    subSlideIndex++;
                    inTransition = false

                    return
                } else {
                    console.log("no slides to show")
                }

                $("#" + demoArray[demoIndex]["id"]).fadeOut("slow", function () {
                    inTransition = true;
                    demoIndex++;

                    console.log("Demo Index is  " + demoIndex)

                    $("#" + demoArray[demoIndex]["id"]).fadeIn("slow", function () {
                        inTransition = false;
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
                    inTransition = true
                    demoIndex--;

                    console.log("Demo Index is  " + demoIndex)
                    $("#" + demoArray[demoIndex]["id"]).fadeIn("slow", function () {
                        inTransition = false
                    });
                });
            }
        } else {
            console.log("Begining of Slideshow, cant go back")
        }
    })



})