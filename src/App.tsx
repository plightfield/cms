import React from "react";
import { Button } from "react-bootstrap";
import ComponentConfigForm from "./components/ComponentConfigForm";
import ComponentRender from "./components/ComponentRender";
function App() {
  return (
    <div>
      <Button>test</Button>
      <ComponentRender />
      <ComponentConfigForm
        initValue={["shit", ""]}
        onChange={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
}

export default App;
