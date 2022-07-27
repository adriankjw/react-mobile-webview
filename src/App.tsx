import { useState, Fragment } from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import './App.css';
/*
let platformType = "android";

function sendLogJsToWebView(message: string) {
}

function sendJsToWebView(message: string) {
  message= message.replace(/\\/g, "");
  const obj = JSON.parse(message, function (key, value) {
      if (key == "fullName") {
          document.getElementById("inputFieldName").value = value;

          var x = document.getElementById("scanFaceButton");
          x.style.display = "block";

      } else if (key == "documentNumber") {
          document.getElementById("inputFieldID").value = value;

      } else if (key == "ref_id") {
          document.getElementById("inputFieldRefID").value = value;

      } else if (key == "id_type") {
          document.getElementById("inputFieldTypeID").value = value;

      } else if (key == "address") {
          document.getElementById("inputFieldAddress").value = value;

      } else if (key == "gender") {
          document.getElementById("inputFieldGender").value = value;

      } else if (key == "dateOfBirth") {
          document.getElementById("inputFieldDob").value = value;

      } else if (key == "placeOfBirth") {
          document.getElementById("inputFieldPlace").value = value;

      } else if (key == "frontImg") {
          document.getElementById("inputFrontImg").src = value;
          var x = document.getElementById("inputFrontImg");
          x.style.display = "block";

      } else if (key == "backImg") {
          document.getElementById("inputBackImg").src = value;
          var x = document.getElementById("inputBackImg");
          x.style.display = "block";

      } else if (key == "faceImg") {
          document.getElementById("inputFaceImg").src = value;
          var x = document.getElementById("inputFaceImg");
          x.style.display = "block";

      }
});

}
*/
/*
let sendLogJsToWebView = (message: string) => {
  
}*/

declare global {
  interface Window { sendLogJsToWebView: any; }
}

function App() {
  var userAgent = window.navigator.userAgent.toLowerCase(),
  safari = /safari/.test(userAgent),
  ios = /iphone|ipod|ipad/.test(userAgent);
  
  const [test, setTest] = useState("test not set");
  const [message, setMessage] = useState("message not set");

  window.sendLogJsToWebView = (message: string) => {
    setMessage(message);
    setTest("sendLogJsToWebView");
  }

  return (
    <Fragment>
    <div className="centered-div">
        Maxis Microsite App Integration Sample4
    </div>
    <div>
      {test}
    </div>
    <div>
      {message}
    </div>
    <div className="centered-div">
      <Button title='MyKad NRIC' onClick={() => {
        if (ios) {
          eval("NativeApp.postMessage({'action': 'openEKycNRIC'});")
        } else {
          eval("Android.openEKycNRIC();")
        }
      }} >
      </Button>
      <Button title='MyKad Tentera' onClick={() => {
        if (ios) {
          eval("NativeApp.postMessage({'action': 'openEKycTentera'});")
        } else {
          eval("Android.openEKycTentera();")
        }
      }} >
      </Button>
      <Button title='Passport' onClick={() => {
        if (ios) {
          eval("NativeApp.postMessage({'action': 'openEKycPassport'});")
        } else {
          eval("Android.openEKycPassport();")
        }
      }} >
      </Button>
      <Button title='Scan Face NRIC' onClick={() => {
        if (ios) {
          eval("NativeApp.postMessage({'action': 'openEKycFace'});")
        } else {
          eval("Android.openEKycFace();")
        }
      }} >
      </Button>
    </div>
    </Fragment>
  );
}

export default App;