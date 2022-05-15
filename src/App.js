import React, { useState, } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [text, setText] = useState("Search");
  const [movie, setMovie] = useState([]);
  const changeText = (e) => {
    setText(e.target.value);
  }
  const getMovie = (e) => {
    e.preventDefault();
    axios.get(`http://www.omdbapi.com/?s=${text}&apikey=38870d47`)
      .then((res) => {
        console.log(res);
        setMovie(res.data.Search)
      })
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Movie Zone</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
            </ul>
            <form className="d-flex" onSubmit={getMovie}>
              <input className="form-control me-2" type="search" value={text} onChange={changeText} />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container my-3">
        <div className="row">
          {
            movie.map((value) => {
              return (
                <div className='col-3'>
                  <div className='card' style={{ width: "18rem" }}>
                    <img src={value.Poster} className='card-img-top' alt='' />
                    <div className='card-body'>
                      <h3 className='card-title'>{value.Title}</h3>
                      <h4 className='card-text'>{value.Year}</h4>
                      <a href='#' className='btn btn-primary'>Go somewhere</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
export default App;