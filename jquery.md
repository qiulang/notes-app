### Select a note on title click

In order to be able to click on a note title and display its corresponding information, we need to create a binding between the DOM and the data in JavaScript. 

One way to pull this off is by embedding the relevant data into the DOM using [HTML data-* attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). In this case, each time I’m creating a new note selector DOM element with jQuery, I want to add the relevant note data into the DOM element itself using `data-id`, `data-body`, and `data-timestamp` attributes.



### Edit the selected note on editor input

Next we’ll bind the `<textarea>` to the note data. Each time the user changes the text, there’s quite a few things that need to be updated:

- The underlying note data (body and timestamp)
- The displayed timestamp in the note editor
- The displayed title and timestamp in the current note selector
- The sort order of the note selectors (the current one should be on top)

This is where we start to see some difficulties with jQuery — while the DOM manipulation code itself is fairly straightforward, it becomes more and more complicated to remember the different parts of the DOM that need to be updated with each change.



### Create a new note with a button

Now let’s implement the ability to create a new note. Clicking on the “New” button should create a new note (new id, no body, current timestamp). The new note should become the currently selected note and appear at the top of the list of note selectors. 