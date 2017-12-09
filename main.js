//Initialize firebase
var config = {
    apiKey: "AIzaSyCAWztQACFX3RPXGeQo45ZvnUgl6rrvou0",
    authDomain: "my-website-7e3a4.firebaseapp.com",
    databaseURL: "https://my-website-7e3a4.firebaseio.com",
    projectId: "my-website-7e3a4",
    storageBucket: "",
    messagingSenderId: "911465838231"
};
firebase.initializeApp(config);

// Refference messages collection
var messagesRef = firebase.database().ref('messages');

//listen for submission
document.getElementById('ContactForm').addEventListener('submit', submitForm);


// Submit Form  
function submitForm(e){
    e.preventDefault();

    //Get Values
    var name = getInputVal('Name');
    var company = getInputVal('Company')
    var email = getInputVal('Email');
    var phone = getInputVal('Phone');
    var message = getInputVal('message');
    

    // Saves message 
    saveMessage(name, company, email, phone, message);

    //Show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
}

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save messages to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name, 
        company: company, 
        email: email, 
        phone: phone, 
        message: message
    });
}