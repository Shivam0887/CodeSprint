import localBase from "localbase";
import data from "./data/loveBabbar";
import striverData from "./data/striver";
import apnaCollege from "./data/apnaCollege";

let db = new localBase("db");
db.config.debug = false;

export function insertData(callback, author) {
  if (author === "babbar") {
    data.forEach((topic) => {
      db.collection("loveBabbar").add(
        topic,
        topic.topicName.replace(/[^A-Z]+/gi, "").toLowerCase()
      );
    });
    getBabbarData(callback);
  }
  if (author === "striver") {
    striverData.forEach((topic) => {
      db.collection("striver").add(
        topic,
        topic.topicName.replace(/[^A-Z]+/gi, "").toLowerCase()
      );
    });
    getStriverData(callback);
  }
  if (author === "apnaCollege") {
    apnaCollege.forEach((topic) => {
      db.collection("apnaCollege").add(
        topic,
        topic.topicName.replace(/[^A-Z]+/gi, "").toLowerCase()
      );
    });
    getData(callback);
  }
}

export function getBabbarData(callback) {
  db.collection("loveBabbar")
    .get()
    .then((data) => {
      if (data.length === 0) insertData(callback, "babbar");
      else {
        data.sort((a, b) => a.position - b.position);
        callback(data);
      }
    });
}

export function getStriverData(callback) {
  db.collection("striver")
    .get()
    .then((striverData) => {
      if (striverData.length === 0) insertData(callback, "striver");
      else {
        striverData.sort((a, b) => a.position - b.position);
        callback(striverData);
      }
    });
}

export function getData(callback) {
  db.collection("apnaCollege")
    .get()
    .then((apnaCollege) => {
      if (apnaCollege.length === 0) insertData(callback, "apnaCollege");
      else {
        apnaCollege.sort((a, b) => a.position - b.position);
        callback(apnaCollege);
      }
    });
}

export function updateDB(key, updatedData, author) {
  if (author === "babbar")
    db.collection("loveBabbar").doc(key).update(updatedData);
  if (author === "striver")
    db.collection("striver").doc(key).update(updatedData);
  if (author === "apnaCollege")
    db.collection("apnaCollege").doc(key).update(updatedData);
}
