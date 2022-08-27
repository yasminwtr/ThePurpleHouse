import React, { useState, useContext, useEffect } from 'react';
import '../styles.css'
import api from "../../../../api";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from '../../../contexts/auth'
import { FaStar } from 'react-icons/fa'

const Stars = (props) => {
    const { user } = useContext(AuthContext);
    const [workersReviewed, setWorkersReviewed] = useState([]);

    async function getWorkersReviewed(idperson) {
        try {
            const response = await api.get(`/workersReviewed/${idperson}`);
            return setWorkersReviewed(response.data)

        } catch (error) {
            setWorkersReviewed([])
        }
    }

    useEffect(() => {
        getWorkersReviewed(user.idperson)
    }, [])

    return (
        <div>
            {
                workersReviewed.map((item) => {
                    if (item.stars == 5) {
                        return <>
                            <div className='individual-avaliation-modal' key={item.idreview}>
                                <div className='block-avaliation-modal'>
                                    <div className='part1-avaliation-modal'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation-modal'>{item.fullnameworker}, {item.titleservice}</p>
                                        <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /></div>
                                    </div>
                                </div>

                                <p id='text-avaliation-modal'>{item.messagereview}</p>
                            </div></>

                    } else if (item.stars == 4) {
                        return <>
                            <div className='individual-avaliation-modal' key={item.idreview}>
                                <div className='block-avaliation-modal'>
                                    <div className='part1-avaliation-modal'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation-modal'>{item.fullnameworker}, {item.titleservice}</p>
                                        <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#d9d9d9' size={20} /></div>
                                    </div>
                                </div>

                                <p id='text-avaliation-modal'>{item.messagereview}</p>
                            </div></>

                    } else if (item.stars == 3) {
                        return <>
                            <div className='individual-avaliation-modal' key={item.idreview}>
                                <div className='block-avaliation-modal'>
                                    <div className='part1-avaliation-modal'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation-modal'>{item.fullnameworker}, {item.titleservice}</p>
                                        <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /></div>
                                    </div>
                                </div>

                                <p id='text-avaliation-modal'>{item.messagereview}</p>
                            </div></>

                    } else if (item.stars == 2) {
                        return <>
                            <div className='individual-avaliation-modal' key={item.idreview}>
                                <div className='block-avaliation-modal'>
                                    <div className='part1-avaliation-modal'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation-modal'>{item.fullnameworker}, {item.titleservice}</p>
                                        <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /></div>
                                    </div>
                                </div>

                                <p id='text-avaliation-modal'>{item.messagereview}</p>
                            </div></>

                    } else if (item.stars == 1) {
                        return <>
                            <div className='individual-avaliation-modal' key={item.idreview}>
                                <div className='block-avaliation-modal'>
                                    <div className='part1-avaliation-modal'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation-modal'>{item.fullnameworker}, {item.titleservice}</p>
                                        <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /></div>
                                    </div>
                                </div>

                                <p id='text-avaliation-modal'>{item.messagereview}</p>
                            </div></>
                    }
                })
            }
        </div>
    )
}

export default Stars; 