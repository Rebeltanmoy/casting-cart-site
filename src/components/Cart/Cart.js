import React from 'react';
import SelectedProgrammer from '../SelectedProgrammer/SelectedProgrammer';
import './Cart.css';

const Cart = (props) => {
    const { selectedProgrammers } = props;
    // Calculate Total Cost:
    let totalCost = 0;
    for (let programmer of selectedProgrammers) {
        totalCost = totalCost + programmer.salary;
    }
    return (
        <div>
            <h5><i class="fas fa-user-plus text-info"></i> Added Programmers: {selectedProgrammers.length}</h5>
            <h5><i className="fas fa-money-check-alt text-info"></i> Total Cost: <i class="fas fa-dollar-sign text-info"></i>&nbsp;{totalCost}</h5>
            <div className="row mt-3">
                {
                    selectedProgrammers.map(sProgrammer => <SelectedProgrammer
                        key={sProgrammer.id}
                        sProgrammer={sProgrammer}
                    >
                    </SelectedProgrammer>)
                }
            </div>
        </div>
    );
};

export default Cart;