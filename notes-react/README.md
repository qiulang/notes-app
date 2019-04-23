### Refactor into components

```
<App>
├── <Toolbar>
└── <NoteContainer>
    ├── <NoteSelectors>
    │   └── <NoteSelector>
    │   └── <NoteSelector>
    │   └── <NoteSelector>
    └── <NoteEditor>
```



### Display note titles from an array of notes

In JSX, you can write any JavaScript you want in `{ }` (as opposed to `{{ }}`in Vue.js). 



Now that things are broken into components, we have to make some choices when it comes to storing and passing data. 



Note the change in terminology — this time `notes` is referred to using `props`, not `state`. It’s worth going over in more detail here:

- The parent `<App>` component contains the note data, stored in its `state`. It has the ability to make changes to its own state, as well as pass any part of it down to its child components.
- Any data a child component receives from its parent component is stored in `props`. In this case the child `<NoteContainer>` component receives the `notes` data in its `props`. A child component is not allowed to make changes to the `props`, since the data belongs to the parent component.



React doesn’t provide a special mechanism to loop through data — instead we’re using the built-in array `map` function to create an array of `<NoteSelector>` components, stored in the variable `noteSelectors` and rendered in the JSX.



### Use functions to sort and format notes

Unlike Vue.js, React doesn’t provide special mechanisms for things like computed properties and filters. Instead, you simply write functions as needed.



### Select a note on title click

- We are adding `selectedNoteId` to the state to keep track of which note was selected. This is different than Vue.js, where we kept track of the note itself instead of just the id. This works better with the way React handles changes to the state, which we’ll see next.
- We are defining a new `handleClickNote` function which takes an id and updates the state using React’s `setState` method. This is an important part of React — you must use this `setState` method to change any state, without it React won’t be able to properly update the DOM when state changes. 
- We are binding a new prop to the child `<NoteContainer>` component called `selectedNoteId`, which is set to the current component’s state’s `selectedNoteId`.
- We are binding another new prop to the child `<NoteContainer>`component called `onClickNote`, which is set to the current component’s `handleClickNote` method we defined earlier. This is also different from Vue.js — there is no special notion of event emitters and listeners in React, you simply pass functions as part of the regular `props` which the child will call when appropriate.

It’s a bit different than Vue.js’ component model — in Vue.js, each component can only pass emit and listen to events from its direct child and direct parent. In React, you don’t emit events, instead you pass functions (which can belong to any component) in `props`, which means the function can be called by a child, grandchild, etc. 



### Edit the selected note on editor input

