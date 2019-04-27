$(document).ready(function(){
    resize();

    var galleryArray = [
        {
            thumbnail: "Artiodactyla-Thumbnail.png", 
            genre: "concept",
            large: "Artiodactyla of the Primordial Winter.jpg",
            desc:"Near the beginning of time, a primordial deer wanders the sunless world." 
        },
        {
            thumbnail: "Bucketbot-Thumbnail.png",
            genre: "romance",
            large: "Bucketbot&#39s Discovery.jpg",
            desc:"A recently-married couple takes a moment to remind each other of their love, drawing the gaze of a longing robot."
        },

        {
            thumbnail: "Opossum-Thumbnail.png",
            genre: "misc",
            large: "Mason&#39s Opossum Shirt.png",
            desc: "Mason hates Opossums, so, I made him this shirt."
        },

        {
            thumbnail:"Lilia-Thumbnail.png",
            genre: "concept",
            large: "Lilia - Goddess of Magic.png",
            desc: "A notorious (and powerful) trickster, Lilia could demolish the world if she so desired. Mortals are thankful she's slow to boredom."
        },

        {
            thumbnail: "Mandolineer-Thumbnail.png",
            genre: "misc",
            large: "The Mandolineer.jpg",
            desc: " "
        },

        {
            thumbnail: "Snake-Thumbnail.png",
            genre: "misc",
            large: "The Cereal Snake.png",
            desc: "HiI'mtheCerealSnakeGoodbye!"
        },
        {
            thumbnail:"Slime-Thumbnail.png",
            genre:"romance",
            large: "The Lonely Slime.jpg",
            desc: "As the immortal slime grows in years, it becomes more complex. Eventually, its mind becomes indistinguishable from a human's, and it learns to long for the same things we do."
        },
        {
            thumbnail: "Iliolos-Thumbnail.png",
            genre: "concept",
            large: "Iliolis - The Trapped Goddess.jpg",
            desc: "A goddess, trapped within an ocean of liquid air, reaches eternally for the one thing that could make her omnipotent."
        },

        {
            thumbnail:"Ugh-Thumbnail.jpg",
            genre: "romance",
            large:"Ugh.jpg",
            desc: "Hostage Situation"
        },
        {
            thumbnail:"It Beats Debt-Thumbnail.jpg",
            genre: "romance",
            large:"It Beats Debt.jpg",
            desc:"Hostage Situation"
        },
        {
            thumbnail:"Awkward-Thumbnail.jpg",
            genre: "romance",
            large: "Awkward.jpg",
            desc: "Hostage Situation: \"I hope she's not scared...\" / \"I hope he's not crazy...\""
        },
        {
            thumbnail:"A Couple Stories-Thumbnail.jpg",
            genre: "romance",
            large: "A Couple Stories.jpg",
            desc:"Hostage Situation: Nothing brings two outcasts together more than their pasts."
        },
        {
            thumbnail: "Planning-Thumbnail.jpg",
            genre:"romance",
            large: "Planning.jpg",
            desc:"Hostage Situation"
        },
        {
            thumbnail:"Heist-Thumbnail.jpg",
            genre:"romance",
            large:"Heist.jpg",
            desc:"Hostage Situation"
        },
        {
            thumbnail:"Triumph-Thumbnail.jpg",
            genre:"romance",
            large:"Triumph.jpg",
            desc:"Hostage Situation: \"Three square meals a day and housing with your sweetheart? Sounds like a triumph to me, right?\""
        },

        {
            thumbnail: "Mandolia-Thumbnail.jpg",
            genre:"misc",
            large:"Mandolia.jpg",
            desc:"A birthday present for my Dad, who plays the mandolin."
        },
        {
            thumbnail:"A Complementary Couple-Thumbnail.jpg",
            genre:"romance",
            large:"A Complementary Couple.jpg",
            desc:"Complementary colors, while the furthest apart on the color wheel, each make the other brighter when paired together."
        },
        {
            thumbnail:"Ashen Valley-Thumbnail.jpg",
            genre:"concept",
            large:"Ashen Valley.jpg",
            desc: "...once you traverse the Gilded Gate, you'll enter the Golden Valley, land of the Artians."        
        },
        {
            thumbnail:"The Demon of Hate - Thumbnail.jpg",
            genre:"concept",
            large:"The Demon of Hate.jpg",
            desc: "\"The poor thing roared for hours before her throat gave out. Pater's being an absolute angel to her, but it's going to take time...\""        
        }
                
        ];
    
    var codeContent = [
        {
            name: "Ñusic",
            link: "https://hunterwilkins.github.io/project_one/",
            thumbnail: "Nusic-logo-transparent.png",
            github:"https://github.com/HunterWilkins/project_one"
        },
        {
            name: "The Oracle's Test",
            link: "https://hunterwilkins.github.io/Oracle_Test/",
            thumbnail:"Oracle&#39s Test-Thumbnail.jpg",
            github:"https://github.com/HunterWilkins/Oracle_Test"
        },
        {
            name: "Coooool Trivia!",
            link: "https://hunterwilkins.github.io/Cool_Trivia/",
            thumbnail:"Trivia-Thumbnail.jpg",
            github:"https://github.com/HunterWilkins/Cool_Trivia"
        },
        {
            name: "ULTIMATE LIST",
            link: "https://the-ultimate-list-app.herokuapp.com/",
            thumbnail:"Trivia-Thumbnail.jpg",
            github:"https://github.com/HunterWilkins/UltimateList"
        }

    ];

    var clicks;

    addArt("All");

    $(".genre-buttons").on("click", ".genre", function(){
        var genre = $(this).text();
        addArt(genre);
    });


    $(window).on("resize", function(){
        resize();
    });

    function resize(){
        if ($(window).width() <= 525){
            $(".genre-buttons").html(
                `
                
                <button class = "genre">Genres...</button>
                <div id = "dropdown">
                </div>
                `
            );
        }
        else {
            $(".genre-buttons").html(
                `                  
                <button class = "genre">Concept</button>
                <button class = "genre">Romance</button>
                <button class = "genre">Misc</button>
                |
                <button class = "genre">Code</button>
                `
            );
        }
    }

    function addArt(genre){
        $(".content-box").empty();
        if (genre === "Genres..."){
            $("#tab-title").text("All");
        }
        else {
            $("#tab-title").text(genre);
        }

        var relevantGalleryItems = galleryArray.filter(art => {
            if(genre === "All" || genre === "Genres..."){
                return true;
            } else{
                return art.genre === genre.toLowerCase()
            }
        });

        relevantGalleryItems.forEach(function(art){
            $(".content-box").append(
                `
                <div class = "thumbnail-box" filename = "${art.large}" description = "${art.desc}">
                    <img src = "assets/images/thumbnails/${art.thumbnail}" class = "thumbnail">
                    <p class = "thumbnail-title">${art.large.split(".")[0]}</p>
                </div>
                `);
        });
    }

    // Shows the title of the image when the cursor hovers over the box
    $(".content-box").on({
        mouseenter:function(){
            $(this).children("p").animate({opacity:"1"}, 150);
        },
        mouseleave:function(){
            $(this).children("p").animate({opacity: "0"}, 150);
        }
    }, ".thumbnail-box");

    // When the thumbnail-box is clicked, it pulls up the full view of the image.
    
    $(".content-box").on("click", ".thumbnail-box", function(){
        clicks = 0;
        $("body").append(
        `
        <div id = "full-view">
            <img src = "assets/images/full-sized-images/${$(this).attr("filename")}">
            <button>Description</button>
            <div id = "description">
            <h3>${$(this).children("p").text()}</h3>
            <hr>
            <p>${$(this).attr("description")}</p>
            </div>
            <span>
        </div>
        `);
      
        
        $("#full-view>img").on("load",function(){
            $("#full-view>img").animate({"top":"50%", "opacity":"1"}, 1000);
            $("#full-view").animate({"opacity":"1"});
        });
    });

    $("body").on("click", "#full-view>img", function(){
        $("#full-view").remove();
        clicks=0;
    });



    $("body").on("click", "#full-view>button", function(){
        if (clicks === 0){
            $("#description").animate({"bottom" : "25%"}, 250);
            $("#full-view>button").animate({"bottom" : "25%"}, 250);
            $(this).css({"background":"rgb(35,35,35)", "color": "rgb(213,213,213)"});
            clicks++;
        }
        else {
            $("#description").animate({"bottom" : "-1.5em"}, 250);
            $("#full-view>button").animate({"bottom" : "0"}, 250);
            $(this).css({"background":"rgb(52,52,52)"}, {"color": "rgb(193,193,193)"});
            clicks=0;
        }
        
    });

// End of Document.Ready Function
});
