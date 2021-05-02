// Using load method to wait till the page is loaded so we don't face didn't found an element type of error
window.addEventListener('load', 
  function() { 
        
    // Deleting head and body so the content cannot be recovered using developer tools
    var x = document.getElementsByTagName("head")[0];   
    x.remove();

    var y = document.getElementsByTagName("body")[0];   
    y.remove();

    //Creating the body and message element using the createElement method.
    var newBody = document.createElement("body");
    var message = document.createElement("div");

    //Assigning unique ID So we can add CSS to the message.
    message.id = 'message';

    //Adding a Message
    message.innerHTML = "<h1>Shh! No No, No Useless Videos! <br /> Do something productive!</h1>";

    // Assigning our new body element to the document/page
    document.body = newBody;
    
    //Finally, appending the element to the HTML body
    document.body.appendChild(message);

}, false);
