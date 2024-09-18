document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        // Create the user object to send to the backend
        const user = {
            username: name,
            email: email,
            password: password
        };

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message || "Registro exitoso");
                
                // Redirect the user to the login page after registration
                window.location.href = "/Frontend/Src/pages/Login.html";
            } else {
                const errorData = await response.json();
                alert(errorData.error || "Error en el registro");
            }
        } catch (error) {
            console.error("Error en el registro:", error);
            alert("Hubo un error en el servidor");
        }
    });
});
