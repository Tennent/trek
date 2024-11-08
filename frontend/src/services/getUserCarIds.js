export default async function getUserCarIds(userId) {
    try {
        const res = await fetch(`/api/v1/user/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            return alert("Error collecting car IDs!")
        }

        const data = await res.json();
        if (data.error) {
            return alert(data.error)
        }

        const carIds = data.cars;
        return carIds;
    } catch (error) {
        console.error(`Error durring car ID collection: ${error}`);
        return null;
    }
};