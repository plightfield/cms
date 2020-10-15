import React from "react";
import Button from "react-bootstrap/Button";
import ComponentRender from "./components/ComponentRender";
import JsxParser from "react-jsx-parser";
const Parser: any = JsxParser;
const str = "<Button>this is test</Button>";
function App() {
  return (
    <div>
      <Button>test</Button>
      <ComponentRender />
      <Parser bindings={{}} components={{ Button }} jsx={str}></Parser>
    </div>
  );
}

export default App;
