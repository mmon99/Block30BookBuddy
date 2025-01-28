const Account = ({ user }) => {
  if (!user) {
    return <p>Please log in for your account.</p>;
  }

  return (
    <section>
      <h2>Account: {user.username}</h2>
      <h3>Checked-out Books:</h3>
      <ul>
        {user.checkedOutBooks.length > 0 ? (
          user.checkedOutBooks.map((book) => <li key={book.id}>{book.title}</li>)
        ) : (
          <p>You have no books checked out.</p>
        )}
      </ul>
    </section>
  );
};

export default Account;