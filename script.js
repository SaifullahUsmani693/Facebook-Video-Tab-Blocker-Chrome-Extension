// Using load method to wait till the page is loaded so we don't face didn't found an element type of error
window.addEventListener('load', 
function() {
	// Checking if watch is in the url so we can block that page
	if(window.location.href.includes("watch")){
		disable_Page();
		console.log("Found Video Content On Facebook");
		console.log("Disabling Page");
		

	}else{
		console.log("No Video Content Found");
		console.log("No Action Required");

		document.body.addEventListener('click', function(){
				console.log("Got a click in body");
				setTimeout(function () {
					console.log("5 sec passed by..");
					disable_Page(); 
				}, 5000);
			}, true);
		}
	}, 	
false);


function disable_Page() {
	var should_disable_page;
	// using a bool to see if watch keyword is in the url if yes then disable the page else not
	if(window.location.href.includes("watch")){
		should_disable_page = true;
	}else{
		should_disable_page = false;		
	}

		
	if(should_disable_page){
		// Deleting head and body so the content cannot be recovered using developer tools
		var x = document.getElementsByTagName("head")[0];   
		x.remove();

		var y = document.getElementsByTagName("body")[0];   
		y.remove();

		//Creating the body and message element using the createElement method.
		var newBody = document.createElement("body");
		var message = document.createElement("div");

		//Assigning unique ID So we can add CSS to the message.
		message.id = 'Message_By_Facebook_Video_Tab_Blocker';

		//Adding a Message
		message.innerHTML = "<h1>Shh! No No, No Useless Videos! <br /> Do something productive!</h1>";


		// Assigning our new body element to the document/page
		document.body = newBody;

		//Finally, appending the element to the HTML body
		document.body.appendChild(message);
	}
}