import logo from './logo.svg';
import './App.css';
import UploadImageToS3WithNativeSdk from './UploadImageToS3WithNativeSdk';
import UploadImageToS3WithReactS3 from './UploadImageToS3WithReactS3';

function App() {
  return (
    <div className="App">
      <UploadImageToS3WithNativeSdk />
      <UploadImageToS3WithReactS3 />
    </div>
  );
}

export default App;
