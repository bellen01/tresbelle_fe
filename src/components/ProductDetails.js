import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ProductDetails() {
    const { id } = useParams()
    const [productData, setProductData] = useState();

    const getProductDetails = async () => {
        if (id) {
            console.log(id);
            try {
                const response = await fetch('http://localhost:3005/product/' + id);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error('Något gick fel, testa att ladda om sidan');
                }
                console.log(data);
                return setProductData(data);
            } catch (error) {
                console.log('Internt fel', error);
            }
        }
    }
    console.log(productData);

    useEffect(() => {
        getProductDetails();
    }, []); //Kan inte sätta productData där, skapar infinit loop

    return (
        <div>
            {productData ? (
                <div>
                    <h2>{productData.data.title}</h2>
                    <p>{productData.data.description}</p>
                    <button>Köp</button>
                </div>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    )
}

export default ProductDetails