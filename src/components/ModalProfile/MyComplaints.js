import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ProfileIcon from "../../assets/img/user2.png";
import { Image, Avatar, Button } from 'antd';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MyComplaints = (props) => {
  const { servicesDenounced, setServicesDenounced, getServicesDenounced } = props
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCloseError = () => setShowError(false);
  const handleCloseSuccess = () => setShowSuccess(false);

  const deleteComplaint = async (deleteId) => {
    const requestOptions = {
      method: 'delete',
      headers: { 'Content-type': 'aplication/json' }
    }
    try {
      await fetch(`http://localhost:3001/denounce/` + deleteId, requestOptions)
      setServicesDenounced(servicesDenounced.filter(worker => worker.iddenounce !== deleteId))
      setShowSuccess(true)
      getServicesDenounced()

    } catch (error) {
      setShowError(true)
    }
  }

  return (
    <div>
      {
        servicesDenounced.map((worker) => {
          const [year, month, day] = worker.denouncedate.split("T", 10)[0]?.split("-")
          const formattedDateDenounce = `${day}/${month}/${year}`

          return <>
            <div className='individual-avaliation-modal' key={worker.iddenounce}>
              <div className='block-avaliation-modal'>
                <div className='part1-avaliation-modal'>
                  {
                    worker.profilepicture ?
                      <img id='icon-worker-profile' width={45}
                        src={worker.profilepicture}
                      />
                      :
                      <Avatar
                        size={45}
                        src={
                          <Image
                            src={ProfileIcon}
                          />
                        }
                      />
                  }
                </div>

                <div>
                  <p id='name-avaliation-modal'>{worker.firstnameworker} {worker.lastnameworker}, {worker.titleservice}, {formattedDateDenounce}</p>
                  <div>{worker.selectedoption}</div>
                </div>

                <Button id='delete-review-button' onClick={() => deleteComplaint(worker.iddenounce)}>Excluir</Button>
              </div>

              <p id='text-avaliation-modal'>{worker.description}</p>
            </div></>
        })
      }

      <Snackbar open={showError} autoHideDuration={6000} onClose={handleCloseError} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
          Não foi possível completar a exclusão. Por favor, tente novamente mais tarde.
        </Alert>
      </Snackbar>

      <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleCloseSuccess} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
          Denúncia excluída com sucesso!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default MyComplaints; 