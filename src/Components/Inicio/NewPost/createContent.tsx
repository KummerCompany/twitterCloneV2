import React from 'react';
import yop from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import './createContent.css'

function createContent() {
  return ( <div className='newTweet'>
      <form>
        <div className='tweetBox'>
        <Avatar alt='Fotito' src="sdfsdfsdf"/>
        <input placeholder='¿Que estas pensando?' type="text"/>
        </div>
        <input
         className="tweetBox_img"
         placeholder='Opcional: ingrese una imagen url'
         type='text'   
        />
        <Button className='tweetButton'>Twittear</Button>
      </form>
  </div>
  );
}
export default createContent;
