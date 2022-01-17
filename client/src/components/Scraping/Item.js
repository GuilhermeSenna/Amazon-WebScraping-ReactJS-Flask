import React, { useState } from 'react';
import Button from "../UI/Button";
import Card from "../UI/Card";
import Container from "../UI/Container";
import Modal from '../UI/Modal';
import styles from './Item.module.css'

const Item = props => {
    const [showModal, setShowModal] = useState(false);
    const { nome, link, imagem, preco, nota } = props.children;

    const modal = (
        <Modal onClick={() => { setShowModal(false) }}>
            <div className={styles.close}>
                <button className={styles['button--alt']} onClick={() => { setShowModal(false) }}>X</button>
            </div>
            <div className={styles.items}>

                <img src={imagem} alt={`${nome}-product`} onClick={() => { console.log('clicado') }}></img>
                <div className={styles.modal_items}>
                    <h2>{nome}</h2>
                    <h3>R$ {preco}</h3>
                    <h3>{nota}</h3>

                    <div>
                        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed leo eros. Sed diam arcu, elementum id hendrerit ac, malesuada at nisi. Morbi dignissim hendrerit ligula, eget gravida mi dapibus quis. Integer turpis dui, viverra vitae vulputate et, fermentum sit amet quam. Suspendisse ac finibus ligula. Maecenas pellentesque mattis vestibulum. Praesent congue velit id hendrerit finibus. Phasellus ornare nisl elit, vel rhoncus nisi convallis in. Vestibulum imperdiet hendrerit ultrices. Quisque nulla mauris, varius ornare dui at, fringilla cursus leo.</i>
                    </div>
                    <br />
                    <br />
                    <a href={link} target='_blank' rel="noreferrer"><Button>Acessar produto</Button></a>
                </div>
                {/* <a href={link} target='_blank' rel="noreferrer"><Button>Acessar produto</Button></a> */}

                {/* <span>Total Amount</span>
                <span>teste</span>
                <span>teste</span> */}
            </div>
        </Modal>
    );

    return (
        <>
            <Card margin="2rem" onClick={() => { setShowModal(true) }}>
                <img src={imagem} alt={`${nome}-product`} onClick={() => { console.log('clicado') }}></img>
                <h2>{nome}</h2>
                <h3>R$ {preco}</h3>
                <h3>{nota}</h3>
            </Card>


            {showModal && modal}
        </>
    )
}

export default Item;