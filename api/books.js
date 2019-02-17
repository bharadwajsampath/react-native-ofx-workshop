import firebase from 'firebase';

const postNewBook = (bookDetails) => {
  const newPostKey = firebase.database().ref().child('books').push().key;
  firebase.database().ref(`books/${newPostKey}`).set({
    uid: newPostKey,
    author: bookDetails.author,
    with: bookDetails.with,
    title: bookDetails.title,
    available: bookDetails.available
  });
};


const getAllBooks = () => firebase.database().ref('books/').once('value')
  .then((snapshot) => {
    const allBooks = snapshot.toJSON();
    console.log(allBooks);
    return allBooks;
  });

const updateBook = (uid, values) => {
  firebase.database().ref(`books/${uid}`).update(values).then(() => {
    getAllBooks();
  });
};


export default {
  post: postNewBook,
  all: getAllBooks,
  update: updateBook,
};
