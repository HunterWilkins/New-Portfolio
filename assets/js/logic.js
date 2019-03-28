$(document).ready(function(){


    var section = "About";

    var aboutContent = $("<div class='info'><h1 class = 'tab-title'>About</h1><img  id = 'portrait' src = 'assets/images/self-portrait.webp'><p>Hunter Wilkins is an artist, singer, musician, writer, and programmer. " +
                        "He graduated from Trinity University in May of 2018 with a Bachelor's in Art and uses his knowledge"+
                        " of color theory and design to enhance his front-end programming. "+
                        "His dream is to create immersive, memorable, and intriguing interactive programs that make use of (and further develop) his skillsets.</p></div>");
    
    var portfolioContent = $("<div class = 'gallery'><h1 class = 'tab-title' style = 'color:rgb(180, 180, 180);'>Artistic Portfolio</h1></div>");
    
    var galleryArray = [{
            name: "Artiodactyla-Thumbnail.png", 
            genre: "concept",
            large: "Artiodactyla of the Primordial Winter.png"
            
        },
        {
            name: "Bucketbot-Thumbnail.png",
            genre: "romance",
            large: "Bucketbot&#39s Discovery.png"
        },

        {
            name: "Opossum-Thumbnail.png",
            genre: "misc",
            large: "Mason&#39s Opossum Shirt.png"
        },

        {
            name:"Lilia-Thumbnail.png",
            genre: "concept",
            large: "Lilia - Goddess of Magic.png"
        },

        {
            name: "Mandolineer-Thumbnail.png",
            genre: "concept",
            large: "The Mandolineer.png"
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
    
    var viewingImage = false;
    
    
    $(".content-box").html(aboutContent);
    
    //Navigation Tab Buttons ==========================================================================
    $(".navbuttons").on("click", ".tabs", function(){
        
        if ($(this).text() === "About" && section !== "About"){
            // $(".tab-title").text("About");
            atmosphere("about");
        }

        else if ($(this).text() === "Portfolio" ){
            atmosphere("portfolio");
            $(".tab-title").text("Artistic Portfolio");

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
        atmosphere("portfolio");
        var genreButton = ($(this).text().toLowerCase());
        $(".gallery .thumbnail").remove();
        //Adding Images from the Relevant Genre ================================================
            for (var i = 0; i < galleryArray.length; i++){
                if (genreButton === galleryArray[i].genre){                        
                $(".gallery").append("<img src = 'assets/images/thumbnails/" + galleryArray[i].name + "' class = 'thumbnail' id = '"+ galleryArray[i].name +"'>");
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
                console.log(galleryArray[x].large);

                $("#image-view").append("<img src = 'assets/images/full-sized-images/" + galleryArray[x].large + "' class = 'full-image' id = '"+ galleryArray[x].large +"'>");
            }
        }
        viewingImage = true;
    });

    $("#image-view").on("click", function(){
        $(this).css("display", "none");
    })


  

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

            $(".gallery .thumbnail").remove();
            
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

            //==========================================================================================
            
            $(".content-box").html(portfolioContent);
            $(".tab-title").text("Artistic Portfolio");
            section = "Portfolio";
        }

        else if (page === "about"){
        
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
            $(".tab-title").css("color", "rgb(222, 223, 180)");
           
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
            $(".tab-title").text("About");
         
            $(".gallery").empty();
    
        }
            
    }
});
