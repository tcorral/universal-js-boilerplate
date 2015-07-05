'use strict';

import React from 'react';

class Layout extends React.Component {

  render () {
    return (
      <html lang='es'>
        <head>
          <meta charSet='utf-8' />
          <title>{ this.props.title }</title>
          <meta name='viewport' content='width=device-width, inital-scale=1.0' />
          <link rel='stylesheet' href='/app.css' />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </head>
        <body>
          { this.props.children }
          <script src='/app.js'></script>
        </body>
      </html>
    );
  }
}

export default Layout;
