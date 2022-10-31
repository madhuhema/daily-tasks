// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPctUn95WY-JiRUsUZPuIKlCdDbaLTCDc",
    authDomain: "dailytasks-5f2da.firebaseapp.com",
    projectId: "dailytasks-5f2da",
    storageBucket: "dailytasks-5f2da.appspot.com",
    messagingSenderId: "1006146371424",
    appId: "1:1006146371424:web:dbc91f42881ceb41e6a805",
    measurementId: "G-K3KZH74ET6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

var tasks = [];

async function viewTasks() {
    var snapShot = await getTasks();
    snapShot.foreach((task) => {
        tasks.push(task.data);
    })
}

async function getTasks() {
    var querySnapshot = await getDocs(collection(db, 'tasks'));
    return querySnapshot;
}
