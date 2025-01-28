import { useState, useEffect } from 'react';

const getBookDetails = async (bookId) => {
  try {
    const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`);
    const bookDetailsObject = await response.json(); 
    const eachBookDetails = bookDetailsObject.book
    setBookDetails(eachBookDetails);
  } catch (err) {
    console.log(err);
  }
};

const BookDetails = ({ bookDetails, setBookDetails }) => {
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  useEffect(() => {
    setIsCheckedOut(false);
  }, [bookDetails]);

  const handleCheckOut = () => {
    if (bookDetails.available) {
      setIsCheckedOut(true);
      alert(`You have checked out ${bookDetails.title}`);
    } else {
      alert('This book is not available for checkout.');
    }
  };

  const handleReturn = () => {
    setIsCheckedOut(false);
    alert(`You have returned ${bookDetails.title}`);
  };

  return (
    <section>
      <h2>{bookDetails.title}</h2>
      <h3>{bookDetails.author}</h3>
      <p>{bookDetails.description}</p>
      <img src={bookDetails.coverimage} alt={bookDetails.title} height="150" width="150" />
      <br />

      {!isCheckedOut ? (
        <button onClick={handleCheckOut}>Check Out</button>
      ) : (
        <button onClick={handleReturn}>Return Book</button>
      )}
    </section>
  );
};

export default BookDetails;
