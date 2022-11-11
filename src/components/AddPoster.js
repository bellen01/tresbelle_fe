import React, { useState } from 'react'

function AddPoster() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [size1, setSize1] = useState('');
    const [price1, setPrice1] = useState('');
    const [size2, setSize2] = useState('');
    const [price2, setPrice2] = useState('');


    // {
    //     title: '',
    //     description: '',
    //     sizeAndPrice: [{
    //         size: '',
    //         price: 0
    //     },
    //     {
    //         size: '',
    //         price: 0
    //     }]
    // });

    const newPoster = {
        title: title,
        description: description,
        sizeAndPrice: [{
            size: size1,
            price: price1
        },
        {
            size: size2,
            price: price2
        }]
    }


    return (
        <div>
            <h1>Add new poster</h1>
            <form>
                <input
                    type="text"
                    name="title"
                    value={title}
                    placeholder="Titel"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    name="Beskrivning"
                    rows="10"
                    cols="30"
                    value={description}
                    placeholder="Beskrivning"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <label for="size1">Välj storlek</label>
                <select
                    onChange={(e) => setSize1(e.target.value)}
                    value={size1}
                >
                    <option value="13x18">13x18</option>
                    <option value="21x30">21x30</option>
                </select>
                <label for="price1">Välj pris</label>
                <select
                    onChange={(e) => setPrice1(e.target.value)}
                    value={price1}
                >
                    <option value="54">54</option>
                    <option value="89">89</option>
                </select>
                <label for="size2">Välj storlek</label>
                <select
                    onChange={(e) => setSize2(e.target.value)}
                    value={size2}
                >
                    <option value="13x18">13x18</option>
                    <option value="21x30">21x30</option>
                </select>
                <label for="price2">Välj pris</label>
                <select
                    onChange={(e) => setPrice2(e.target.value)}
                    value={price2}
                >
                    <option value="54">54</option>
                    <option value="89">89</option>
                </select>
            </form>
        </div>
    )
}

export default AddPoster