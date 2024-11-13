export default async function createCar(messageBody) {
    try {
        const res = await fetch('/api/v1/createCar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageBody)
        });

        if (!res.ok) {
            return alert("Error creating car!")
        }

        const data = await res.json();
        if (data.error) {
            return alert(data.error)
        }

        alert("Car created successfully!");
        return data;
    } catch (error) {
        console.error(`Error durring car creation: ${error}`);
        return null;
    }
};