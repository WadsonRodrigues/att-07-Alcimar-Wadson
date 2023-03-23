import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

function Header() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);


  return (
    <div className="my-container">
      <h1>Galeria de fotos</h1>
      <ul className="my-list">
        {albums.map(album => (
          <li key={album.id}>
            <a href={`localhost:3000/GaleriaFotos/${album.id}`}>
              {album.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header