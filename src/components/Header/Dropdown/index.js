import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import person from '../../assets/img/person.png'
import CloseIcon from '@mui/icons-material/Close';
import './styles.css'

const DropdownProfile = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
      <div className="dropdown-wrapper" >
        <button className="trigger-button" onClick={() => setShowDropdown(!showDropdown)}>
          {showDropdown ? <CloseIcon /> : <label id='my-profile-label'>Meu Perfil</label>}
        </button>
        <ul id='show-dropdown' className={showDropdown ? "active" : ""}>
          <Dropdown.ItemText className='img-dropdown' eventkey="1">
            <img width={100} src={person} />
          </Dropdown.ItemText>
          <Dropdown.ItemText className='dropdown-item1'>
            Mario Silvo
          </Dropdown.ItemText>

          <Dropdown.Item className='dropdown-item2' eventkey="2">
            <img width={20} />
            <Link className='link-profile' to='/Profile'>
            <StarRoundedIcon />Ver Perfil
            </Link>
          </Dropdown.Item>
          
          <Dropdown.Item className='dropdown-item2' eventkey="4">
            <img width={20} />
            <Link className='link-profile' to='/WorkerProfile'>
            <LogoutRoundedIcon />Perfil externo
            </Link>
          </Dropdown.Item>
        </ul>
      </div>
  )
}

export default DropdownProfile