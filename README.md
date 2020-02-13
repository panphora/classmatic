# Classmatic

![npm bundle size](https://img.shields.io/bundlephobia/minzip/classmatic)

Click an element to add or remove a class on another element.

All the JavaScript you need for simple modals, dropdowns, and tabs

## Install

Add this to your `<head>`:

```html
<script src="https://cdn.jsdelivr.net/gh/panphora/classmatic@v0.6.1/dist/classmatic.min.js"></script>
```

Or `npm install classmatic`.

## Examples

#### Sidebar

<img src="demo/gifs/classmatic-demo--sidebar.gif" width="400" alt="Sidebar demo">

```html
<div class="sidebar" data-show-if=".sidebar-open">
  <button class="sidebar__close" data-click-to-remove-class="sidebar-open">close</button>
  <h3>Menu</h3>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Features</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact Us</a></li>
  </ul>
</div>
<button data-click-to-toggle-class="sidebar-open">Toggle sidebar</button>
```

*Demo:* [Sidebar on Codepen](https://codepen.io/panphora/pen/ZEYRbbE?editors=1000)

#### Tabs

<img src="demo/gifs/classmatic-demo--tabs.gif" width="400" alt="Tabs demo">

```html
<button 
  class="tab-button tab-1-button" 
  data-click-to-add-class="tab-1-active" 
  data-click-to-remove-class="[tab-2-active,tab-3-active]"
>Tab 1</button>
<button 
  class="tab-button tab-2-button" 
  data-click-to-add-class="tab-2-active" 
  data-click-to-remove-class="[tab-1-active,tab-3-active]"
>Tab 2</button>
<button 
  class="tab-button tab-3-button" 
  data-click-to-add-class="tab-3-active" 
  data-click-to-remove-class="[tab-1-active,tab-2-active]"
>Tab 3</button>
<div class="tab-content" data-show-if=".tab-1-active">Content for the first tab.</div>
<div class="tab-content" data-show-if=".tab-2-active">Content for the second tab.</div>
<div class="tab-content" data-show-if=".tab-3-active">Content for the third tab.</div>
```

*Demo:* [Tabs on Codepen](https://codepen.io/panphora/pen/RwNJWWx?editors=1000)

#### Dropdown menu

<img src="demo/gifs/classmatic-demo--dropdown.gif" width="400" alt="Dropdown menu demo">

```html
<div class="dropdown">
  <button data-click-to-toggle-class="dropdown-open">Products&nbsp; &#9662;</button>
  <ul class="dropdown__menu" data-click-away-to-remove-class="dropdown-open" data-show-if=".dropdown-open">
    <li><a href="#">Access Connect</a></li>
    <li><a href="#">Acquire Connect</a></li>
    <li><a href="#">Prospect Connect</a></li>
    <li><a href="#">Data Connect</a></li>
  </ul>
</div>
```

*Demo:* [Nav Menu on Codepen](https://codepen.io/panphora/pen/GRgGpZx)

## The Attributes

Classmatic lets you use a few simple attributes to control when clicking around the page will add/remove/toggle classes.

### Set/unset a class when clicking on an element

These attributes make clicking on their element add/remove/toggle a class on any element.

* `data-click-to-add-class="className selector(optional)"`
  * Adds the `className` class to all elements that match `selector` (only when the current element is clicked)
* `data-click-to-remove-class="className selector(optional)"`
  * Removes the `className` class from all elements that match `selector` (only when the current element is clicked)
* `data-click-to-toggle-class="className selector(optional)"`
  * Toggles the `className` class on all elements that match `selector` (only when the current element is clicked)

**Notes** 

* If `selector` is not specified, Classmatic will default to targeting the `<body>` element.
* You can set/unset multiple classes with a single attribute by using the following syntax with braces: `data-click-to-remove-class="[className1,className2] [selector1,selector2](optional)"`. The arguments inside the brances can *NOT* have spaces between them.
* `selector` isn't assumed to be a class, so it must include either a `.` (for a class selector), `#` (for an ID selector), or `[]` (for an attribute selector)

### Set/unset a class when clicking *AWAY FROM* an element

These attributes make clicking AWAY from their element add/remove/toggle a class on any element.

* `data-click-away-to-add-class="className selector(optional)"`
  * Adds the `className` class to all elements that match `selector` (only when an element that's not the current element is clicked)
* `data-click-away-to-remove-class="className selector(optional)"`
  * Removes the `className` class from all elements that match `selector` (only when an element that's not the current element is clicked)
* `data-click-away-to-toggle-class="className selector(optional)"`
  * Toggles the `className` class on all elements that match `selector` (only when an element that's not the current element is clicked)

**Important** 

* A click away action will *NOT* trigger if the current click event also triggers a normal click action targeting the same `className` and `selector`

### Control visibility of elements

Classmatic makes it really easy to hide and show elements based on the classes on the page.

* `data-show-if="selector"`
  * shows element *ONLY* if it or any ancestor element matches the `selector`. hides it otherwise.
* `data-hide-if="selector"`
  * hides element *ONLY* if it or any ancestor element matches the `selector`. shows it otherwise.

**Notes** 

* The styles that make these attributes work are generated automatically for you as soon as Classmatic loads. This is why Classmatic should be loaded after your page's elements are done loading (just before the closing `</body>` tag). Otherwise, it won't know which elements to generate hide/show styles for.





