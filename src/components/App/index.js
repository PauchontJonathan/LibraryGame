// == Import : npm
import React from 'react';
import NavBar from 'src/components/NavBar';
import Pages from 'src/components/Pages';

// == Import : local
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <NavBar />
    <Pages />
  </div>
);

// == Export
export default App;
