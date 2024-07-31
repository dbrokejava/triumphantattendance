document.getElementById('registerBtn').addEventListener('click', async function() {
    try {
        const response = await fetch('register.php');
        const options = await response.json();
        const credential = await navigator.credentials.create({ publicKey: options });
        await fetch('register_response.php', {
            method: 'POST',
            body: JSON.stringify(credential),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        alert('Registration successful!');
    } catch (err) {
        console.error('Registration error:', err);
        alert('Registration failed!');
    }
});

document.getElementById('signInClassBtn').addEventListener('click', function() {
    window.location.href = 'year-selection.html';
});

function selectYear(year) {
    alert('You selected year ' + year);
    // Additional logic for year selection can be added here
}
