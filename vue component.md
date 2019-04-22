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



#### v-bind

1. Mustaches cannot be used inside HTML attributes. Instead, use a [v-bind directive](https://vuejs.org/v2/api/#v-bind):

<https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding/>



2. <https://vuejs.org/v2/guide/components-props.html>   "props assigned dynamically with `v-bind`"

HTML attribute names are case-insensitive, so browsers will interpret any uppercase characters as lowercase. That means when you’re using in-DOM templates, camelCased prop names need to use their kebab-cased (hyphen-delimited) equivalents:



Once a prop is registered, you can pass data to it as a custom attribute, … we can use `v-bind` to dynamically pass props. 



#### v-on

```
v-on:click.native="selectNote(note)"
```



子组件不能跳过父组件直接给祖父组件发消息。



### note 

1. v-on:click.native ， customer 元素，比如 <note-selector 需要， 实际DOM元素 <button 不需要
2. search文本不需要再通过App.vue 以prop回传给 toolbar