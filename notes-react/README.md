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