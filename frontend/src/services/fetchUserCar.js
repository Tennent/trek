export default async function fetchUserCar(carId) {
    try {
        const res = await fetch(`/api/v1/car/${carId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            return alert("Error collecting car details!")
        }

        const data = await res.json();
        if (data.error) {
            return alert(data.error)
        }

        return data;
    } catch (error) {
        console.error(`Error durring car detail collection: ${error}`);
        return null;
    }
};