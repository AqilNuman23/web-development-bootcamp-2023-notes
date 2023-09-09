// Look over the query text in event references mdn

$("h1").css("color", "red");

$("button").css("color"); //To get value of it
$("button").css("color", "green"); //To set value to it

// One way to separate between css and js is by .addClass method

$("h2").addClass("big-title");

// to check using dev tools console
$("h2").hasClass("big-title");

// to remove class or property
$("h2").removeClass("big-title");


// manipulate text
$("h3").text("bye");

// manipulate attribute (etc: src/a) using attr
console.log($("img").attr("src"));
$("a").attr("href", "https://www.github.com")

// select the h3, than the event we want to use which is "click" and then we bind the calling function to it. Then we update the h3 css to change its color to purple
// adding eent listener
$("h3").click(function(){
    $("h3").css("color", "purple");
});

// keypress event listener part 157
$("input").keypress(function(event) {
    console.log(event.key);
});

$("input").keypress(function(event) {
    $("h1").text(event.key);
});




$("h1").click(function(){
    $("h1").css("color", "blue");
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "green");
});

// adding and removing element 158
// before() after() prepand() append()
$("h1").before("<button>before</button>");
$("h1").after("<button>after</button>");
$("h1").prepend("<button>prepend</button>");
$("h1").append("<button>append</button>");

// if we want to remove tags just simple use
$("h3").remove();

// Jquery effect method
// hide and show element
$("button").on("click", function(){
    $("h1").hide();
});
$("button").on("click", function(){
    $("h1").show();
});
$("button").on("click", function(){
    $("h1").toggle();
});

// custom animate
$("button").on("click", function(){
    $("h1").animate({opacity: 0.5}); // only numeric value that is number
});