var tombolUtama = $(".utama")
var hiddenPage = $(".hidden")

$(".hidden").hide();

$("#player").on("click", function(){
	$("#viewplayer").slideToggle();
	tombolUtama.toggle();
});

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

$(".back").on("click", function(){
	tombolUtama.toggle();
	hiddenPage.hide();
});