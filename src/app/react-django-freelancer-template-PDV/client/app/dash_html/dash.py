import dash
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html
import dash_bootstrap_components as dbc
import requests

app = dash.Dash(__name__, external_stylesheets=[dbc.themes.BOOTSTRAP])

app.layout = html.Div([
    # ... layout da aplicação utilizando dbc.Row e dbc.Col
])

@app.callback(
    Output('food-list', 'children'),
    [Input('category-dropdown', 'value')]
)
def update_food_list(selected_category):
    # Fazer requisição à API para obter os alimentos da categoria selecionada
    response = requests.get('http://127.0.0.1:5000/foods')
    foods = response.json()

    # Criar os cards dos alimentos
    cards = []
    for food in foods:
        card = dbc.Card([
            dbc.CardImg(src=food['image']),
            dbc.CardBody([
                html.H5(food['name']),
                html.P(food['description']),
                html.P(f"Preço: R$ {food['price']}")
            ])
        ])
        cards.append(card)

    return dbc.Row(cards)

if __name__ == '__main__':
    app.run_server(debug=True)