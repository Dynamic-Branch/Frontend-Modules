import './App.css';
import SignatureCanvas from 'react-signature-canvas';

function App() {
  return (
    <>
      <h1>Frontend Modules</h1>
      <h4>Sign here:</h4>
      <SignatureCanvas
        penColor='green'
        canvasProps={{
          width: 500,
          height: 200,
          className: 'sigCanvas',
        }}
      />
    </>
  );
}

export default App;
