import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DiaryDisplay() {
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDiaryEntries = async () => {
      try {
        const response = await axios.get('/api/diary');
        setDiaryEntries(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDiaryEntries();
  }, []);

  if (isLoading) {
    return <p>Loading diary entries...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="box">
      <table>
        <thead>
          <tr>
            <th>DATE</th>
            <th>DIARY</th>
          </tr>
        </thead>
        <tbody>
          {diaryEntries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.date}</td>
              <td>{entry.diary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DiaryDisplay;
