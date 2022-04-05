import React from 'react';

import './App.css';
import TabsPage from "./components/tabs/TabsPage";
import BSTabs from "./components/tabs/BSTabs";

function App() {
  return (
    <div className="App">
      <TabsPage/>
      <BSTabs/>
    </div>
  );
}

export default App;
