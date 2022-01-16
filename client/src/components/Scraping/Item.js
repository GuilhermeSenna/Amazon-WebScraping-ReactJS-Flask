import Button from "../UI/Button";
import Card from "../UI/Card";
import Container from "../UI/Container";
import styles from './Item.module.css'

const Item = props => {
    const { nome, link, imagem, preco, nota } = props.children

    return (
        <Card margin="2rem">
            <img src={imagem} alt={`${nome}-product`}></img>
            <h2>{nome}</h2>
            <h3>R$ {preco}</h3>
            <h3>{nota}</h3>
            <a href={link} target='_blank' rel="noreferrer"><Button>Acessar produto</Button></a>
        </Card>
    )
}

export default Item;