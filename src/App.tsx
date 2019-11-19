import React from "react";

import "./App.css";
import Button from "antd/es/button";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">Button</Button>
        <div>
          <p></p>
          <p>23</p>
          <p>345</p>
        </div>
      </header>
    </div>
  );
};

export default App;
