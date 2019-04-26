import React from 'react';
import { compose } from 'recompose';
import './Home.css';

import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';

const HomePage = () => (
  <div>
    <div>Home Page</div>
    <p>The Home Page is accessible by every signed in user.</p>

    <Messages />
  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
