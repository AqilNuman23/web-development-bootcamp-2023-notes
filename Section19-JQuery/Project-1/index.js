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

// adding eent listener
$("h3").click(function(){
    $("h3").css("color", "purple");
});

// Change all colour if being click
for (var i = 0; i<5; i++;) {
    document.querySelectorAll("button")(i).addEventListener("click", function(){
        document.querySelector("h4").style.color = "purple";
    });
};