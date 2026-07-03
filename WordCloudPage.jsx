import React, { useEffect, useState } from "react";
import axios from "axios";

function WordCloudPage() {

  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    fetchKeywords();
  }, []);

  const fetchKeywords = async () => {

    try {

      const response = await axios.get("http://localhost:5000/wordcloud");
      setKeywords(response.data);

    } catch (error) {

      // Sample Data

      setKeywords([
        { word: "Camera", count: 120 },
        { word: "Battery", count: 110 },
        { word: "Display", count: 95 },
        { word: "Performance", count: 90 },
        { word: "Charging", count: 85 },
        { word: "Processor", count: 80 },
        { word: "Design", count: 75 },
        { word: "Speaker", count: 60 },
        { word: "Price", count: 55 },
        { word: "Quality", count: 50 },
        { word: "Network", count: 45 },
        { word: "Storage", count: 40 }
      ]);

    }

  };

  return (
    <div className="container mt-4">

      <h2 className="text-center text-primary mb-4">
        Word Cloud Analysis
      </h2>

      <div className="card shadow p-4">

        <h4 className="mb-3">
          Most Frequent Review Keywords
        </h4>

        <div className="d-flex flex-wrap">

          {keywords.map((item, index) => (

            <span
              key={index}
              className="badge bg-primary m-2 p-3"
              style={{
                fontSize: `${14 + item.count / 10}px`,
                cursor: "pointer"
              }}
            >
              {item.word}
            </span>

          ))}

        </div>

      </div>

      <div className="card shadow mt-4">

        <div className="card-body">

          <h4 className="mb-3">
            Keyword Frequency
          </h4>

          <table className="table table-bordered table-hover">

            <thead className="table-primary">

              <tr>
                <th>Keyword</th>
                <th>Frequency</th>
              </tr>

            </thead>

            <tbody>

              {keywords.map((item, index) => (

                <tr key={index}>

                  <td>{item.word}</td>

                  <td>{item.count}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default WordCloudPage;