import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Foto() {
  const [photo, setPhoto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response => {
        setPhoto(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [id]);

  return (
    <div>
      <h1>Galeria de Fotos</h1>
      {photo && (
        <div>
          <h2>{photo.title}</h2>
          <img src={photo.url} alt={photo.title} />
        </div>
      )}
    </div>
  );
}

export default Foto;