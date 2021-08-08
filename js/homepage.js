$( function() {
	$( ".rooms" ).resizable({handles: 'e'},{
		start: function(event, ui) {
			$('iframe').css('pointer-events','none');}
		,stop: function(event, ui) {
			$('iframe').css('pointer-events','auto');
		}
	});
	$('.rooms').resize(function(){
		$('.chat').width($(".bottom").width()-$(".rooms").width()); 
	});
} );