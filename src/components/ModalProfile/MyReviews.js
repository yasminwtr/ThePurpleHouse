import React, { useState, useContext, useEffect } from 'react';
import api from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from '../../services/contexts/auth'
import { FaStar } from 'react-icons/fa'
import { Button } from 'antd';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MyReviews = (props) => {
    const { servicesReviewed, setServicesReviewed, getServicesReviewed } = props
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleCloseError = () => setShowError(false);
    const handleCloseSuccess = () => setShowSuccess(false);

    const deleteReview = async (deleteId) => {
        const requestOptions = {
            method: 'delete',
            headers: { 'Content-type': 'aplication/json' }
        }
        try {
            await fetch(`http://localhost:3001/reviews/` + deleteId, requestOptions)
            setServicesReviewed(servicesReviewed.filter(worker => worker.idreview !== deleteId))
            setShowSuccess(true)
            getServicesReviewed()

        } catch (error) {
            setShowError(true)
        }
    }

    return (
        <div>
            {
                servicesReviewed.map((worker) => {
                    if (worker.stars == 5) {
                        const [year, month, day] = worker.datereview.split("T", 10)[0]?.split("-")
                        const formattedDateReview = `${day}/${month}/${year}`

                        return <>
                            <div className='individual-avaliation-modal' key={worker.idreview}>
                                <div className='block-avaliation-modal'>
                                    <div className='part1-avaliation-modal'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation-modal'>{worker.firstnameworker} {worker.lastnameworker}, {worker.titleservice}, {formattedDateReview}</p>
                                        <div><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /></div>
                                    </div>

                                    <Button id='delete-review-button' onClick={() => deleteReview(worker.idreview)}>Excluir</Button>
                                </div>

                                <p id='text-avaliation-modal'>{worker.messagereview}</p>
                            </div></>

                    } else if (worker.stars == 4) {
                        const [year, month, day] = worker.datereview.split("T", 10)[0]?.split("-")
                        const formattedDateReview = `${day}/${month}/${year}`

                        return <>
                            <div className='individual-avaliation-modal' key={worker.idreview}>
                                <div className='block-avaliation-modal'>
                                    <div className='part1-avaliation-modal'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation-modal'>{worker.firstnameworker} {worker.lastnameworker}, {worker.titleservice}, {formattedDateReview}</p>
                                        <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#d9d9d9' size={20} /></div>
                                    </div>

                                    <Button id='delete-review-button' onClick={() => deleteReview(worker.idreview)}>Excluir</Button>
                                </div>

                                <p id='text-avaliation-modal'>{worker.messagereview}</p>
                            </div></>

                    } else if (worker.stars == 3) {
                        const [year, month, day] = worker.datereview.split("T", 10)[0]?.split("-")
                        const formattedDateReview = `${day}/${month}/${year}`

                        return <>
                            <div className='individual-avaliation-modal' key={worker.idreview}>
                                <div className='block-avaliation-modal'>
                                    <div className='part1-avaliation-modal'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation-modal'>{worker.firstnameworker} {worker.lastnameworker}, {worker.titleservice}, {formattedDateReview}</p>
                                        <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /></div>
                                    </div>

                                    <Button id='delete-review-button' onClick={() => deleteReview(worker.idreview)}>Excluir</Button>
                                </div>

                                <p id='text-avaliation-modal'>{worker.messagereview}</p>
                            </div></>

                    } else if (worker.stars == 2) {
                        const [year, month, day] = worker.datereview.split("T", 10)[0]?.split("-")
                        const formattedDateReview = `${day}/${month}/${year}`

                        return <>
                            <div className='individual-avaliation-modal' key={worker.idreview}>
                                <div className='block-avaliation-modal'>
                                    <div className='part1-avaliation-modal'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation-modal'>{worker.firstnameworker} {worker.lastnameworker}, {worker.titleservice}, {formattedDateReview}</p>
                                        <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /></div>
                                    </div>

                                    <Button id='delete-review-button' onClick={() => deleteReview(worker.idreview)}>Excluir</Button>
                                </div>

                                <p id='text-avaliation-modal'>{worker.messagereview}</p>
                            </div></>

                    } else if (worker.stars == 1) {
                        const [year, month, day] = worker.datereview.split("T", 10)[0]?.split("-")
                        const formattedDateReview = `${day}/${month}/${year}`

                        return <>
                            <div className='individual-avaliation-modal' key={worker.idreview}>
                                <div className='block-avaliation-modal'>
                                    <div className='part1-avaliation-modal'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation-modal'>{worker.firstnameworker} {worker.lastnameworker}, {worker.titleservice}, {formattedDateReview}</p>
                                        <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /></div>
                                    </div>

                                    <Button id='delete-review-button' onClick={() => deleteReview(worker.idreview)}>Excluir</Button>
                                </div>

                                <p id='text-avaliation-modal'>{worker.messagereview}</p>
                            </div></>
                    }
                })
            }

            <Snackbar open={showError} autoHideDuration={6000} onClose={handleCloseError} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
                <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
                    Não foi possível completar a exclusão. Por favor, tente novamente mais tarde.
                </Alert>
            </Snackbar>

            <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleCloseSuccess} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
                <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
                    Avaliação excluída com sucesso!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default MyReviews; 