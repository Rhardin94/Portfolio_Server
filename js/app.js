//Hides about me content until button click
    $(".wrapper").hide();
    //Hides contact me content until button click
    $(".contactDiv").hide();
//Waits for HTML to load before running anything
$(document).ready(function() {
    //Hiding project divs at start to cycle through later
    $(".GifTastic").hide();
    $(".Office-Trivia").hide();
    //Assigning variables to each about div and hiding it for animation later
    const aboutMe = $(".aboutMe");
    aboutMe.hide();
    const onlineInfo = $(".onlineInfo");
    onlineInfo.hide();
    const portfolio = $(".portfolio");
    portfolio.hide();
    //On click that migrates HTML to about me content by hiding introDiv, showing about div (wrapper) and setting timeouts for animation
    $(".aboutBtn").on("click", function() {
        $(".introDiv").hide();
        $(".wrapper").addClass("animated fadeIn slow");
        $(".wrapper").show();
        setTimeout(aboutDiv, 1000);
        setTimeout(contactDiv, 3000);
        setTimeout(portfolioDiv, 2000);
    });
    function aboutDiv() {
        aboutMe.addClass("animated fadeInRight slow");
        aboutMe.show();
    };
    function contactDiv() {
        onlineInfo.addClass("animated fadeInUp slow");
        onlineInfo.show()
    };
    setTimeout(projectSwap, 6000);  
    function portfolioDiv() {
        portfolio.addClass("animated fadeInRight slow");
        portfolio.show();
    };
    //Function that cycles through GitHub projects
    function projectSwap() {
        setTimeout(function() {
            $(".Nerd-Lator").hide();
            $(".GifTastic").show();
        }, 4000);
        setTimeout(function() {
            $(".GifTastic").hide();
            $(".Office-Trivia").show();
        }, 12000);
        setTimeout(function() {
            $(".Office-Trivia").hide();
            $(".Nerd-Lator").show();
        }, 20000);
        setTimeout(projectSwap, 28000);
    };
    //On-click that migrates HTML to contact form
    $(".contactBtn").on("click", function() {
        $(".wrapper").hide();
        $(".contactDiv").addClass("animated fadeInRight slow");
        $(".contactDiv").show();
    });
    //On-click that will eventually submit info to me and also navigates back to homepage
    $(".submitBtn").on("click", function(event) {
        //Preventing button from refreshing page
        event.preventDefault();
        //Something magic happens that sends me this info
        //At the moment, it clears the input fields and returns user to about page
        $(".contactDiv").hide();
        $(".nameInput").val("");
        $(".emailInput").val("");
        $(".messageInput").val("");
        $(".wrapper").show();
    })
    //On-Click to navigate away from contact page
    $(".homeBtn").on("click", function(event) {
        //Preventing button from refreshing page in-case it tries to.
        event.preventDefault();
        //Clears the input fields and returns user to about page
        $(".contactDiv").hide();
        $(".nameInput").val("");
        $(".emailInput").val("");
        $(".messageInput").val("");
        $(".wrapper").show();
    });
});
