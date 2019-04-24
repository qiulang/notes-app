We covered **using CSS for basic styling**with typographic properties, **using CSS for layout** using float, flexbox, and grid based approaches, **using a CSS preprocessor for new syntax** such as variables and mixins, **using a CSS postprocessor for transformative features** such as adding vendor prefixes, and **using CSS methodologies for maintainability** to overcome the global nature of CSS styles. 



Tools like CSS preprocessors and CSS postprocessors go a long way towards improving the CSS development experience. But these tools alone aren’t enough to solve the problem of maintaining large CSS codebases. To address this, people began to document different guidelines on how to write CSS, generally referred to as CSS methodologies.



The key issue is the global nature of CSS — every style you define is globally applied to every part of the page. It becomes your job to either come up with a detailed naming convention to maintain unique class names or wrangle with [specificity rules](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)to determine which style gets applied any given element.



#### OOCSS

 The first principle is **separate structure and skin**. This means the CSS to define the structure (like layout) shouldn’t be mixed together with the CSS to define the skin (like colors, fonts, etc.). This makes it easier to “re-skin” an application. The second principle is **separate container and content**. This means think of elements as re-usable objects, with the key idea being that an object should look the same regardless of where it is on the page.



#### SMACSS

[SMACSS](https://smacss.com/) (Scalable and Modular Architecture for CSS) was introduced in 2011 as a methodology based around writing your CSS in 5 distinct categories — **base rules**, **layout rules**, **modules**, **state rules**, and **theme rules**. The SMACSS methodology also recommends some naming conventions. 



#### BEM

[BEM](https://en.bem.info/) (Block, Element, Modifier) was introduced in 2010 as a methodology organized around the idea of dividing the user interface into independent blocks. A **block** is a re-usable component. An **element** is a smaller part of a block that can’t be re-used on its own.A **modifier** is an entity that defines the appearance, state, or behavior of a block or element 



The BEM methodology is simple to understand, with a specific naming convention that allows newcomers to apply it without having to make complex decisions. The downside for some is that the class names can be quite verbose, and don’t follow traditional rules for [writing semantic class names](https://css-tricks.com/semantic-class-names/). Later approaches like Atomic CSS would take this untraditional approach to a whole other level!



#### CSS in JS

Originally the methodology used inline styles, but later implementations used JavaScript to generate CSS (with unique class names based on the component) and insert it into the document with a style tag.

The goal of the CSS in JS methodology is to be able to define components with hard boundaries that consist of their own encapsulated HTML/CSS/JS, such that the CSS in one component has no chance of affecting any other components. 

React was one of the first widely adopted frameworks that pushed for these components with hard boundaries, influencing other major frameworks like Angular, Ember, and Vue.js to follow suit. It’s important to note that the CSS in JS methodology is relatively new, and there’s a lot of experimentation going on in this space as developers try to establish new best practices for CSS in the age of components for web applications.

------

原文 <https://medium.com/actualize-network/modern-css-explained-for-dinosaurs-5226febe3525>

中文翻译 <https://www.fastzhong.com/2018/02/11/modern-css-explained-for-dinosaurs/>