import React, { useState, useEffect } from 'react';
import api from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from 'react-icons/fa'
import { useLocation } from 'react-router-dom';

const WorkerComplaints = (props) => {
  const { workerComplaints } = props

  return (
    <div>
      {
        workerComplaints.map((denounce) => {
            const [year, month, day] = denounce.denouncedate.split("T", 10)[0]?.split("-")
            const formattedDateDenounce = `${day}/${month}/${year}`

            return <>
              <div key={denounce.iddenounce}>
                <div className='block-avaliation'>
                  <div className='part1-avaliation'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation' alt="Profile" />
                  </div>

                  <div className='all-info-avaliation'>
                    <div className='info-avaliation'>
                      <p id='name-avaliation'>{denounce.firstname} {denounce.lastname}</p>
                      <p id='date-avaliation'>{formattedDateDenounce}</p>
                    </div>

                    <div>{denounce.selectedoption}</div>
                  </div>
                </div>

                <p id='text-avaliation'>{denounce.description}</p>
              </div></>
        })
      }
    </div>
  )
}

export default WorkerComplaints; 