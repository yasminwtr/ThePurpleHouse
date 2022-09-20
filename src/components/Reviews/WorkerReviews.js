import React, { useState, useEffect } from 'react';
import '../../Pages/WorkerProfile/styles.css'
import api from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from 'react-icons/fa'
import { useLocation } from 'react-router-dom';

const WorkerReviews = (props) => {
    const location = useLocation();
    const [workerReviews, setWorkerReviews] = useState([]);

    async function getReviewsByWorker() {
        const idWorker = location.state.workerId
        try {
            const response = await api.get(`/reviewsByWorker/${idWorker}`);
            console.log(response);
            return setWorkerReviews(response.data)

        } catch (error) {
            setWorkerReviews([])
        }
    }

    useEffect(() => {
        getReviewsByWorker()
    }, [])

    return (
        <div>
            {
                workerReviews.map((review) => {
                    if (review.stars == 5) {
                        return <>
                            <div key={review.idreview}>
                                <div className='block-avaliation'>
                                    <div className='part1-avaliation'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation'>{review.firstnameperson} {review.lastnameperson}</p>
                                        <div><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /></div>
                                    </div>
                                </div>

                                <p id='text-avaliation'>{review.messagereview}</p>
                            </div></>

                    } else if (review.stars == 4) {
                        return <>
                            <div key={review.idreview}>
                                <div className='block-avaliation'>
                                    <div className='part1-avaliation'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation'>{review.firstnameperson} {review.lastnameperson}</p>
                                        <div><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#d9d9d9' size={18} /></div>
                                    </div>
                                </div>

                                <p id='text-avaliation'>{review.messagereview}</p>
                            </div></>

                    } else if (review.stars == 3) {
                        return <>
                            <div key={review.idreview}>
                                <div className='block-avaliation'>
                                    <div className='part1-avaliation'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation'>{review.firstnameperson} {review.lastnameperson}</p>
                                        <div><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /></div>
                                    </div>
                                </div>

                                <p id='text-avaliation'>{review.messagereview}</p>
                            </div></>

                    } else if (review.stars == 2) {
                        return <>
                            <div key={review.idreview}>
                                <div className='block-avaliation'>
                                    <div className='part1-avaliation'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation'>{review.firstnameperson} {review.lastnameperson}</p>
                                        <div><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /></div>
                                    </div>
                                </div>

                                <p id='text-avaliation'>{review.messagereview}</p>
                            </div></>

                    } else if (review.stars == 1) {
                        return <>
                            <div key={review.idreview}>
                                <div className='block-avaliation'>
                                    <div className='part1-avaliation'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation' alt="Profile" />
                                    </div>

                                    <div>
                                        <p id='name-avaliation'>{review.firstnameperson} {review.lastnameperson}</p>
                                        <div><FaStar color='#fccc3e' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /></div>
                                    </div>
                                </div>

                                <p id='text-avaliation'>{review.messagereview}</p>
                            </div></>

                    }
                })
            }
        </div>
    )
}

export default WorkerReviews; 