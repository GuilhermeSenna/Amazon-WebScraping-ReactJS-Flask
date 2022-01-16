from flask import Flask, jsonify, abort
from flask_cors import CORS
from bs4 import BeautifulSoup
import requests
import json

app = Flask(__name__)
CORS(app)


@app.route('/')
def homepage():
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36', }
    link_base = 'https://www.amazon.com.br'
    page = requests.get(
        "https://www.amazon.com.br/s?k=stephen+king&sprefix=stephen%2Caps%2C343&ref=nb_sb_ss_ts-doa-p_1_7",
        headers=headers)
    # page.raise_for_status()

    if not page.ok:
        abort(500)

    soup = BeautifulSoup(page.text, 'html.parser')

    produtos = []

    for produto_item in soup.findAll('div', attrs={'class': 'a-section a-spacing-medium'}):
        produto = {'link': '', 'nome': '', 'imagem': produto_item.find('img', attrs={'class': 's-image'})['src'],
                   'preco': 0, 'nota': 0}

        preco_formatado = str(produto_item.find('span', attrs={'class': 'a-offscreen'}).string)
        preco_formatado = preco_formatado[3:]
        produto['preco'] = preco_formatado

        produto_link = produto_item.find('a', attrs={'class': 'a-link-normal s-link-style a-text-normal'})
        produto['link'] = f'{link_base}{produto_link["href"]}'
        produto['nome'] = produto_link.find('span',
                                            attrs={'class': 'a-size-base-plus a-color-base a-text-normal'}).string

        print(produto_link.find('span', attrs={'class': 'a-size-base-plus a-color-base a-text-normal'}).string)

        div_nota = produto_item.find('div', attrs={'class': 'a-row a-size-small'})
        produto['nota'] = div_nota.find('span')['aria-label']

        produtos.append(produto)

    return jsonify(produtos)


app.run(host='0.0.0.0')