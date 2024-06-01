import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [numberId, setNumberId] = useState("");
  const [response, setResponse] = useState(null);
  const [storedNumbers, setStoredNumbers] = useState([]);
  const WINDOW_SIZE = 10;

  const handleFetchNumber = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/${numberId}`);
      const numbers = res.data;
      const newNumber = numbers[Math.floor(Math.random() * numbers.length)];

      const newStoredNumbers = [...storedNumbers];
      if (!newStoredNumbers.includes(newNumber)) {
        if (newStoredNumbers.length >= WINDOW_SIZE) {
          newStoredNumbers.shift(); // Remove the oldest number
        }
        newStoredNumbers.push(newNumber);
      }

      setStoredNumbers(newStoredNumbers);
      const average = (
        newStoredNumbers.reduce((acc, num) => acc + num, 0) /
        newStoredNumbers.length
      ).toFixed(2);

      setResponse({
        storedNumbersBefore: newStoredNumbers.slice(0, -1),
        storedNumbersAfter: newStoredNumbers,
        average,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Average Calculator</h1>
        <div className="mb-4">
          <input
            type="text"
            value={numberId}
            onChange={(e) => setNumberId(e.target.value)}
            placeholder="Enter number ID (p, f, e, r)"
            className="border p-2 rounded-md"
          />
          <button
            onClick={handleFetchNumber}
            className="ml-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
            disabled={!numberId}
          >
            Fetch Number
          </button>
        </div>
        {response && (
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Response:</h2>
            <p>
              <strong>Stored Numbers Before:</strong>{" "}
              {response.storedNumbersBefore.join(", ")}
            </p>
            <p>
              <strong>Stored Numbers After:</strong>{" "}
              {response.storedNumbersAfter.join(", ")}
            </p>
            <p>
              <strong>Average:</strong> {response.average}
            </p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
