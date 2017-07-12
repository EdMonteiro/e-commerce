// test jquery change t-shirt color on click
$(document).ready(function() {

    // t-shirt colors to choose from
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
    // image to add to personalizerd t-shirt
    // document.getElementById("input-image").onSubmit(function () {

    //     document.getElementById("inner-img").css("");
    // });

        document.getElementById("input-image").addEventListener("submit", myFunction);

        function myFunction() {
            alert("The form was submitted");
        }

