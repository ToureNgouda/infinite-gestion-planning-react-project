import React from 'react';
import ReactLoading from 'react-loading';
import './loading';

// import { Container } from './styles';

const Loading = props => {
    const styled = 
        props.isLoading ? {
            // // background: '#495057',
            // height: '10vh',
            // position:'fixed',
            // width:'10vw',
            // color:'#DD5600',
            // marginTop:'-750px',
            // left:'800px'
        }:null;

return (
   <div>
       <ReactLoading type='spin' color='#DD5600' />
    </div>);
}
export default Loading;
