import QRCode from 'qrcode.react';
import { useState } from 'react';
import './App.css'

function App() {

  const [url,setUrl] = useState("");
  
  const handleDownload = () => {
    const qrcode = document.getElementById("qrcode")
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");

    let elmnt = document.createElement("a");
    elmnt.href = qrcode;
    elmnt.download = "qrcode.jpg";
    document.body.appendChild(elmnt);
    elmnt.click();
    document.body.removeChild(elmnt);
  }
  return (
    <div className="App">

<a href='https://github.com/abhishekrd/genQR' target="_blank" rel="noreferrer"><button className='github'><i class='bx bxl-github'></i> GitHub</button></a>
      <h1 className='head'>genQR</h1>
      <h2 className='subhead'>A QR Code Generator for your links🚀</h2>
      <input className='input' type="text" placeholder="Enter your url here..." value={url} onChange={(e) => setUrl(e.target.value)} />
    { url ? <QRCode id='qrcode' size={256} fgColor="#212121" value={url} includeMargin={true} renderAs="canvas" /> : <h2 className='info'>QR will be Generated here...</h2>}  
    {url ? <button className='dwnldbtn' onClick={handleDownload} value="Download">Download</button> : <button className='inactive'>Download</button>} 
    </div>
  )
}

export default App
