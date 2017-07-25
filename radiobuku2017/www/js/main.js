var tombolUtama = $(".utama")
var hiddenPage = $(".hidden")

$(".hidden").hide();

$("#player").on("click", function(){
	$("#viewplayer").slideToggle();
	tombolUtama.toggle();
});

/* BEGIN deactivated events

$("#kronik").on("click", function(){
	$("#viewkronik").slideToggle();
	tombolUtama.toggle();
});

$("#jadwal").on("click", function(){
	$("#viewjadwal").slideToggle();
	tombolUtama.toggle();
});

$("#tentang").on("click", function(){
	$("#viewtentang").slideToggle();
	tombolUtama.toggle();
});

END deactivated events */

$(".back").on("click", function(){
	tombolUtama.toggle();
	hiddenPage.hide();
});