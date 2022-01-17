import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import styles from './App.module.css';
import Card from './components/UI/Card';
import Input from './components/UI/Input';
import Button from './components/UI/Button';
import api from "./services/api";
import Item from './components/Scraping/Item';
import Container from './components/UI/Container';
let interval = undefined;

const App = () => {

  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  const onBtnHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {

      const response = await fetch('http://192.168.5.46:5000');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      setItems(data);

      // api
      //   .get("/")
      //   .then((response) => setResponse(response.data))
      //   .catch((err) => {
      //     console.error("ops! ocorreu um erro" + err);
      //   });
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  let content = <Card><p>No content found.</p></Card>;

  if (items.length > 0) {
    content = <Container>
      {items.map(item => {
        return (<Item key={Math.random().toString()}>{item}</Item>)
      })}
    </Container>
  }

  if (error) {
    content = <Card><p>{error}</p></Card>;
  }

  if (isLoading) {
    content = <Card><p>Loading...</p></Card>;
  }

  return (
    <>
      <h1 className={styles.title}>Scraping test</h1>
      <Card >
        {/* <Input label="teste" input={{ type: "text", id: "url" }} />
        <Input label="teste" input={{ type: "text", id: "url" }} /> */}

        <Button onClick={onBtnHandler}>teste</Button>
      </Card>

      {content}
    </>
  );
}

export default App;
