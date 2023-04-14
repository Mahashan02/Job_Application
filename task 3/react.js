import React, { useState } from 'react';

function JobSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make API call to job search API with query
    const response = await fetch(`https://your-job-search-api.com?query=${query}`);
    const data = await response.json();
    // Update state with results
    setResults(data.results);
  };

  return (
    <div>
      <h1>Job Search</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="query">Search:</label>
        <input type="text" id="query" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobSearch;
