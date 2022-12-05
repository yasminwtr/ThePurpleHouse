import React, { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Upload, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Modal from 'react-bootstrap/Modal';
import { BsCamera } from 'react-icons/bs'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import api from 'api';
import AuthContext from '../../services/contexts/auth';
import { Avatar, Image } from 'antd';
import ProfileIcon from "../../assets/img/user2.png";

const ProfilePicture = (props) => {

  const { user, updateUser } = useContext(AuthContext);

  console.log('user', user);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [image, setImage] = useState([])

  const [imageUrl, setImageUrl] = useState([]);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const attemptSave = async () => {

    image.forEach(async image => {
      const data = new FormData();
      data.append("image", image);
      let imgbbUrl = '';
      await axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload?key=260510af5b0c0bace7d588642e391256",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        imgbbUrl = response.data.data.url
        setImageUrl([response.data.data.url])
        console.log('imageUrl', imageUrl)
      }).catch((response) => {
      });
      await saveImage(imgbbUrl)
    })
  }

  const saveImage = async (imageUrl) => {
    if (imageUrl) {
      try {
        const response = await api.post(`/profileImage`, { img: imageUrl, idPerson: user.idperson });
        console.log('response @ saveImage', response.data);
        updateUser()
        openNotificationSuccess()
        setShow(false)
      } catch (error) {
        openNotificationError()
      }
    }
  }

  const openNotificationSuccess = () => {
    notification["success"]({
      message: 'Foto de perfil atualizada.',
      duration: 2,
      placement: 'top'
    });
  };

  const openNotificationError = () => {
    notification["error"]({
      message: 'Não foi possível atualizar sua foto. Por favor, tente novamente mais tarde.',
      duration: 2,
      placement: 'top'
    });
  };

  return (
    <div>
      {
        user.profilepicture ?
          <Avatar
            size={110}
            src={
              <Image
                src={user.profilepicture}
                style={{
                  width: 110,
                }}
              />
            }
          />
          :
          <Avatar
            size={110}
            src={
              <Image
                src={ProfileIcon}
              />
            }
          />
      }

      <div className='IconPicture'>
        <BsCamera onClick={handleShow} className='iconFoto' size={26}/>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Adicione uma foto de perfil</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form encType="multipart/form-data"
            type="file" multiple accept='.png, .jpeg, .jpg'
            onChange={(e) => setImage([e.target.files[0], ...image])}
          >
            <Upload
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={true}
              maxCount={1}
              beforeUpload={
                () => {
                  return false;
                }
              }
            >
              {imageUrl ? (
                uploadButton
              ) : (
                <>
                  <div>
                    <img
                      width={100}
                      src={imageUrl} />
                  </div>
                </>
              )}
            </Upload>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => attemptSave()}
            className='save-button-modals-profile' >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProfilePicture; 