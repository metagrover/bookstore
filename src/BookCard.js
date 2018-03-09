import React from 'react';

const BookCard = ({data}) => (
  <div className="book-card">
    <img src={data.image} alt={data.original_title} />
    <h3>{data.original_title}</h3>
    <p>{data.authors}</p>
  </div>
);

export default BookCard;
