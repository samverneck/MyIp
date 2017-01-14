import React from 'react';

class MyFooter extends React.Component {
  render() {
    return(
      <footer>
        <p className="title is-4">
          Created by <strong>Igor Oliveira</strong>
        </p>
        <p>
         <a href="https://github.com/devigor">
          <i className="fa fa-github fa-5x" aria-hidden="true"></i>
         </a>
        </p>
      </footer>
    );
  }
}

export default MyFooter;
