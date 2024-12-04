// Login Page
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevents empty form submission
    
    // Handle inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            window.location.href = '/tasks.html'; // Redirect user to tasks page
        } else {
            alert(result.error);
        }
    } catch (error) {
        console.error('Error', error);
        alert('Something went wrong. Please try again.');
    }
});





// Signup Page
document.getElementById('signupForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Handle input variables
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Send POST request to the server
        const response = await fetch('/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const result = await response.json();

        if (response.ok) {
            // Success: Notify the user
            alert(result.message); // 'User registered successfully'
            window.location.href = '/login.html'; // Redirect to the login page
        } else {
            // Error: Display the error message
            alert(result.error); // 'User already exists'
        }
    } catch (error) {
        console.error('Error', error);
        alert('Something went wrong. Please try again.');
    }
});

