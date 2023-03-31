import React from 'react';
import data from '../MovieData.json';
import styles from '../styles.module.css';

const movieData = data.MovieData;

function MovieList() {
  return (
    <>
      <div className={styles.container1}>
        <div>
          <h1>Joel Hilton's Movie Collection</h1>
        </div>

        <div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {movieData.map((m) => (
                <tr>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Category}</td>
                  <td>{m.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="btn btn=primary">Edit</button>
      </div>
    </>
  );
}

export default MovieList;
