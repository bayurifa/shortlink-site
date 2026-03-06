var firebaseConfig = {
apiKey: "AIzaSyCC-5llQ0CpexWaUzqDT-qg4WDBOpdVjho",
authDomain: "bsr-mobile-bb9d6.firebaseapp.com",
databaseURL: "https://bsr-mobile-bb9d6-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "bsr-mobile-bb9d6",
storageBucket: "bsr-mobile-bb9d6.firebasestorage.app",
messagingSenderId: "428696171820",
appId: "1:428696171820:web:8e76a05b9dae2d2c876889"
};

firebase.initializeApp(firebaseConfig);

var db=firebase.database();

function randomCode(){

var chars="abcdefghijklmnopqrstuvwxyz0123456789";

var code="";

for(var i=0;i<6;i++){

code+=chars[Math.floor(Math.random()*chars.length)];

}

return code;

}

function generate(){

var url=document.getElementById("url").value;

var alias=document.getElementById("alias").value || randomCode();

var password=document.getElementById("password").value;

var expire=document.getElementById("expire").value;

db.ref("shortlinks/"+alias).set({

url:url,
password:password || null,
expire:expire || null

});

var short=location.origin+"?"+alias;

document.getElementById("result").innerHTML="Shortlink: "+short;

}
