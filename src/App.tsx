import { useState, Fragment } from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import './App.css';

declare global {
  interface Window { sendJsToWebView: any; }
}

function App() {
  var userAgent = window.navigator.userAgent.toLowerCase(),
  safari = /safari/.test(userAgent),
  ios = /iphone|ipod|ipad/.test(userAgent);
  
  const [fullName, setFullName] = useState("fullName");
  const [documentNumber, setDocumentNumber] = useState("documentNumber");
  const [ref_id, setRefId] = useState("ref_id");
  const [id_type, setIdType] = useState("id_type");
  const [address, setAddress] = useState("address");
  const [gender, setGender] = useState("gender");
  const [dateOfBirth, setDateOfBirth] = useState("dateOfBirth");
  const [placeOfBirth, setPlaceOfBirth] = useState("placeOfBirth");
  const [frontImg, setFrontImg] = useState("frontImg");
  const [backImg, setBackImg] = useState("backImg");
  const [faceImg, setFaceImg] = useState("faceImg");

  window.sendJsToWebView = (message: string) => {
    message = message.replace(/\\/g, "");
    const obj = JSON.parse(message, function (key, value) {

        if (key === "fullName") {
          setFullName(value);
        } else if (key === "documentNumber") {
          setDocumentNumber(value);
        } else if (key === "ref_id") {
          setRefId(value);
        } else if (key === "id_type") {
          setIdType(value);
        } else if (key === "address") {
          setAddress(value);
        } else if (key === "gender") {
          setGender(value);

        } else if (key === "dateOfBirth") {
          setDateOfBirth(value);
        } else if (key === "placeOfBirth") {
          setPlaceOfBirth(value);
        } else if (key === "frontImg") {
          setFrontImg(value);
        } else if (key === "backImg") {
          setBackImg(value);
        } else if (key === "faceImg") {
          setFaceImg(value);
        }
    });
  }

  return (
    <Fragment>
    <div className="centered-div">
        Maxis Microsite App Integration Sample4
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
    <div className="centered-div">
      {fullName}
      <br />
      {documentNumber}
    </div>
    </Fragment>
  );
}

export default App;