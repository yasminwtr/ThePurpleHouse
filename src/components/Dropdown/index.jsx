import React, { useContext, useRef, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import person from '../../assets/img/person.png'
import CloseIcon from '@mui/icons-material/Close';
import AuthContext from '../../services/contexts/auth';
import { useNavigate } from "react-router-dom";
import 'animate.css'
import ProfileIcon from "../../assets/img/user2.png";

const DropdownProfile = ({ showDropdown, setShowDropdown }) => {
  const { user } = useContext(AuthContext);
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate()
  const btnRef = useRef()

  function signOutRedirect() {
    signOut()
    navigate("/", { replace: true })
  }

  useEffect(() => {
    const closeDropdown = e => {
      if (e.path[1] !== btnRef.current) {
        setShowDropdown(false)
      }
    }

    document.body.addEventListener('click', closeDropdown)

    return () => document.body.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <div className="dropdown-wrapper" >
      <button ref={btnRef} className="trigger-button"
        onClick={() => setShowDropdown(!showDropdown)}>
        {showDropdown ?
          <label id='my-profile-label-close'>
            <CloseIcon />
            Fechar
          </label>
          :
          <label id='my-profile-label'>
            Meu Perfil
          </label>}
      </button>
      <ul id='show-dropdown' className={showDropdown ? "active animate__animated animate__fadeIn  " : ""}>
        <Dropdown.ItemText className='img-dropdown' eventkey="1">
          <img width={100} src={ProfileIcon} />
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