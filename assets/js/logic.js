$(document).ready(function(){

    var section = "About";

    var aboutContent = $("<div class='info'><h1 class = 'tab-title' style = 'color:rgb(222, 223, 161);'>About</h1><img  id = 'portrait' src = 'assets/images/self-portrait.jpg'><div><a class = 'profile-link' target = '_blank' href = 'https://github.com/HunterWilkins'>GitHub Profile</a> <a target = '_blank' class = 'profile-link' href = 'https://www.linkedin.com/in/hunter-wilkins-591047117/'>LinkedIn Profile</a><p>Hunter Wilkins is an artist, singer, musician, writer, and programmer. " +
                        "He graduated from Trinity University in May of 2018 with a Bachelor's in Art and uses his knowledge"+
                        " of color theory and design to enhance his front-end programming. "+
                        "His dream is to create immersive, memorable, and intriguing interactive programs that make use of (and further develop) his skillsets.</p><div>" + 
                        "</div>");
    
    var portfolioContent = $("<div class = 'gallery'></div>");

    var galleryArray = [
        {
            name: "Artiodactyla-Thumbnail.png", 
            genre: "concept",
            large: "Artiodactyla of the Primordial Winter.jpg",
            desc:"Near the beginning of time, a primordial deer wanders the sunless world." 
        },
        {
            name: "Bucketbot-Thumbnail.png",
            genre: "romance",
            large: "Bucketbot&#39s Discovery.jpg",
            desc:"A recently-married couple takes a moment to remind each other of their love, drawing the gaze of a longing robot."
        },

        {
            name: "Opossum-Thumbnail.png",
            genre: "misc",
            large: "Mason&#39s Opossum Shirt.png",
            desc: "Mason hates Opossums, so, I made him this shirt."
        },

        {
            name:"Lilia-Thumbnail.png",
            genre: "concept",
            large: "Lilia - Goddess of Magic.png",
            desc: "A notorious (and powerful) trickster, Lilia could demolish the world if she so desired. Mortals are thankful she's slow to boredom."
        },

        {
            name: "Mandolineer-Thumbnail.png",
            genre: "misc",
            large: "The Mandolineer.jpg",
            desc: " "
        },

        {
            name: "Snake-Thumbnail.png",
            genre: "misc",
            large: "The Cereal Snake.png",
            desc: "HiI'mtheCerealSnakeGoodbye!"
        },
        {
            name:"Slime-Thumbnail.png",
            genre:"romance",
            large: "The Lonely Slime.jpg",
            desc: "As the immortal slime grows in years, it becomes more complex. Eventually, its mind becomes indistinguishable from a human's, and it learns to long for the same things we do."
        },
        {
            name: "Iliolos-Thumbnail.png",
            genre: "concept",
            large: "Iliolis - The Trapped Goddess.jpg",
            desc: "A goddess, trapped within an ocean of liquid air, reaches eternally for the one thing that could make her omnipotent."
        },

        {
            name:"Ugh-Thumbnail.jpg",
            genre: "romance",
            large:"Ugh.jpg",
            desc: "Hostage Situation"
        },
        {
            name:"It Beats Debt-Thumbnail.jpg",
            genre: "romance",
            large:"It Beats Debt.jpg",
            desc:"Hostage Situation"
        },
        {
            name:"Awkward-Thumbnail.jpg",
            genre: "romance",
            large: "Awkward.jpg",
            desc: "Hostage Situation: \"I hope she's not scared...\" / \"I hope he's not crazy...\""
        },
        {
            name:"A Couple Stories-Thumbnail.jpg",
            genre: "romance",
            large: "A Couple Stories.jpg",
            desc:"Hostage Situation: Nothing brings two outcasts together more than their pasts."
        },
        {
            name: "Planning-Thumbnail.jpg",
            genre:"romance",
            large: "Planning.jpg",
            desc:"Hostage Situation"
        },
        {
            name:"Heist-Thumbnail.jpg",
            genre:"romance",
            large:"Heist.jpg",
            desc:"Hostage Situation"
        },
        {
            name:"Triumph-Thumbnail.jpg",
            genre:"romance",
            large:"Triumph.jpg",
            desc:"Hostage Situation: \"Three square meals a day and housing with your sweetheart? Sounds like a triumph to me, right?\""
        },

        {
            name: "Mandolia-Thumbnail.jpg",
            genre:"misc",
            large:"Mandolia.jpg",
            desc:"A birthday present for my Dad, who plays the mandolin."
        },
        {
            name:"A Complementary Couple-Thumbnail.jpg",
            genre:"romance",
            large:"A Complementary Couple.jpg",
            desc:"Complementary colors, while the furthest apart on the color wheel, each make the other brighter when paired together."
        },
        {
            name:"Ashen Valley-Thumbnail.jpg",
            genre:"concept",
            large:"Ashen Valley.jpg",
            desc: "...once you traverse the Gilded Gate, you'll enter the Golden Valley, land of the Artians."        
        }
                
        ];
    
    var codeContent = [
        {
            name: "Ñusic",
            link: "https://hunterwilkins.github.io/project_one/",
            thumbnail: "Nusic-logo-transparent.png"
        },
        {
            name: "The Oracle's Test",
            link: "https://hunterwilkins.github.io/Oracle_Test/",
            thumbnail:"Oracle&#39s Test-Thumbnail.jpg"
        },
        {
            name: "Coooool Trivia!",
            link: "https://hunterwilkins.github.io/Cool_Trivia/",
            thumbnail:"Trivia-Thumbnail.jpg"
        }

    ];
    $(".content-box").html(aboutContent);
    
    //Navigation Tab Buttons ==========================================================================
    $(".navbuttons").on("click", ".tabs", function(){
        
        if ($(this).text() === "About" && section !== "About"){
            atmosphere("about");
            $(".info").prepend("<h1 class = 'tab-title' style = 'color:rgb(222, 223, 161);'>" + $(this).text() + "</h1>");

        }

        else if ($(this).text() === "Portfolio"){
            atmosphere("portfolio");
            $(".gallery").append("<h1 class = 'tab-title' style = 'color:rgb(180, 180, 180);'>" + $(this).text() + "</h1>");
            //Gallery Image Thumbnails ====================================================

             if ($(".gallery").find("img").length !== galleryArray.length){
                for (var i = 0; i < galleryArray.length; i++){
                    $(".gallery").append("<img src = 'assets/images/thumbnails/" + galleryArray[i].name + "' class = 'thumbnail' value = '"+ galleryArray[i].name +"'>");
                }
             }
            //====================================================================
        }
    });
    //============================================================================================

    //~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

    //Portfolio Dropdown Options =================================================================
    $(".genre-buttons").on("click", ".genre", function(){
        
        var genreButton = ($(this).text().toLowerCase());
        $(".gallery .thumbnail").remove();
        $(".gallery .link-thumbnail").remove();
        atmosphere("portfolio");
        $(".tab-title").remove();
        $(".gallery").append("<h1 class = 'tab-title'>" + $(this).text() + "</h1");
        $(".tab-title").text($(this).text());
        //Adding Images from the Relevant Genre ================================================
        if (genreButton === "code"){

            addLinks();
        }
        else {
            
            for (var i = 0; i < galleryArray.length; i++){
                if (genreButton === galleryArray[i].genre){                        
                $(".gallery").append("<img src = 'assets/images/thumbnails/" + galleryArray[i].name + "' class = 'thumbnail' value = '"+ galleryArray[i].name +"'>");
                }
            }
        }
            //====================================================================
        });
        //===============================================================================
        
    $(".content-box").on("click", ".thumbnail", function(){

        $("#image-view").empty();
        $("#image-view").css("display", "block");

        for (x in galleryArray){
            if (galleryArray[x].name === $(this).attr("value")){
                if (window.innerWidth < 490){
                    $("#image-view").prepend("<p class = 'image-subtitle-dark'>- Click (or Tap) Anywhere to Exit View -</p>");
                }
                else {
                    $("#image-view").prepend("<p class = 'image-subtitle-dark'>- Click Anywhere to Exit View -</p>");
                }

                $("#image-view").append("<img src = 'assets/images/full-sized-images/" + galleryArray[x].large + "' class = 'full-image col-12' id = '"+ galleryArray[x].large +"'>");
                $("#image-view").append("<div class = 'image-subtitle'><h3>" + galleryArray[x].large.split(".")[0] + "</h3><p>" + galleryArray[x].desc + "</p></div>");
            }
        }
        viewingImage = true;
    });

    $("#image-view").on("click", function(){
        $(this).css("display", "none");
    });

    function atmosphere(page){
        //Available Colors:
        //Green ==================
        //rgb(38, 49, 26);
        //rgb(222, 223, 161);
        //rgb(9, 23, 9);
        //rgba(9, 23, 9, 0.50);
        //rgba(127, 132, 85, .5);
        
        //.tabs
        //rgb(60, 71, 42);
        //rgb(41, 57, 31);
        //=================================

        if (page === "portfolio"){
            section = "Portfolio";
            // $(".tab-title").text("Portfolio");
            $(".gallery .thumbnail").remove();
            $(".gallery .link-thumbnail").remove();
            $(".tab-title").remove();
            
            // Aesthetic changes ===========================================================
            
            $("*").css("outline-color", "rgb(127, 127, 127)");
            $("body").css("background-color", "rgb(47, 47, 47)");
            $("nav").css({"background-color": "rgb(25, 25, 25)", "color": "rgb(221, 221, 221)", "border-color": "rgb(85, 85, 85, .5)"});
            $(".tabs").css({"background-color" : "rgb(47, 47, 47", "color": "rgb(221, 221, 221)"});
            $(".tabs").hover(function(){
                    $(this).css({"background-color": "rgb(31, 31, 31)", "text-shadow": "0 0 5px rgb(238, 238, 238)"});
                }, function(){
                    $(".tabs").css({"background-color": "rgb(47, 47, 47)", "text-shadow" : "none"});
            });
            $(".content-box").css({"background-color": "rgb(25, 25, 25)", "color":"rgb(221, 221, 221)", "border" : "rgb(85, 85, 85, .5) solid"});
            $(".tab-title").css("color", "rgb(180, 180, 180)");
            $("#navbar-header").css("text-shadow", "0 0 5px rgb(238, 238, 238)");
            $("footer").css({"background-color" : "rgb(9, 9, 9, .75", "color" : "rgb(127, 127, 127)"});
            
            // //Dropdown colors
            $(".genre").css({"background-color" : "rgb(32,32,32)", "color" : "rgb(225,225,225)"});
            $(".genre-buttons").css({"border-color" : "rgb(49, 49, 49)", "background-color": "rgb(21, 21, 21)"});
            $(".genre").hover(function(){
                $(this).css({"background-color": "rgb(42, 42, 42)"});
            }, function(){
                $(this).css({"background-color": "rgb(32, 32, 32)"});
            });
            $(".navbuttons").css("background", "rgba(221, 221, 221, 0)");

            //==========================================================================================
            
            $(".content-box").html(portfolioContent);
        }

        else if (page === "about"){
            $(".gallery").empty();
        
            // Aesthetic Changes ============================================================
            $("*").css("outline-color", "rgb(127, 132, 85)")
            $("body").css("background-color", "rgb(38, 49, 26)");
            $("nav").css({"background-color": "rgb(9, 23, 9)", "color": "rgb(222, 223, 161)", "border-color": "rgb(127, 132, 85, .5)"});
            
            $(".tabs").css({"background-color" : "rgb(60, 71, 42)", "color": "rgb(222, 223, 161)"});
            $(".tabs").hover(function(){
                    $(this).css({"background-color" : "rgb(41, 57, 31)", "text-shadow" : "0 0 5px rgb limegreen"});
                 }, function(){
                    $(".tabs").css({"background-color" : "rgb(60, 71, 42)", "text-shadow" : "none"});
            });
          
            $(".content-box").css({"background-color": "rgb(9, 23, 9)", "color":"rgb(222, 223, 161)", "border" : "rgb(127, 132, 85, .5) solid"});
            $("#navbar-header").css("text-shadow", "0 0 5px lightgreen");
           
            $("footer").css({"background-color" : "rgb(9, 23, 9, .75", "color" : "rgb(127, 132, 85)"});
            //Dropdown Buttons
            $(".genre").css({"background-color" : "rgb(38, 49, 26)", "color" : "rgb(222, 223, 161)"});
            $(".genre-buttons").css({"border-color" : "rgb(38, 49, 26)"});
            $(".genre").hover(function(){
                $(this).css({"background-color": "rgb(60, 71, 42)"});
            }, function(){
                $(this).css({"background-color": "rgb(41, 57, 31)"});
            });

            //===========================================================================================
            section = "About";
            $(".content-box").html(aboutContent);
            $(".thumbnail").remove();
        }
    }

    if ($(window).width() <= 490 && $(".tabs").length<3){
        $(".navbuttons").append("<button class = 'tabs' id = 'code-button'>Code</button>");
    }

    $(window).resize(function(){
        if ($(window).width() <= 490){
            if ($(".tabs").length <3){
                $(".navbuttons").append("<button class = 'tabs' id = 'code-button'>Code</button>");
            }
        }
        else if ($(window).width() > 490){
            $("#code-button").remove();
        }
    });
    $("#code-button").on("click", function(){
        atmosphere("portfolio");
        addLinks();
    });

    function addLinks(){
    console.log("Function Called...");
        for (var i = 0; i < codeContent.length; i++){
            console.log(codeContent[i].link);
            
                $(".gallery").append("<a href = '" +codeContent[i].link + "' target = '_blank' class = 'link-thumbnail'>"+ codeContent[i].name + "</a>");
        }
    }
});
