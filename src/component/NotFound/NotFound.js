import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import { Alert, Button } from "react-bootstrap";

function NotFound() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading> Oh oops! You got an error!</Alert.Heading>
          <p>
            Go back to the home page or Change this URL address and try again
          </p>
        </Alert>
      ) : (
        <Button onClick={() => setShow(true)} className="alert-btn">
          Show Alert
        </Button>
      )}
      {/* render(
      <AlertDismissibleExample />
      ) */}
      {/* <p className="title-section">This page was not found</p> */}
      <div className="not-found">
        <Link to="/">go to Home page</Link>
      </div>
      {/* </div> */}
    </>
  );
}

export default NotFound;
