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

function createThread(id,imgSrc,msg,checked=0){
	var threadChecked = "";
	var threadSelected = "thread-not-select";

	if(checked){
		threadChecked = 'checked=""';
		threadSelected = 'thread-select';
	}
	var inputRadio= `<input id="${id}" type="radio" name="threads" value="${id}" ${threadChecked}></input>`
	var thread = `
<label for="${id}" id="${id}">
	<div class="threads thread-not-select">
		<div class="thread-left">
			<div class="thread-img">
				<img src="img/${imgSrc}" height="50" width="50" alt="">
			</div>
		</div>
		<div class="thread-right">
			<div class="thread-top">
				<div class="thread-title">${id}</div>
			</div>
			<div class="thread-bottom">
				<div class="thread-last-message">${msg}</div>
			</div>
		</div>
	</div>
</label>`
	return inputRadio+thread
}

function addThread(id,imgSrc,msg){
	document.getElementsByClassName("thread-container")[0].innerHTML += createThread(id,imgSrc,msg)
}
function removeThread(id){

	// document.getElementsByName("Admin")[0].remove()
	var threadList = document.getElementsByClassName("thread-container")[0].childNodes;
	threadList.forEach(element => {
		if(element.id == id){
			element.remove();
		}
	});
	
	// document.getElementById(id);
}

function login(){
	

}

function init(){

	var threads = "";
	threads += createThread("Global","forum-img_global.png","nice to see you man bla bla bla next next AA...",1)
	threads += createThread("Main","forum-img_main.png","nice to see you man bla bla bla next next AA...")
	
	document.getElementsByClassName("thread-container")[0].innerHTML = threads;
}

init()