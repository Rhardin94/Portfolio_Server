//Waits for HTML to load before running anything
$(document).ready(function () {
    //Hiding project divs at start to cycle through later
    $(".GifTastic").hide();
    $(".Office-Trivia").hide();
    //Hides about me content until button click
    $(".wrapper").hide();
    //Hides contact me content until button click
    $(".contactDiv").hide();
    //Assigning variables to each about div and hiding it for animation later
    const aboutMe = $(".aboutMe");
    aboutMe.hide();
    const onlineInfo = $(".onlineInfo");
    onlineInfo.hide();
    const portfolio = $(".portfolio");
    portfolio.hide();
    //On click that migrates HTML to about me content by hiding introDiv, showing about div (wrapper) and setting timeouts for animation
    $(".aboutBtn").on("click", function () {
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
    setTimeout(projectSwap, 3000);

    function portfolioDiv() {
        portfolio.addClass("animated fadeInRight slow");
        portfolio.show();
    };
    //Function that cycles through GitHub projects
    function projectSwap() {
        const tempArray = [];
        const pastProjects = [
            liriApp = {
                image: $("<img src='assets/images/liri.jpg'>"),
                name: $("<h2>").text("Liri!"),
                deployed: $("<a href='https://drive.google.com/file/d/1TDuus6k-dMUWgKzbpJ6GsKnQ-r6s4B18/view' target='_blank'>").html("<h3> Link to Demo! </h3>"),
                repo: $("<a href='https://github.com/Rhardin94/Liri-Node-App' target='_blank'>").html("<h3> Link to Repo! </h3>")
            },
            nerdLator = {
                image: $("<img src='assets/images/Nerd-lator.png'>"),
                name: $("<h2>").text("Nerd-Lator!"),
                deployed: $("<a href='https://rhardin94.github.io/Nerd-Lator/' target='_blank'>").html("<h3> Link to Deployed Site! </h3>"),
                repo: $("<a href='https://github.com/Rhardin94/Nerd-Lator' target='_blank'>").html("<h3> Link to Repo! </h3>")
            },
            gifTastic = {
                image: $("<img src='assets/images/gif.png'>"),
                name: $("<h2>").text("GifTastic!"),
                deployed: $("<a href='https://rhardin94.github.io/GifTastic/' target='_blank'>").html("<h3> Link to Deployed Site! </h3>"),
                repo: $("<a href='https://github.com/Rhardin94/GifTastic' target='_blank'>").html("<h3> Link to Repo! </h3>")
            },
            officeTrivia = {
                image: $("<img src='assets/images/office.png'>"),
                name: $("<h2>").text("Office Trivia!"),
                deployed: $("<a href='https://rhardin94.github.io/Office-Trivia/' target='_blank'>").html("<h3> Link to Deployed Site!"),
                repo: $("<a href='https://github.com/Rhardin94/Office-Trivia' target='_blank'>").html("<h3> Link to Repo! </h3>")
            }
        ];
        let index = Math.floor(Math.random() * pastProjects.length);
        let displayedProject = pastProjects[index]
        tempArray.push(displayedProject);
        pastProjects.splice(index, 1);
        const currentProject = $("<div>").attr("class", "animated fadeInRight slow");
        $(currentProject).append(displayedProject.image);
        $(currentProject).append(displayedProject.name);
        $(currentProject).append(displayedProject.deployed);
        $(currentProject).append(displayedProject.repo);
        $(".currentProject").html(currentProject);
        setTimeout(projectSwap, 8000);
    };
    //On-click that migrates HTML to contact form
    $(".contactBtn").on("click", function () {
        $(".wrapper").hide();
        $(".contactDiv").addClass("animated fadeInRight slow");
        $(".contactDiv").show();
    });
    //On-click that will eventually submit info to me and also navigates back to homepage
    $(".submitBtn").on("click", function (event) {
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
    $(".homeBtn").on("click", function (event) {
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