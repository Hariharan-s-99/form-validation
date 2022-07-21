import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "./App.css";

const App = () => {
  //UPDATING FIELD VALUE
  const updateFieldValue = (e, field) => {
    setData((prevState) => ({ ...prevState, [field]: e.target.value }));
  };

  //VALIDATING EMAIL
  const validateMail = (mail) => {
    // eslint-disable-next-line no-useless-escape
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
      mail
    );
  };

  //FORM VALIDATION
  const validateForm = () => {
    if (
      !data.name ||
      !data.email ||
      data.name.trim() === "" ||
      !validateMail(data.email)
    ) {
      setError(true);
    } else {
      setError(false);
      setData({
        city: "",
        country: "",
        email: "",
        message: "",
        mobile: "",
        name: "",
        state: "",
      }); // RESETING FORM VALUE IF SUBMITTED SUCCESSFULLY
    }

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); //HELPS TO HIDE ALERT AFTER RENDERING (3000ms)
  };

  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="app">
      <div className="alert-wrapper">
        {showAlert &&
          (error ? (
            <Alert variant="danger">Please Add Name and Valid mail id!</Alert>
          ) : (
            <Alert variant="success">Form Submitted SuccessFully!</Alert>
          ))}
      </div>
      <div className="form">
        <h4>FORM VALIDATION</h4>
        <InputGroup size="lg" className="input-wrapper">
          <div className="input-with-label">
            <span>
              Name <i>*</i>
            </span>
            <FormControl
              placeholder="name"
              className="input-field"
              value={data.name}
              onChange={(e) => updateFieldValue(e, "name")}
            />
          </div>
          <div className="input-with-label">
            <span>
              Email <i>*</i>
            </span>
            <FormControl
              placeholder="email"
              className="input-field"
              value={data.email}
              onChange={(e) => updateFieldValue(e, "email")}
            />
          </div>
          <div className="row-wrapper">
            <div className="input-with-label-row">
              <span>Mobile</span>
              <FormControl
                type="number"
                placeholder="mobile"
                className="input-field"
                value={data.mobile}
                onChange={(e) => updateFieldValue(e, "mobile")}
              />
            </div>
            <div className="input-with-label-row">
              <span>Country</span>
              <FormControl
                placeholder="country"
                className="input-field"
                value={data.country}
                onChange={(e) => updateFieldValue(e, "country")}
              />
            </div>
          </div>

          <div className="row-wrapper">
            <div className="input-with-label-row">
              <span>City</span>
              <FormControl
                placeholder="city"
                className="input-field"
                value={data.city}
                onChange={(e) => updateFieldValue(e, "city")}
              />
            </div>
            <div className="input-with-label-row">
              <span>State</span>
              <FormControl
                placeholder="state"
                className="input-field"
                value={data.state}
                onChange={(e) => updateFieldValue(e, "state")}
              />
            </div>
          </div>

          <div className="input-with-label">
            <span>Message</span>
            <FormControl
              as="textarea"
              placeholder="message"
              className="input-field textarea"
              value={data.message}
              onChange={(e) => updateFieldValue(e, "message")}
            />
          </div>
          <Button
            variant="primary"
            className="submit-button"
            onClick={validateForm}
          >
            Submit
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default App;
