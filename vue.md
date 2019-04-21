### Installation



This instantiates the Vue instance — pretty much all of our JavaScript will be written and organized within this object. The `el` option has a value of `'#app'`, which is the id of the HTML div where Vue.js will bind itself to.



If you compare working with Vue.js to [jQuery](https://medium.com/@peterxjang/comparing-frontend-frameworks-part-2-jquery-d92abe80ef25), you can see that the things you’re concerned about as a programmer are very different! In some sense I would consider jQuery to be easier to get started with, particularly if you have a good understanding of the DOM. But as we got deeper into the features, it was a lot simpler to write the Vue.js code, since we can keep our focus on data manipulation as opposed to both data manipulation plus DOM manipulation.

Learning Vue.js might seem a bit daunting to an absolute beginner — we covered the `v-for`, `v-on`, `v-bind`, `v-model`, and `v-if` HTML template directives, as well as the `data`, `mounted`, `computed`, `filters`, `methods`, and `watch` Vue instance options. However, getting started with Vue.js is a lot easier than this — you can get pretty far with with just the `v-for`, `v-model`, and `v-click` directives with the `data` and `methods` Vue instance options! Basically you should learn new directives and options as the need arises — this is what Vue.js means when it says it’s a progressive framework. And compared to the other frameworks we’ll be looking at in this series, it’s definitely the easiest to get up and running!