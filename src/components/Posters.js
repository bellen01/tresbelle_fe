import React, { useState, useEffect } from 'react'
// import { collection, query, orderBy, onSnapshot, getDocs } from 'firebase/firestore';
// import { db } from '../config';

function Posters() {
    // const colRef = collection(db, 'posters');
    // const [posters, setPosters] = useState([]);



    // useEffect(() => {
    //     const q = query(colRef, orderBy('created', 'desc'))
    //     onSnapshot(q, (querySnapshot) => {
    //         setPosters(querySnapshot.docs.map(doc => ({
    //             id: doc.id,
    //             data: doc.data()
    //         })))
    //     })
    //     console.log(posters);
    // }, [])

    return (
        <div>
            <div>
                {/* {posters.map((poster) => (
                    <div key={poster.id}></div>
                ))} */}
            </div>
        </div>
    )
}

export default Posters