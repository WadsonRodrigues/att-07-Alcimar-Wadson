import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function GaleriaFotos() {
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then(response => {
        setAlbum(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [id]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [id]);

  return (
    <div>
      {album && (
        <div>
          <h1>{album.title}</h1>
          <ul>
            {photos.map(photo => (
              <li key={photo.id}>
                <Link to={`/Foto/${photo.id}`}>
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GaleriaFotos;