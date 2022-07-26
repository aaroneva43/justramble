import React from "react";
import ReactDOM from "react-dom";
import { Button, Form, ButtonToolbar } from "rsuite";
import MobxTimer, { Timer } from "./MobxTimer";

// import default style
import "./App.less";
const t = new Timer();
function App() {
  return (
    <>
      <MobxTimer timer={t} />
    </>
  );
}
export default App;
