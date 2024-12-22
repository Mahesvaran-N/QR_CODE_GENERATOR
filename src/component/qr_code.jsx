import React, { useState } from 'react';

const QrCode = () => {
  const [img, setimg] = useState("");
  const [load, setload] = useState(false);
  const [qrdata, setqrdata] = useState("");
  const [size, setSize] = useState(150); 

  async function Qr_generate() {
    try {
      setload(true);
      const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrdata)}&size=${size}x${size}`;
      setimg(url);
    } catch (error) {
      console.log("Error in QR-CODE generating...");
    } finally {
      setload(false);
    }
  }

  return (
    <div className="app-container">
      <div>
        <h1>QR CODE GENERATOR</h1>
        {load && <p>Please Wait... </p>}

        {img && <img src={img} alt="QR Box" className="Qr-Image" />}

        <label htmlFor="dataInput" className="input-label">
          Data for QR Code
        </label>
        <input
          type="text"
          value={qrdata}
          id="dataInput"
          placeholder="Enter data for QR code"
          onChange={(e) => setqrdata(e.target.value)}
        />
        <label htmlFor="sizeInput" className="input-label">
          Image size (e.g., 150)
        </label>
        <input
          type="text"
          value={size}
          id="sizeInput"
          placeholder="Enter Image size"
          onChange={(e) => setSize(e.target.value)}
        />

        <div className="btn">
          <button className="gen-btn" onClick={Qr_generate}>
            Generate QR Code
          </button>
          <button
            className="down-btn"
            onClick={() => {
              const link = document.createElement("a");
              link.href = img;
              link.download = "QRCode.png";
              link.click();
            }}
          >
            Download QR Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
