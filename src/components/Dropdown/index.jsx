import React, { useState, useContext, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import person from '../../assets/img/person.png'
import CloseIcon from '@mui/icons-material/Close';
import AuthContext from '../../services/contexts/auth';
import { useNavigate } from "react-router-dom";

const DropdownProfile = () => {
  const { user } = useContext(AuthContext);
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate()
  const [showDropdown, setShowDropdown] = useState(false);

  function signOutRedirect() {
    signOut()
    navigate("/", { replace: true })
  }

  return (
    <div className="dropdown-wrapper" >
      <button className="trigger-button" onClick={() => setShowDropdown(!showDropdown)}>
        {showDropdown ? <CloseIcon /> : <label id='my-profile-label'>Meu Perfil</label>}
      </button>
      <ul id='show-dropdown' className={showDropdown ? "active" : ""}>
        <Dropdown.ItemText className='img-dropdown' eventkey="1">
          <img width={100} src={person} />
        </Dropdown.ItemText>
        <Dropdown.ItemText className='dropdown-fullname'>
          {user.firstname}
        </Dropdown.ItemText>

        <Dropdown.Item className='dropdown-item' eventkey="2">
          <img width={20} />
          <Link className='link-profile' to='/Profile'>
            <StarRoundedIcon />Ver Perfil
          </Link>
        </Dropdown.Item>
        <div className='line' />
        <Dropdown.Item className='dropdown-item' eventkey="4">
          <img width={20} />
          <label className='link-profile' onClick={() => signOutRedirect()}>
            <LogoutRoundedIcon />Sair
          </label>
        </Dropdown.Item>
      </ul>
    </div>
  )
}

export default DropdownProfile