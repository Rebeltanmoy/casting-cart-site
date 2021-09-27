import React from 'react';
import './Programmer.css';

const Programmer = (props) => {
    // console.log(props.handleCart)
    // Destructuring Data from props:
    const { handleCart } = props;
    const { name, age, img, role, salary, indestry } = props.programmer;
    return (
        <div>
            <div className="col ">
                <div className="card h-100">
                    <img src={img} className="rounded-circle  mx-auto pt-2" alt="Cinque Terre" width="200" height="200" />
                    <div className="card-body text-center">
                        <h5 className="card-title ">{name}</h5>
                        <h5 className="card-text ">Age: {age}</h5>
                        <h4>Salary: ${salary}</h4>
                        <h6>Role: {role}</h6>
                        <h6>Indestry: {indestry}</h6>
                        <button onClick={() => handleCart(props.programmer)} type="button" className="btn text-dark mt-2 btn-outline-primary"><i className="fas fa-plus-square"></i> &nbsp; Select Programmer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programmer;