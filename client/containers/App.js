import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';

const App = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
