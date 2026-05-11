document.getElementById('regForm').onsubmit = function(e) {
    let p1 = document.getElementById('pass').value;
    let p2 = document.getElementById('confirm').value;
    let msg = document.getElementById('msg');

    if (p1 !== p2) {
        e.preventDefault(); // Stops the form from sending
        msg.innerText = "Passwords do not match!";
    } else {
        alert("Registration successful!");
    }
};
