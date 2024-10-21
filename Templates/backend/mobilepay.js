document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const username = document.getElementById('name').value;
    const nationalID = document.getElementById('National ID').value;
    const amount = document.getElementById('Amount').value;


    if (amount < 500 ){
        alert("Amount should be R500 & greater.");
    }
    else{
        // Optionally, you can redirect to a success page
        window.location.href = './success.html';
    }
});

