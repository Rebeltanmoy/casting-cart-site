import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import('./shop.css')

const Shop = () => {
    const [products, serProducts] = useState([]);

    useEffect(() => {
        fetch('./cast.JSON')
            .then(res => res.json())
            .then(data => serProducts(data));
    }, [])
    return (
        return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-9">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            programmers.map(programmer => <Programmer
                                key={programmer.id}
                                programmer={programmer}
                                handleCart={handleCart}
                            >
                            </Programmer>)
                        }
                    </div>
                </div>
                <div className="col-lg-3">
                    <Cart
                        selectedProgrammers={selectedProgrammers}
                    >
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;