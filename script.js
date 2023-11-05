// Using load method to wait till the page is loaded so we don't face didn't found an element type of error
window.addEventListener('load',
	function () {
		// Checking if watch is in the url so we can block that page
		if (window.location.href.includes("facebook") && window.location.href.includes("watch")) {
			disable_Page();

		} else if (window.location.href.includes("youtube") && window.location.href.includes("shorts")) {
			disable_Page();

		}
	},
	false);


function disable_Page() {
console.log("window.location.href");
console.log(window.location.href);
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
