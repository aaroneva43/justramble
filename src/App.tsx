import React from "react";
import ReactDOM from "react-dom";
import { Button, Form, ButtonToolbar, CustomProvider } from "shadow-ui";

// import default style
import "./App.less";
// import "./App.scss";
const styles = {
  padding: 32,
  // textAlign: "center" as const,
};

function App() {
  return (
    <CustomProvider classPrefix="shadowui">
      <div style={styles}>
        <h4>{"Rsuite -> Metronic"}</h4>
        <br></br>
        <br></br>
        <h6>{"Buttons"}</h6>
        <a
          href="https://preview.keenthemes.com/metronic8/react/docs/docs/buttons"
          target="_blank"
        >
          Metronic Buttons
        </a>
        <hr></hr>
        <div className="demo-section">
          <Button
            appearance="primary"
            style={{ background: "#fff", color: "#7e8299", fontWeight: "550" }}
          >
            White
          </Button>
          <Button appearance="primary" size="lg">
            Primary
          </Button>
          <Button appearance="default" size="lg">
            Light
          </Button>
          <Button
            style={{
              background: "#e4e6ef",
              color: "#3f4254",
              fontWeight: "550",
            }}
            size="lg"
          >
            Secondary
          </Button>
          <Button color="green" appearance="primary" size="lg">
            Success
          </Button>
          <Button color="violet" appearance="primary" size="lg">
            Info
          </Button>
          <Button color="yellow" appearance="primary" size="lg">
            Warning
          </Button>
          <Button color="red" appearance="primary" size="lg">
            Danger
          </Button>
          <Button
            appearance="primary"
            size="lg"
            style={{ background: "#181c32" }}
          >
            Dark
          </Button>
        </div>

        <h6>{"Form"}</h6>
        <a
          href="https://preview.keenthemes.com/metronic8/react/docs/docs/forms"
          target="_blank"
        >
          Metronic Form
        </a>
        <hr></hr>
        <div className="demo-section">
          <Form
            fluid
            style={{
              borderRadius: "6px",
              border: "1px solid rgb(239, 242, 245)",
              padding: "32px 24px",
            }}
          >
            <Form.Group controlId="name">
              <Form.ControlLabel className="sui-form-lable">
                Default Input
              </Form.ControlLabel>
              <Form.Control
                size="lg"
                placeholder="name@example.com"
                name="name"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control size="lg" place name="email" type="email" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control
                name="password"
                type="password"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button appearance="primary">Submit</Button>
                <Button appearance="default">Cancel</Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </div>
      </div>
    </CustomProvider>
  );
}
export default App;
