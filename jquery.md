In order to be able to click on a note title and display its corresponding information, we need to create a binding between the DOM and the data in JavaScript. 

One way to pull this off is by embedding the relevant data into the DOM using [HTML data-* attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). In this case, each time I’m creating a new note selector DOM element with jQuery, I want to add the relevant note data into the DOM element itself using `data-id`, `data-body`, and `data-timestamp` attributes.

