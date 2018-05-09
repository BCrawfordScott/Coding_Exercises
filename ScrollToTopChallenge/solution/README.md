# Solution

The completed component is deceptively simple, but it challenges your knowledge of
react components, their lifecycle methods, their properties, and DOM manipulation.

There are three main pieces to this challenge:
* How do we register changes to the URL and establish the logic based on those changes?
* How do we scroll to the top of the page?
* How do we make sure we always render all of the content wrapped inside our component?

### URL Changes:
We can easily access our current location using the properties given to us by withRouter, but comparing both our current location and our last location become tricky.  We can use the less-often used component lifecycle method `componentDidUpdate` which receives `previousProps` as it's argument to compare our current location to our last location.

_NB: It is important to note that this component MUST be a classical component, rather than a functional component.  The prompt sets up for this._

### Scrolling:
JavaScript gives us a very handy method on the window, `window.scollTo()` that takes in x and y coordinate arguments and places the window at that position.

### Rendering
This last piece challenges your knowledge of inherent React properties.  All components posses a `.children` property that represents all of the components/elements that they wrap.  By simply rendering `this.props.children` we insure that all the content of our application is rendered whether or not scroll back to the top of the page.
