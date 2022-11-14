import React, { useState } from 'react';
import styles from '../styles/AddPoster.module.css';
import Select from 'react-select';

function AddPoster() {
    const [size1, setSize1] = useState('');
    const [price1, setPrice1] = useState('');
    const [successOrFailureMessage, setSucessOrFailureMessage] = useState('');



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
        setPoster({
            title: '',
            description: '',
            sizeAndPrice: []
        })
        setSize1('');
        setPrice1('');
        console.log(poster);
        try {
            const response = await fetch('http://localhost:3005/addposter', {
                method: 'POST',
                body: JSON.stringify(poster),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                if (response.status === 412) {
                    throw new Error('Vänligen fyll i titel');
                } else if (response.status === 417) {
                    throw new Error('Vänligen fyll i beskrivning av produkten');
                } else if (response.status === 406) {
                    throw new Error('Vänligen fyll i storlek och pris');
                } else {
                    throw new Error('Något gick fel, försök igen senare');
                }
            }

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                if (response.status === 200) {
                    setSucessOrFailureMessage(`Produkten har lagts till, med id ${data.id}`);
                }
            }

        } catch (error) {
            console.log('något gick fel', error);
            setSucessOrFailureMessage(error.message);
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
                <div className={styles.customSelect}>
                    <select
                        onChange={(e) => setSize1(e.target.value)}
                        value={size1}
                    >
                        <option defaultValue="">Välj storlek</option>
                        <option value="13x18">13x18</option>
                        <option value="21x30">21x30</option>
                    </select>
                </div>
                <div>
                    <select
                        onChange={(e) => setPrice1(e.target.value)}
                        value={price1}
                    >
                        <option defaultValue="">Välj pris</option>
                        <option value="54">54</option>
                        <option value="89">89</option>
                    </select>
                </div>
                <div className={styles.addSizeAndPriceButtonContainer}>
                    <div>
                        <input className={styles.addSizeAndPriceButton} type="button" onClick={onClickHandler} value="Lägg till storlek" />
                    </div>
                </div>
                <button type="submit" className={styles.submitButton}>Lägg till produkt</button>
                <div>
                    {successOrFailureMessage}
                </div>
            </form>
        </div>
    )
}

export default AddPoster