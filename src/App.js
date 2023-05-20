// import { useEffect } from 'react';
import './App.css';
import WebcamRecorder from './components/views/webcamRecorder/webcamRecorder';
import 'react-toastify/dist/ReactToastify.css';

function App () {
  // useEffect(() => {
  //   debugger
  //   const timeout = setTimeout(() => {
  //     debugger
  //     // 👇️ redirects to an external URL
  //     if (window.location.protocol === 'http:') {
  
  //       window.location.href =
  //         window.location.href.replace(
  //           'http:', 'https:');
  //     }
  //   }, 3000);
  
  //   return () => clearTimeout(timeout);
  // }, [])
  return (
    <div className="App">
      <WebcamRecorder/>
    </div>
  );
}

export default App;
