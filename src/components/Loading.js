
import React from 'react';
import { Spinner } from 'react-bootstrap'; 

const Loading = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Spinner animation="border" role="status" >
        <span className="visually-hidden" style={{marginLeft:'40rem', marginTop:"40rem"}}>Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
