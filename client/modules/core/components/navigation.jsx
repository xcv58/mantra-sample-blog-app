import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/lib/flat-button';
injectTapEventPlugin();

const Navigation = () => (
  <div>
    <b> Navigation: </b>
    <a href="/">Home</a> |
    <a href="/new-post">New Post</a>
    <RaisedButton label="Hello" />
  </div>
);

export default Navigation;
