import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAapA5P8gWC83aHK26xgDDMzIBC4dw914w",
  authDomain: "expensify-a13e6.firebaseapp.com",
  databaseURL: "https://expensify-a13e6.firebaseio.com",
  projectId: "expensify-a13e6",
  storageBucket: "expensify-a13e6.appspot.com",
  messagingSenderId: "124728096317"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Andrew Mead',
  age: 26,
  stressLevel: 6,
  job: {
    title: 'Software developer',
    company: 'Google'
  },
  location: {
    city: 'Philadelphia',
    country: 'United States'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed.', e);
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });
