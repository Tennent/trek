export default async function updateCar(messageBody) {
    try {
        const res = await fetch(`/api/v1/updateCar/${messageBody._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageBody)
        });

        if (!res.ok) {
            return alert("Error updating car!")
        }

        const data = await res.json();
        if (data.error) {
            return alert(data.error)
        }

        alert("Car updated successfully!");
        return data;
    } catch (error) {
        console.error(`Error durring car update: ${error}`);
        return null;
    }
};