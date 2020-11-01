import React from 'react'
import '../assets/Header.css'
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SpaIcon from '@material-ui/icons/Spa';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { IconButton } from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom'

// there is two Header so far in App.js. the one is without variable and the other is with a variable
// the first one is backButton is null so you can get PersonIcon
// the second one is backButton is '/' and you can get ArrowbackIosIcon. if you click the icon. you can back to '/' which is backButton
function Header({backButton}) {
  const history = useHistory()
  console.log(history)
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize='large' className='header_icon'/>
        </IconButton>
      ) : (
    <Link to='/setting'>
      <IconButton>
      <PersonIcon className='header_icon' fontSize='large'/>
      </IconButton>
    </Link>
      )}

    <Link to='/'>
      <IconButton>
      <SpaIcon className='header_logo'style={{ fontSize: 50 }}/>
      </IconButton>
    </Link>

    <Link to='/chats'>
      <IconButton>
      <QuestionAnswerIcon className='header_icon' fontSize='large'/>
      </IconButton>
    </Link>
      
    </div>
  );
}

export default Header;
