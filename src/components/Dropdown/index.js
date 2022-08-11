import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import person from '../assets/person.png'
import "./styles.css"
import CloseIcon from '@mui/icons-material/Close';

const DropdownProfile = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <div className="dropdown-wrapper" >
        <button className="trigger-button" onClick={() => setShowDropdown(!showDropdown)}>
          {showDropdown ? <CloseIcon /> : <a>Meu Perfil</a>}
        </button>
        <ul id='showDropdown' className={showDropdown ? "active" : ""}>
          <Dropdown.ItemText className='img-dropdown' eventKey="1">
            <img width={100} src={person} />
          </Dropdown.ItemText>
          <Dropdown.ItemText className='dropdown-Item1'>
            Mario Silvo
          </Dropdown.ItemText>
          <Dropdown.Item className='dropdown-Item2' eventKey="2">
            <img width={20} /><StarRoundedIcon />
            <Link to='/Profile'>
              Ver Perfil
            </Link>
          </Dropdown.Item>
          <Dropdown.Item className='dropdown-Item2' eventKey="4">
            <img width={20} />
            <LogoutRoundedIcon />
            <Link to='/WorkerProfile'>
              Perfil externo
            </Link>
          </Dropdown.Item>
        </ul>
      </div>
    </>
  )
}

export default DropdownProfile