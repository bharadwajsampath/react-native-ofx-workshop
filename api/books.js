import firebase from 'firebase';

const postNewBook = (bookDetails) => {
  const newPostKey = firebase.database().ref().child('books').push().key;
  firebase.database().ref(`books/${newPostKey}`).set({
    author: bookDetails.author,
    available: bookDetails.available,
    price: bookDetails.price,
    title: bookDetails.title
  });
};


const getAllBooks = () => {
  firebase.database().ref('books/').once('value').then((snapshot) => {
    console.log(snapshot);
  });
};

export default {
  post: postNewBook,
  all: getAllBooks,
};
