import React from 'react';
import { Link } from 'react-router-dom';

function CardItemRed(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Display None'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <img 
                src= {props.logo}
            /><h5 className='cards__item__header'>{props.heading}</h5>
            <p className='cards__item__text'>{props.text}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemRed;