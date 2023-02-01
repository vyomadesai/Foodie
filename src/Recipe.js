
import React, { useState } from "react";
import style  from './recipes.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RecipeItem = ({title, calories, image, ingredients}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
   
  return (
    <div className={style.wrapper}>
         {/* <div className={style.recipeStyle}> */}
        <div className={style.card}>
        <h1 className={style.titleStyle}>{title}</h1>
            {/* <p>{calories}</p> */}
            <img className={style.image} src={image} alt="" />
            <button className={style.card_btn} onClick={() => setShow(true)}>View Recipe</button>
            {/* <Modal show={show} onHide={handleClose} animation={true}> */}
            <Modal
            show={show} 
            onHide={() => setShow(false)}
            
            aria-labelledby="contained-modal-title-vcenter"
            centered animation={true}>
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className={style.titleStyle}>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className={style.modalBody}>
            <img className={style.modalImage} src={image} alt="" />
                {/* <h4 className={style.ingText}>Ingredients</h4> */}
                    <div className={style.modalCentered}>
                    <ul>
                    {ingredients.map((ing, i) => (
                        <li className={style.ingItems} key="{i}">{ing.text}</li>
                    ))}
                    </ul>  
                    </div>
                </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            </Modal.Footer>
        </Modal>   
        </div>
    </div>
  )
}

export default RecipeItem;



