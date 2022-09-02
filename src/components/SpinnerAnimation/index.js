import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

export const SpinnerAnimation = () => {
    const [openSpinner, setOpenSpinner] = useState(false);

    function filterLocation() {
        setOpenSpinner(true)
    }
    return (
        <div>
            <Button variant="success" onClick={() => filterLocation}>
                Filtrar
                <Spinner animation="border" size="sm" value={openSpinner} />
            </Button>
        </div>
    )
}
