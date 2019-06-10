//Waits for HTML to load before running anything
$(document).ready(function () {
  //Hides about me content until button click
  $(".wrapper").hide();
  //Assigning variables to each about div and hiding it for animation later
  const aboutMe = $(".aboutMe");
  aboutMe.hide();
  const portfolio = $(".portfolio");
  portfolio.hide();
  const footer = $("footer");
  footer.hide();
  //On click that migrates HTML to about me content by hiding introDiv, showing about div (wrapper) and setting timeouts for animation
    $(".wrapper").addClass("animated fadeIn slow");
    $(".wrapper").show();
    setTimeout(aboutDiv, 1000);
    setTimeout(portfolioDiv, 2000);
    setTimeout(footerMagic, 3000);
  function aboutDiv() {
    aboutMe.addClass("animated fadeInRight slow");
    aboutMe.show();
  };
  setTimeout(projectSwap, 2000);
  function portfolioDiv() {
    portfolio.addClass("animated fadeInRight slow");
    portfolio.show();
  };
  function footerMagic() {
    footer.addClass("animated fadeInUp slow");
    footer.show();
  }
  //Function that cycles through GitHub projects
  function projectSwap() {
    //const tempArray = [];
    const pastProjects = [
      clickEmDead = {
        image: $("<img src='assets/images/Home.jpg'>"),
        name: $("<h2>").text("ClickEmDead"),
        deployed: $("<a href='https://rhardin94.github.io/ClickEmDead/' target='_blank'>").html("<h3> Link to Deployed Site </h3>"),
        repo: $("<a href='https://github.com/Rhardin94/ClickEmDead' target='_blank'>").html("<h3> Link to Repo </h3>")
      },
      PipPip_Newsio = {
        image: $("<img src='assets/images/homepage.jpg'>"),
        name: $("<h2>").text("PipPip Newsio"),
        deployed: $("<a href='https://dry-mesa-18962.herokuapp.com/' target='_blank'>").html("<h3> Link to Deployed Site </h3>"),
        repo: $("<a href='https://github.com/Rhardin94/PipPip_Newsio/tree/master' target='_blank'>").html("<h3> Link to Repo </h3>")
      },
      moviews = {
        image: $("<img src='assets/images/home_page.png'>"),
        name: $("<h2>").text("Moviews!"),
        deployed: $("<a href='https://moviews-team5.herokuapp.com/' target='_blank'>").html("<h3> Link to Deployed Site! </h3>"),
        repo: $("<a href='https://github.com/Rhardin94/Moviews' target='_blank'>").html("<h3> Link to Repo! </h3>")
      },
      burgerMeister = {
        image: $("<img src='assets/images/burger.png'>"),
        name: $("<h2>").text("Burger Meister!"),
        deployed: $("<a href='https://stark-forest-59222.herokuapp.com/' target='_blank'>").html("<h3> Link to Deployed Site! </h3>"),
        repo: $("<a href='https://github.com/Rhardin94/Burger_Meister' target='_blank'>").html("<h3> Link to Repo! </h3>")
      },
      bamazonApp = {
        image: $("<img src='assets/images/bamazon.jpg'>"),
        name: $("<h2>").text("Bamazon!"),
        deployed: $("<a href='https://drive.google.com/file/d/1Y4ZtCnFz6rCUDe69aqrM64HyLaljF393/view?usp=sharing' target='_blank'>").html("<h3> Link to Demo! </h3>"),
        repo: $("<a href='https://github.com/Rhardin94/Bamazon_NOT_Amazon' target='_blank'>").html("<h3> Link to Repo! </h3>")
      },
      liriApp = {
        image: $("<img src='assets/images/liri.jpg'>"),
        name: $("<h2>").text("L.I.R.I!"),
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
    //Loops through projects array and displays each one inside portfolioDiv
    for (let i = 0; i < pastProjects.length; i++) {
      let displayedProject = pastProjects[i];
      const currentProject = $("<div>").attr("class", "animated fadeIn slow");
      $(currentProject).append(displayedProject.image);
      $(currentProject).append(displayedProject.name);
      $(currentProject).append(displayedProject.deployed);
      $(currentProject).append(displayedProject.repo);
      $(".currentProject").append(currentProject);
    }
  };
  //On-click that migrates HTML to contact form
  $(".contactBtn").on("click", function () {
    $(".wrapper").hide();
    $(".contactDiv").addClass("animated fadeInRight slow");
    $(".header").hide();
    $(".contactDiv").show();
    $(".header").addClass("animated fadeIn slow");
    setTimeout(function () {
      $(".header").show();
    }, 2000);
    $("footer").hide();
  });
  //On-click that will eventually submit info to me and also navigates back to homepage
  $(".submitBtn").on("click", function (event) {
    //Preventing button from refreshing page
    // event.preventDefault();
    if ((!$(".subjectInput").val()) || (!$(".emailInput").val()) || (!$(".messageInput").val())) {
      $("label").append(" (You didn't fill in all the required fields!)");
      return false;
    };
    //Something magic happens that sends me this info
    //At the moment, it clears the input fields and returns user to about page
    setTimeout(function () {
      $(".subjectInput").val("");
      $(".emailInput").val("");
      $(".messageInput").val("");
    }, 3000);
  });
});