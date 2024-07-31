document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('registerBtn');
    const signInClassBtn = document.getElementById('signInClassBtn');

    if (registerBtn) {
        registerBtn.addEventListener('click', async function() {
            try {
                // Fetch registration options from the PHP endpoint
                const response = await fetch('register.php');
                const options = await response.json();

                // Prepare WebAuthn options
                const publicKey = {
                    challenge: Uint8Array.from(atob(options.challenge), c => c.charCodeAt(0)),
                    rp: options.rp,
                    user: options.user,
                    pubKeyCredParams: options.pubKeyCredParams,
                    authenticatorSelection: options.authenticatorSelection,
                    timeout: 60000,
                    attestation: 'direct'
                };

                // Create a new credential
                const credential = await navigator.credentials.create({ publicKey });

                // Send the credential to PHP for verification
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
                alert('Registration failed! Check the console for details.');
            }
        });
    }

    if (signInClassBtn) {
        signInClassBtn.addEventListener('click', function() {
            window.location.href = 'year-selection.html';
        });
    }
});
