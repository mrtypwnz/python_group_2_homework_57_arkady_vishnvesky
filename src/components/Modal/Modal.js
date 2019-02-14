import React from 'react';
import './Modal.css';
import Backdrop from '../Modal/Backdrop/Backdrop';

const Modal = (props) => {
  return(
      <div>
          <Backdrop show={props.show} cancel={props.close}/>
          <div className={"Modal" + (props.show ? ' Modal-show' : '')}>
              <h2>{props.title}</h2>
              <i onClick={props.close}>X</i>
              <hr/>
              <p>some text</p>
              {props.buttons.map((item, index) =>
                  <button key={index} onClick={item.clicked} className={item.type}>{item.label}</button>
              )}

          </div>
      </div>
  )
};


export default Modal;