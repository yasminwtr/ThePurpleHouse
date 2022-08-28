import React, { useState, useContext, useEffect } from 'react';
import '../styles.css'
import api from "../../../../api";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from '../../../contexts/auth'
import { FaStar } from 'react-icons/fa'

const Stars = (props) => {
    const { user } = useContext(AuthContext);
    const [servicesReviewed, setServicesReviewed] = useState([]);

    async function getServicesReviewed(idperson) {
        try {
            const response = await api.get(`/servicesReviewed/${idperson}`);
            return setServicesReviewed(response.data)

        } catch (error) {
            setServicesReviewed([])
        }
    }

    useEffect(() => {
        getServicesReviewed(user.idperson)
    }, [])

    return (
        <div>
            {
                servicesReviewed.map((worker) => {
                    if (worker.stars == 5) {
                        return <>
                            <div className='individual-avaliation-modal' key={worker.idreview}>
                                <div className='block-avaliation-modal'>
                                    <div className='part1-avaliation-modal'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation-modal'>{worker.fullnameworker}, {worker.titleservice}</p>
                                        <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /></div>
                                    </div>
                                </div>

                                <p id='text-avaliation-modal'>{worker.messagereview}</p>
                            </div></>

                    } else if (worker.stars == 4) {
                        return <>
                            <div className='individual-avaliation-modal' key={worker.idreview}>
                                <div className='block-avaliation-modal'>
                                    <div className='part1-avaliation-modal'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation-modal'>{worker.fullnameworker}, {worker.titleservice}</p>
                                        <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#d9d9d9' size={20} /></div>
                                    </div>
                                </div>

                                <p id='text-avaliation-modal'>{worker.messagereview}</p>
                            </div></>

                    } else if (worker.stars == 3) {
                        return <>
                            <div className='individual-avaliation-modal' key={worker.idreview}>
                                <div className='block-avaliation-modal'>
                                    <div className='part1-avaliation-modal'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation-modal'>{worker.fullnameworker}, {worker.titleservice}</p>
                                        <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /></div>
                                    </div>
                                </div>

                                <p id='text-avaliation-modal'>{worker.messagereview}</p>
                            </div></>

                    } else if (worker.stars == 2) {
                        return <>
                            <div className='individual-avaliation-modal' key={worker.idreview}>
                                <div className='block-avaliation-modal'>
                                    <div className='part1-avaliation-modal'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation-modal'>{worker.fullnameworker}, {worker.titleservice}</p>
                                        <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /></div>
                                    </div>
                                </div>

                                <p id='text-avaliation-modal'>{worker.messagereview}</p>
                            </div></>

                    } else if (worker.stars == 1) {
                        return <>
                            <div className='individual-avaliation-modal' key={worker.idreview}>
                                <div className='block-avaliation-modal'>
                                    <div className='part1-avaliation-modal'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation-modal'>{worker.fullnameworker}, {worker.titleservice}</p>
                                        <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /></div>
                                    </div>
                                </div>

                                <p id='text-avaliation-modal'>{worker.messagereview}</p>
                            </div></>
                    }
                })
            }
        </div>
    )
}

export default Stars; 