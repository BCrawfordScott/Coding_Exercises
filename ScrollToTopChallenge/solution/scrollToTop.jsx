import React from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends React.Component {
  // We use componentDidUpdate to monitor our current position vs.
  // our last position
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      // We then use vanilla JS DOM manipulation to scroll to the top based
      // on our logic
      window.scrollTo(0, 0);
    }
  }
  // Lastly we use this.props.children to render anything wrapped by our component
  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
