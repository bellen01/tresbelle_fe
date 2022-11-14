import React, { useState, useEffect } from 'react'

function Posters() {
    const [posters, setPosters] = useState([]);

    const getProducts = async () => {
        const response = await fetch('http://localhost:3005');
        const data = await response.json();
        console.log(data);
        return setPosters(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <main>
            <h2>Alla posters</h2>
            <div>
                {posters.map((poster) => (
                    <div key={poster.id}>
                        <p>{poster.data.title}</p>
                        <p>Från 54 kr</p>
                    </div>
                ))}
            </div>

        </main>
    )
}

export default Posters