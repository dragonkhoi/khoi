document.body.onload = createPage;

var circles = [];
var infoBoxes = [];

function circle(radius, centerX, centerY, image, name, category){
  this.radius = radius;
  this.centerX = centerX;
  this.centerY = centerY;
  this.image = image;
  this.name = name;
  this.category = category;
}

function infoBox(section, title, subtitle, content, centerBottomX, centerBottomY){
  this.section = section; // Experience, awards, education
  this.title = title; // Director of Social Media, Spanish Vocabulary
  this.subtitle = subtitle; // BoostVC, Unity for Google Cardboard
  this.content = content; // "Planned and executed..."
  this.centerBottomX = centerBottomX;
  this.centerBottomY = centerBottomY;
}

function createInfoBox(section, title, subtitle, content, x, y){
  var temp = new infoBox(section, title, subtitle, content, x, y);
  infoBoxes.push(temp);
}

function createCircle(size, x, y, image, name, category){
  var temp = new circle(size, x, y, image, name, category);
  circles.push(temp);
}

function createPage(){

  createCircle(175, 270, 360, "Khoi Le", "KhoiLe", "#header");
  createCircle(100, 110, 190, "KhoiHeadshot.jpg", "Headshot", "#header");
  createCircle(40, 80, 510, "stanford_white.png", "Stanford", "#educationDiv");
  createInfoBox("Education", "Stanford University", "Class of 2020", "B.S Candidate in Symbolic Systems", 380, 510);

  // createCircle(60, 320, 320, "stanford_white.png", "Stanford", "#educationDiv");
  // createCircle(30, 355, 420, "mitty_white.png", "Mitty", "#educationDiv");

  //Experience
  createCircle(40, 390, 150, "BoostPowerLogo_white.png", "BoostVC", "#experienceDiv");
  createCircle(40, 475, 215, "Lunasphere_white.png", "Lunasphere", "#experienceDiv");
  createCircle(40, 515, 310, "VHIL_white.png", "VHIL", "#experienceDiv");

  //Skills
  createCircle(40, 510, 410, "coding_white.png", "Coding", "#skillsDiv");
  // createCircle(40, 820, 310, "virtualreality_white.png", "VirtualReality", "#skillsDiv");
  createCircle(40, 470, 510, "marketing_white.png", "Marketing", "#skillsDiv");
  // createCircle(30, 820, 150, "unity.png", "Unity");
  // createCircle(30, 890, 310, "java.png", "Java");
  // createCircle(20, 890, 150, "3dsmax.png", "3DSMax");
  // createCircle(20, 940, 260, "Angular.png", "AngularJS");

  //Projects
  createCircle(40, 380, 580, "cardboard_white.png", "MemVRy", "#projectsDiv");
  createCircle(40, 270, 600, "gearVR_white.png", "Watchman", "#projectsDiv");
  // createCircle(40, 860, 490, "lightbulb_white.png", "Mailbox", "#projectsDiv");

  //Awards
  createCircle(40, 160, 580, "awards_white.png", "Awards", "#awardsDiv");
  // createCircle(30, 505, 585, "fbla_white.png", "FBLA Marketing", "#awardsDiv");
  // createCircle(30, 435, 545, "genesis_white.png", "AdMad", "#awardsDiv");
  // createCircle(30, 380, 490, "rotary_white.png", "RotaryELC", "#awardsDiv");

  //Languages
  // createCircle(20, 470, 550, "spanish_white.png", "Spanish", "#languagesDiv");
  // createCircle(30, 410, 520, "english_white.png", "English", "#languagesDiv");
  // createCircle(15, 385, 470, "vietnamese_white.png", "Vietnamese", "#languagesDiv");

  for(var i = 0; i < circles.length; i++){
    console.log(circles[i].name);

    var newCircle = document.createElement("a");
    // newCircle.setAttribute("href", "#experience")
    newCircle.setAttribute("id", circles[i].name);
    newCircle.setAttribute("class", "circleClass");

    // newCircle.setAttribute("")
    //console.log(newCircle.class);
    console.log(circles[i].category);
    newCircle.setAttribute("href", circles[i].category);
    var topSide = circles[i].centerY - circles[i].radius;
    newCircle.style.top = topSide + 'px';
    var leftSide = circles[i].centerX - circles[i].radius;
    newCircle.style.left = leftSide + 'px';

    var size = circles[i].radius * 2;
    newCircle.style.height = size + 'px';
    newCircle.style.width = size + 'px';

    if(circles[i].image.includes('.')){
      // create image using given file
      // var imageObject = document.createElement("img");
      // imageObject.setAttribute("src", "images/"+circles[i].image);
      // newCircle.appendChild(imageObject);
      newCircle.style.backgroundImage = "url('images/" + circles[i].image + "')";
    }
    else{
      // Text in this circle
      var textObject = document.createElement("h1");
      var textContent = document.createTextNode(circles[i].image);
      textObject.appendChild(textContent);
      newCircle.appendChild(textObject);
      newCircle.style.textDecoration = "none";
      newCircle.style.color = "white";
    }

    // TODO implement onmouseenter and onmouseleave
    // newCircle.addEventListener("mouseenter", function(){ mouseEnter(newCircle); });
    // newCircle.addEventListener("mouseleave", function(){ mouseOut(newCircle); });
    var mainDiv = document.getElementById("boxForCircles");
    mainDiv.appendChild(newCircle);
  }
}

$(document).ready(function(){
  console.log("Jquery is working");
  var currentName = "";
  function showInfoBox(name){
    console.log("showInfoBox called");
    if(name == "Headshot"){
      name = "KhoiLe";
    }
    if(currentName == name){
      return;
    }
    currentName = name;
    var workplace = "";
    var title = "";
    var description = "";
    $("#title").css("display", "none");
    $("#workplace").css("display", "none");
    $("#description").css("display", "none");

    if(name == "BoostVC"){
      workplace = "Boost VC";
      title = "Director of Social Media";
      description = `Ran <a href='files/boostvc_social_media.pdf' target='new'>social media campaigns</a> on FB and Twitter, creating <a href='https://www.youtube.com/watch?v=zjhHmXxztME' target='new'> novel engaging content </a> and doubling the
        social media engagement. Started, ran, and edited
        the <a href='https://itunes.apple.com/us/podcast/the-boost-vc-podcast/id1137292159?mt=2' target='new'>Boost VC Podcast </a>.
        Did international networking and deal sourcing while developing investor relations
        in the U.S and Canada.`;
    }
    if(name == "Lunasphere"){
      workplace = "Lunasphere";
      title = "Co-founder and CEO";
      description = `<a href="https://lunaspheretriton.firebaseapp.com/html/lunasphere.html" target="new">Lunasphere</a>
         allows museums to easily, cheaply,
        and quickly push informative content to their patrons.
        Developed the backend using Firebase and javascript, and frontend
        using AngularJS, managed the execution
        and team, made sales. Our first client is the Triton Museum of Art,
        check it out <a href="https://lunaspheretriton.firebaseapp.com/" target="new">here. </a>`;
    }
    if(name == "VHIL"){
      workplace = "Stanford Virtual Human Interaction Lab";
      title = "Lab Programmer";
      description = `Used Python and the Vizard
        engine to design experiences
        for HTC Vive. Created 3D models
        and animations in 3DS Max. Coded
        several experiences including
        Stanford's Ocean Acidification Experience
        for Oculus.`;
    }
    if(name == "Coding"){
      workplace = "Programming";
      title = "Skills";
      description = `C++, Python, Java, Javascript, HTML5, CSS3, Unity, Vizard, 3DS Max, VR Dev`;
    }
    if(name == "Marketing"){
      workplace = "Marketing";
      title = "Skills";
      description = "Social Media, Presentations, Video Production";
    }
    if(name == "MemVRy"){
      workplace = "MemVRy";
      title = "Project";
      description = "Did stuff";
    }
    if(name == "Watchman"){
      workplace = "The Watchman";
      title = "Project";
      description = "Did stuff";
    }
    if(name == "Stanford"){
      workplace = "Stanford University '20 B.S Candidate in Symbolic Systems";
      title = "Education";
      description = "Relevant Coursework: CS106X - Programming Abstractions in C++";
    }
    if(name == "Awards"){
      workplace = "";
      title = "Awards";
      description = "Did stuff";
    }
    if(name == "KhoiLe"){
      workplace = "Software Engineer - Web Developer - VR Developer - Entrepreneur";
      title = "Khoi Le";
      description = "I am cool.";
    }
    $("#title").text(title);
    $("#workplace").text(workplace);
    $("#description").html(description);
    $("#title").fadeIn(600);
    $("#workplace").fadeIn(600);
    $("#description").fadeIn(600);

    // $('html, body').stop().animate({
    //   'scrollTop': $target.offset().top
    // }, 800, 'swing');
  }

  $(".circleClass").mouseenter(function(){
    var size = 25;
    console.log("mouse enter");
    var thisID = $(this).attr('id');
    var thisCircle;
    var thisImage;
    for(var i = 0; i < circles.length; i++){
      if(thisID == circles[i].name){
        thisCircle = circles[i];
        thisImage = thisCircle.image;
        break;
      }
    }
    thisImage = thisImage.substring(0, thisImage.indexOf('_'));
    console.log(thisImage);
    showInfoBox(thisCircle.name);
    if(thisCircle.name == "KhoiLe" || thisCircle.name == "Headshot"){
      return;
    }

    $(this).css({"height": thisCircle.radius*2 + "px", "width": thisCircle.radius*2 + "px"});
    $(this).stop().animate({
      //left: '500px',
      height: "+=" + size,
      width: "+=" + size,
      top: "-=" + size/2,
      left: "-=" + size/2,
      opacity: 0
    }, 200, function(){
      $(this).css({
        'background-image': "url('images/" + thisImage + ".png')"
      }).animate({opacity: 1},{duration:200});
    });
  });
  $(".circleClass").mouseleave(function(){
    var size = 25;
    var thisID = $(this).attr('id');
    var thisCircle;
    var thisImage;
    for(var i = 0; i < circles.length; i++){
      if(thisID == circles[i].name){
        thisCircle = circles[i];
        thisImage = thisCircle.image;
        break;
      }
    }
    if(thisCircle.name == "KhoiLe" || thisCircle.name == "Headshot"){
      return;
    }
    console.log(thisImage);
    $(this).stop().animate({
      height: thisCircle.radius*2,
      width: thisCircle.radius*2,
      left: thisCircle.centerX - thisCircle.radius,
      top: thisCircle.centerY - thisCircle.radius,
      opacity: 0
    }, 100, function(){
      $(this).css({
        'background-image': "url('images/" + thisImage + "')"
      }).animate({opacity: 1},{duration:200});
    });
  });
  $(".circleClass").click(function(e) {
    console.log("click");
    e.preventDefault();

    var target = this.hash;
    console.log(target);
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 800, 'swing');
  });
});
