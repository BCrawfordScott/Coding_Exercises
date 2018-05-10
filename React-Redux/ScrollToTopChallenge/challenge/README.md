# Prompt

The goal for this challenge is to implement a React component, using withRouter from react-router, that will wrap around the entire web application and scroll to the top of the window when there is a change in the URL.

* This component will wrap around the entire application
### Example:
```javascript
const App = () => (
  <div>
    <ScrollToTop>
      <Route exact path='/' component={ HomePage } />
      <Route path='/news' component={ News } />
      <Route path='/media' component={ Media } />
      <Route path='/contact' component={ Contact } />
    </ScrollToTop>
  </div>
);
```
* This component cannot use any additional third party libraries
