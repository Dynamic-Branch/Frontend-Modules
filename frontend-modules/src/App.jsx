import './App.css';
import SignatureCanvas from 'react-signature-canvas';
import mockData from './mock-data';
import { useState, useRef } from 'react';
import { NavBar } from './containers/NavBar/NavBar';
import Scheduler from './components/Scheduler/Scheduler';

function App() {
  const [signatureMode, setSignatureMode] = useState(false);
  const [trimmedCanvas, setTrimmedCanvas] = useState('');
  const signaturePadRef = useRef(null);

  function handleSignatureClick() {
    return setSignatureMode(!signatureMode);
  }

  function clearPad() {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
    }
  }

  function trimPad() {
    if (signaturePadRef.current) {
      setTrimmedCanvas(
        signaturePadRef.current.getTrimmedCanvas().toDataURL('image/png')
      );
    }
  }

  return <Scheduler />;
}

export default App;
