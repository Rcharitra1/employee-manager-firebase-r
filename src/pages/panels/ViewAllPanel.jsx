// import React from 'react';
// import firebaseApp from '../../firebase/firebaseConfig';
// const ViewAllPanel = () => {

//     // console.log(firebaseApp.auth().currentUser.uid)
//     // const docRef=firebaseApp.firestore().collection('users').doc(firebaseApp.auth().currentUser.uid);
//     // console.log(docRef)
  
//     // docRef.get()
//     // .then(doc=> {
//     //     console.log(doc)
//     // })
//     // .catch()

//     // const clientRef = docRef.collection('employees').doc('a1');
//     // console.log(clientRef)

//     // clientRef.get()
//     // .then(doc=> console.log(doc))
//     // .catch(err => console.log(err))

//     // docRef.set({

//     // })


//     return ( 
//         <header>
//             <h2>View All Panel</h2>
//         </header>
//      );
// }
 
// export default ViewAllPanel;


// import React from 'react';
// import firebaseApp from '../../firebase/firebaseConfig'

// const ViewAllPanel = () => {

//     console.log(firebaseApp.auth().currentUser.uid)
    
// // path doc 
// const docRef = firebaseApp.firestore().collection('users').doc(firebaseApp.auth().currentUser.uid)
// const clientRef = docRef.collection('employees').doc('a1')

// docRef.get()
// .then(doc=> console.log(doc))
// .catch(err=> console.log(err))


// clientRef.get()
// .then(doc=> console.log(doc))
// .catch(err=> console.log(err))
// return ( 
// <header><h2>View All Panel</h2></header>
// );

// }
// export default ViewAllPanel;


import React from 'react';
import firebaseApp from './../../firebase/firebaseConfig'

const ViewAllPanel = () => {

// path doc 
const docRef = firebaseApp.firestore().collection('users').doc(firebaseApp.auth().currentUser.uid)
const clientRef = docRef.collection('employees').doc('a1')

docRef.get()
.then(doc=>{
console.log(doc.data())
})
.catch(error=>{
console.log(error)
})

clientRef.get()
.then(doc=> {
    console.log(doc.data())
})
.then(err=> console.log(err))

return ( 
<header><h2>View All Panel</h2></header>
);

}
export default ViewAllPanel;