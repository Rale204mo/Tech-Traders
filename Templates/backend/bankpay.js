document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const username = document.getElementById('name').value;
    const nationalID = document.getElementById('NationalID').value;
    const amount = document.getElementById('Amount').value;

    // Check if data already exists in localStorage
    let paymentData = localStorage.getItem('payments');
    if (paymentData) {
        paymentData = JSON.parse(paymentData);
    } else {
        paymentData = [];
    }

    // Save the new entry
    paymentData.push({
        username: username,
        nationalID: nationalID,
        amount: amount
    });

    // Store data in localStorage
    localStorage.setItem('payments', JSON.stringify(paymentData));


    // Optionally, you can redirect to a success page
    window.location.href = './successBank.html';
});

