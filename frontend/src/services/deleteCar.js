export default async function deleteCar(carId) {
    try {
        const res = await fetch(`/api/v1/car/${carId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!res.ok) {
            return alert("Error deleting car!")
        }

        const data = await res.json();
        if (data.error) {
            return alert(data.error)
        }

        alert("Car deleted successfully!");
        return data;
    } catch (error) {
        console.error(`Error durring car deeltion: ${error}`);
        return null;
    }
};