// test jquery change t-shirt color on click
$(document).ready(function() {

    $(".white").click(function(){
        $("#t-shirt").css("background-color", "white");
    })
    $(".black").click(function(){
        $("#t-shirt").css("background-color", "black");
    })
    $(".grey").click(function(){
        $("#t-shirt").css("background-color", "grey");
    })
    $(".navy").click(function(){
        $("#t-shirt").css("background-color", "navy");
    })
});
