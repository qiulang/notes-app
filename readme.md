#### Notes app

[Comparing Frontend Approaches](https://medium.com/actualize-network/comparing-frontend-frameworks-part-1-introduction-6cf3d49e42cf) by  [Peter Jang](https://medium.com/@peterxjang)

I generally implement the following features in my web-based clone of the Mac Notes app in this order:

- **Store notes as an array of objects** (a note has an id, body, & timestamp)
- **Display note titles on the left**, sorted with newest on top (note titles are computed based on the note body)
- **Select a note on title click**, which highlights the selected note on the left and displays the selected note body on the right
- **Edit the selected note on input**, which automatically updates the title and timestamp on the left
- **Create a new note with a button**, with an empty body and current timestamp
- **Delete the selected note with a button**, which updates the left notes list
- **Filter notes on search input**, which automatically updates the list of notes as you type each character

The clone app starts off with the same HTML and CSS template (no JavaScript yet)

Some notes about this starting template:

- There is some placeholder HTML content which will be replaced with dynamically generated JavaScript content.
- I added a lot of classes to the HTML to make it easier to style and manipulate the DOM. Most JavaScript frameworks don’t utilize direct DOM manipulation, but it’s there just in case.
- I’m using CSS flexbox for the application layout. I’m not a flexbox guru (pretty much learned what I needed from [Flexbox Froggy](http://flexboxfroggy.com/) and [Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/)), so there may be a more graceful way to handle the CSS layout!

In this series I will be building the same notes app with the following frontend approaches — [jQuery](https://medium.com/@peterxjang/comparing-frontend-frameworks-part-2-jquery-d92abe80ef25), [Vue.js](https://medium.com/@peterxjang/comparing-frontend-frameworks-part-3-vue-js-8b8614e4f324), [Vue.js with components](https://medium.com/@peterxjang/comparing-frontend-frameworks-part-4-vue-js-with-components-675c880d4585), [React](https://medium.com/@peterxjang/comparing-frontend-frameworks-part-5-react-b51fd7d075fe), and [Elm](https://medium.com/@peterxjang/comparing-frontend-frameworks-part-6-elm-578714526164). This was chosen roughly in order of easier to learn but complex to maintain (jQuery) to simple to maintain but harder to learn (Elm). Stay tuned!



### summary

#### jQuery

A direct DOM manipulation based approach. 
**Pros**: Easy to install, easy to learn. Smaller in size than most frameworks.
**Cons**: Requires diligence with organizing code. Making all appropriate DOM updates when something changes can get complex (“jQuery spaghetti”).



#### Vue.js

A template based approach (with a virtual DOM under the hood)
**Pros**: Easy to install, easy to learn. Smallest size in terms lines of code, one of the smallest in terms of payload.
**Cons**: Non-trivial amount of Vue specific syntax to learn. Can get harder to organize code in the single file and Vue instance as the app increases in complexity.



#### Vue.js with components

The same Vue.js approach, this time with components
**Pros**: Single file components reduces cognitive load. Increased reusability and simplicity with components.
**Cons**: Requires complex build step. Passing data down and bubbling events up can be tedious with multiple parent-child components.



#### React

A virtual DOM based component approach**Pros**: Small API surface. Immutable state improves simplicity. Increased reusability and simplicity with components.
**Cons**: Requires complex build step. Harder to learn with heavy use of advanced and experimental JS features. Functional approach in JS requires particular care.