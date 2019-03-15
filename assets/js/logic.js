
//variables
var section = "About";

var aboutContent = $("<div class='info'><h1>About</h1><img  id = 'portrait' src = 'assets/images/self-portrait.webp'><p>Hunter Wilkins is an artist, singer, musician, writer, and programmer. " +
                    "He graduated from Trinity University in May of 2018 with a Bachelor's in Art and uses his knowledge"+
                    " of color theory and design to enhance his front-end programming. "+
                    "His dream is to create immersive, memorable, and intriguing interactive programs that make use of (and further develop) his skillsets.</p></div>");

var portfolioContent;


$(".content-box").html(aboutContent);
//navbar buttons
$(".navbuttons").on("click", ".tabs", function(){
    if ($(this).text() === "About" && section !== "About"){
        $("body").css("background-color", "rgb(38, 49, 26)");
        $("nav").css({"background-color": "rgb(9, 23, 9)", "color": "rgb(222, 223, 161)"});
        
        $(".tabs").css({"background-color" : "rgb(60, 71, 42)", "color": "rgb(222, 223, 161)"});
        $(".tabs").hover(function(){
            $(this).css({"background-color" : "rgb(41, 57, 31)", "text-shadow" : "0 0 5px rgb limegreen"});
        }, function(){
            $(".tabs").css({"background-color" : "rgb(60, 71, 42)", "text-shadow" : "none"});
        })
        
        $(".content-box").css({"background-color": "rgb(9, 23, 9)", "color":"rgb(222, 223, 161)"});
        $("#navbar-header").css("text-shadow", "0 0 5px lightgreen");

        $("footer").css({"background-color" : "rgb(9, 23, 9, .75", "color" : "rgb(127, 132, 85)"});
        $(".info").css({"opacity" : "1"});
        $(".content-box").html(aboutContent);
        section = "About";

    }
    else if ($(this).text() === "Portfolio" && section !== "Portfolio"){
        $("body").css("background-color", "rgb(47, 47, 47)");
        $("nav").css({"background-color": "rgb(25, 25, 25)", "color": "rgb(221, 221, 221)"});
        $(".tabs").css({"background-color" : "rgb(71, 71, 71)", "color": "rgb(221, 221, 221)"});
        
        $(".tabs").hover(function(){
            $(this).css({"background-color": "rgb(31, 31, 31)", "text-shadow": "0 0 5px rgb(238, 238, 238)"});
        }, function(){
            $(".tabs").css({"background-color": "rgb(47, 47, 47)", "text-shadow" : "none"});
        })

        $(".content-box").css({"background-color": "rgb(25, 25, 25)", "color":"rgb(221, 221, 221)"});
        
        $(".info").css({"opacity" : "0"});
        
        
        $("#navbar-header").css("text-shadow", "0 0 5px rgb(238, 238, 238)");

        $("footer").css({"background-color" : "rgb(9, 9, 9, .75", "color" : "rgb(127, 127, 127)"});
        section = "Portfolio";
    }
})