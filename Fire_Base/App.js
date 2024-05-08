// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcmCOZTlJwIXE7rfXEnYteWIk_6IQX1Q4",
    authDomain: "fir-db-fdf0d.firebaseapp.com",
    databaseURL: "https://fir-db-fdf0d-default-rtdb.firebaseio.com",
    projectId: "fir-db-fdf0d",
    storageBucket: "fir-db-fdf0d.appspot.com",
    messagingSenderId: "905274450804",
    appId: "1:905274450804:web:861ef0fab49cbcda610221",
    measurementId: "G-NHR8HCTRTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
    getDatabase, set, update, remove, ref, child
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";


const db = getDatabase();

var enterID = document.querySelector("#enterID");
var enterName = document.querySelector("#enterName");
var enterAge = document.querySelector("#enterAge");
var findId = document.querySelector("#findId");
var findName = document.querySelector("#findName");
var findAge = document.querySelector("#findAge");
var insertBtn = document.querySelector("#insert");
var updateBtn = document.querySelector("#update");
var removeBtn = document.querySelector("#remove");
var findBtn = document.querySelector("#find");

function InsertData() {
    set(ref(db, "People/" + enterID.value), {
        Name: enterName.value,
        ID: enterID.value,
        Age: enterAge.value
    })
        .then(() => {
            alert("Data added successfully!")
        })
        .catch((error) => {
            alert(error)
        });
}

function FindData() {
    const dbref = ref(db);

    get(child(dbref, "People/" + findId.value))
        .then((snapshot) => {
            if (snapshot.exists()) {
                findName.value = "Name: " + snapshot.val().Name;
                findAge.value = "Age: " + snapshot.val().Age;
            } else {
                alert("No data found");
            }
        })
        .catch((error) => {
            alert(error)
        })

}

function UpdateData() {
    update(ref(db, "People/" + enterID.value), {
        Name: enterName.value,
        Age: enterAge.value
    })
        .then(() => {
            alert("Data updated successfully!");
        })
        .catch((error) => {
            alert(error);
        });
}

function RemoveData() {
    remove(ref(db, "People/" + enterID.value))
        .then(() => {
            alert("Data removed successifully!");
        })
        .catch((error) => {
            alert(error);
        });
}

insertBtn.addEventListener('click', InsertData);
updateBtn.addEventListener('click', UpdateData);
removeBtn.addEventListener('click', RemoveData);
findBtn.addEventListener('click', FindData);
