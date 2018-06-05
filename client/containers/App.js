import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header/Header';

const App = ({ children }) => (
  <div className="mainWrapper">
    <Header />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
