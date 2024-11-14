export default async function createMaintenanceEntry(messageBody) {
    try {
        const res = await fetch('/api/v1/car/createMaintenanceEntry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageBody)
        });

        if (!res.ok) {
            return alert("Error creating maintenance entry!")
        }

        const data = await res.json();
        if (data.error) {
            return alert(data.error)
        }

        alert("Maintenance entry created successfully!");
        return data;
    } catch (error) {
        console.error(`Error durring maintenance entry creation: ${error}`);
        return null;
    }
};