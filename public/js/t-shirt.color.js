//  change t-shirt color on click -jquery
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




// Upload image to be printed
document.getElementById('getval').addEventListener('change', readURL, true);

function readURL(){
	var file = document.getElementById("getval").files[0];
	var reader = new FileReader();
	reader.onloadend = function(){
		document.getElementById('inner-img').style.backgroundImage = "url(" + reader.result + ")";        
		}
	if(file){
		reader.readAsDataURL(file);
	}else{
	}
}