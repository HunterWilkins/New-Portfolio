$(document).ready(function(){


    var section = "About";

    var aboutContent = $("<div class='info'><h1 class = 'tab-title'>About</h1><img  id = 'portrait' src = 'assets/images/self-portrait.webp'><p>Hunter Wilkins is an artist, singer, musician, writer, and programmer. " +
                        "He graduated from Trinity University in May of 2018 with a Bachelor's in Art and uses his knowledge"+
                        " of color theory and design to enhance his front-end programming. "+
                        "His dream is to create immersive, memorable, and intriguing interactive programs that make use of (and further develop) his skillsets.</p></div>");
    
    var portfolioContent = $("<div class = 'gallery'><h1 class = 'tab-title' style = 'color:rgb(180, 180, 180);'>Artistic Portfolio</h1></div>");
    
    var galleryArray = [{
            name: "Artiodactyla-Thumbnail.png", 
            genre: "concept"
        },
        {
            name: "Bucketbot-Thumbnail.png",
            genre: "romance"
        },

        {
            name: "Opossum-Thumbnail.png",
            genre: "misc"
        },

        {
            name:"Lilia-Thumbnail.png",
            genre: "concept"
        },

        {
            name: "Mandolineer-Thumbnail.png",
            genre: "concept"
        },

        {
            name: "Snake-Thumbnail.png",
            genre: "misc"
        },
        {
            name:"Slime-Thumbnail.png",
            genre:"romance"
        }
        ];
    

    $(".content-box").html(aboutContent);
    
    //Navigation Tab Buttons ==========================================================================
    $(".navbuttons").on("click", ".tabs", function(){
        
        if ($(this).text() === "About" && section !== "About"){
            atmosphere("about");
        }

        else if ($(this).text() === "Portfolio" ){
            atmosphere("portfolio");

            //Gallery Image Thumbnails ====================================================

             if ($(".gallery").find("img").length !== galleryArray.length){
                for (var i = 0; i < galleryArray.length; i++){
                    $(".gallery").append("<img src = 'assets/images/thumbnails/" + galleryArray[i].name + "' class = 'thumbnail'>");
                }
             }
            //====================================================================
        }
    });
    //============================================================================================

    //~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

    //Portfolio Dropdown Options =================================================================
    $(".genre-buttons").on("click", ".genre", function(){
        atmosphere("portfolio");
        var genreButton = ($(this).text().toLowerCase());
        $(".gallery .thumbnail").remove();
        //Adding Images from the Relevant Genre ================================================
            for (var i = 0; i < galleryArray.length; i++){
                if (genreButton === galleryArray[i].genre){                        
                $(".gallery").append("<img src = 'assets/images/thumbnails/" + galleryArray[i].name + "' class = 'thumbnail'>");
                }
            }
            //====================================================================
        });
        //===============================================================================
        

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
        // var greenScreen = ["rgb(38, 49, 26)", "rgb(222, 223, 161)", "rgb(9, 23, 9)", "rgba(9, 23, 9, 0.50)", "rgba(127, 132, 85, .5)", "rgb(60, 71, 42)",   ]

        if (page === "portfolio"){

            $(".gallery .thumbnail").remove();
            
            // Aesthetic changes ===========================================================
            $("body").css("background-color", "rgb(47, 47, 47)");
            $("nav").css({"background-color": "rgb(25, 25, 25)", "color": "rgb(221, 221, 221)", "border-color": "rgb(85, 85, 85, .5)"});
            $(".tabs").css({"background-color" : "rgb(71, 71, 71)", "color": "rgb(221, 221, 221)"});
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
            $(".genre").css({"background-color" : "rgb(32,32,32)", "color" : "rgb(225,225,225)"})
            $(".genre").hover(function(){
                $(this).css({"background-color": "rgb(42, 42, 42)"});
            }, function(){
                $(this).css({"background-color": "rgb(32, 32, 32)"});
            });

            //==========================================================================================
            
            $(".content-box").html(portfolioContent);
            section = "Portfolio";
        }

        else if (page === "about"){
        
            // Aesthetic Changes ============================================================

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
            $(".tab-title").css("color", "rgb(180, 180, 180)");
           
            $("footer").css({"background-color" : "rgb(9, 23, 9, .75", "color" : "rgb(127, 132, 85)"});
            //Dropdown Buttons
            $(".genre").css({"background-color" : "rgb(38, 49, 26)", "color" : "rgb(222, 223, 161)"})
            $(".genre").hover(function(){
                $(this).css({"background-color": "rgb(60, 71, 42)"});
            }, function(){
                $(this).css({"background-color": "rgb(41, 57, 31)"});
            });


            //===========================================================================================
            section = "About";
            
            $(".content-box").html(aboutContent);
            $(".gallery").empty();
    
        }
            
    }
});
