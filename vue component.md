### vue component

首先，[安装vue/cli的问题](<https://github.com/vuejs/vue-cli/issues/3766>)



### Refactor into components



```
<app>
├── <toolbar>
└── <note-container>
    ├── <note-selectors>
    │   └── <note-selector>
    │   └── <note-selector>
    │   └── <note-selector>
    └── <note-editor>
```



Now that things are broken into components, we have to make some choices when it comes to storing and passing data. For the array of notes, it makes sense for the main `<App>` component to keep track of the notes and pass it down to its children. 



There definitely is a price to pay for breaking things into components — maintaining strong boundaries means you must put in more effort to pass information across said boundaries. 



### Use computed properties and filters to sort and format notes

Right now we have the `<note-selector>` component responsible for title and timestamp formatting, and the `<note-selectors>` parent component responsible for sorting. 