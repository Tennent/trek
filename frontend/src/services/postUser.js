export default async function postUser(messageBody) {
    try {
        const res = await fetch(`/api/v1/registerUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageBody)
        })

        const data = await res.json();

        if (data.error) {
            return alert(data.error)
        }

        if (!res.ok) {
            return alert("User registration failed!");
        }

        alert("User created successfully!");
        return data;

    } catch (err) {
        console.error("Error creating user:", err);
    }
}