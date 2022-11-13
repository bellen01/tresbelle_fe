import React, { useState } from 'react';
import styles from '../styles/AddPoster.module.css';

function AddPoster() {
    const [size1, setSize1] = useState('');
    const [price1, setPrice1] = useState('');



    const [poster, setPoster] = useState({
        title: '',
        description: '',
        sizeAndPrice: []
    })



    // const newPoster = {
    //     title: title,
    //     description: description,
    //     sizeAndPrice: [{
    //         size: size1,
    //         price: price1
    //     },
    //     {
    //         size: size2,
    //         price: price2
    //     }]
    // }

    // console.log(newPoster);

    const handleFormData = (name, value) => {
        setPoster({
            ...poster,
            [name]: value
        })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        // setPoster(newPoster);
        console.log(poster);
        try {
            const response = await fetch('http://localhost:3005/admin/addposter', {
                method: 'POST',
                body: JSON.stringify(poster),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {

        }
    }

    const onClickHandler = () => {
        console.log('sven');
        if (size1 !== '' && price1 !== '') {
            console.log('sven inne');
            setPoster({
                ...poster, sizeAndPrice: [...poster.sizeAndPrice, { size: size1, price: price1 }]
            });
            console.log('poster i onClickHandler', poster);
        }
    }


    return (
        <div className={styles.formContainer}>
            <h1>Lägg till ny produkt</h1>
            <form onSubmit={onSubmitHandler} className={styles.form}>
                <div className={styles.input}>
                    <input
                        type="text"
                        name="title"
                        value={poster.title}
                        placeholder="Titel"
                        onChange={(e) => {
                            const { name, value } = e.target; //tar ut name och value från e.target-objektet
                            handleFormData(name, value);
                        }}
                    // required
                    />
                </div>
                <div>
                    <textarea
                        name="description"
                        rows="10"
                        cols="30"
                        value={poster.description}
                        placeholder="Beskrivning"
                        onChange={(e) => {
                            handleFormData(e.target.name, e.target.value); //annat sätt att skriva på
                        }}
                    // required
                    />
                </div>
                <div>
                    {poster.sizeAndPrice.map((sp) => (
                        <p key={sp.size}>Valt: {sp.size} & {sp.price}</p>
                    ))}
                </div>
                <div>
                    <label htmlFor="size1">Välj storlek</label>
                    <select
                        onChange={(e) => setSize1(e.target.value)}
                        value={size1}
                    >
                        <option defaultValue="">välj</option>
                        <option value="13x18">13x18</option>
                        <option value="21x30">21x30</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="price1">Välj pris</label>
                    <select
                        onChange={(e) => setPrice1(e.target.value)}
                        value={price1}
                    >
                        <option defaultValue="">välj</option>
                        <option value="54">54</option>
                        <option value="89">89</option>
                    </select>
                    <div>
                        <input type="button" onClick={onClickHandler} value="Lägg till storlek" />
                    </div>
                </div>
                <button type="submit" className={styles.submitButton}>Lägg till produkt</button>
            </form>
        </div>
    )
}

export default AddPoster