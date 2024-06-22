import './App.css';
import SignatureCanvas from 'react-signature-canvas';
import mockData from './mock-data';
import { useState, useRef } from 'react';

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
  return (
    <>
      <h3>Formular înscriere</h3>
      <div className='text'>{mockData}</div>
      {!signatureMode ? (
        <button className={'button'} onClick={handleSignatureClick}>
          Accept and sign
        </button>
      ) : null}

      {signatureMode ? (
        <form className='form'>
          <div className='formFirstRow'>
            <SignatureCanvas
              ref={signaturePadRef}
              penColor='green'
              canvasProps={{
                width: 500,
                height: 200,
                className: 'sigCanvas',
              }}
            />
          </div>
          <div className='formSecondRow'>
            <button
              className={'button'}
              type='button'
              onClick={handleSignatureClick}
            >
              Go back
            </button>
            <button
              className={'button'}
              id='buttonClear'
              type='button'
              onClick={clearPad}
            >
              Clear
            </button>
            <button
              className={'button'}
              id='buttonTrim'
              type='button'
              onClick={trimPad}
            >
              Trim
            </button>
            <button className={'button'} id='buttonProceed' type='button'>
              Proceed to checkout
            </button>
          </div>
        </form>
      ) : null}
      <div>
        <img src={trimmedCanvas} />
      </div>
    </>
  );
}

export default App;
