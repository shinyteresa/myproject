import React, { useState } from 'react';
import Papa from 'papaparse';

function CSVReader() {
  const [csvData, setCSVData] = useState([]);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    Papa.parse(selectedFile, {
      complete: (result) => {
        setCSVData(result.data);
      },
      header: true,
    });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {file && <p>Selected CSV file: {file.name}</p>}

      {csvData.length > 0 && (
        <table>
          <thead>
            {Object.keys(csvData[0]).map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </thead>
          <tbody>
            {csvData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((cell, index) => (
                  <td key={index}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CSVReader;
