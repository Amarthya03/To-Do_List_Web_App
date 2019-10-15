// Check off specific to-dos by clicking
$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
});

// Click on X to delete to-do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event) {
	if(event.which===13) {
		// Grabbing new to-do text
		var todoText = $(this).val();
		$(this).val("");
		// Create a new li and adding it to the list
		$("ul").append("<li><span><i id='bin' class='fas fa-trash-alt'></i></span> "+todoText+"</li>");
	}
});

$(".fa-pencil-alt").click(function(){
	$("input[type='text']").fadeToggle();	
})