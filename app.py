
import dash
from dash.dependencies import Output, Event, Input
import dash_core_components as dcc
import dash_html_components as html
import plotly
import random
import plotly.graph_objs as go

app = dash.Dash(__name__)

app.layout = html.Div(
    className="main",
    children=
    [
        dcc.Input(id='my-id', value=5, type="integer"),
        # Because some of the operators take 2 inputs instead of 1:
        dcc.Input(id='my-id2', value=2, type="integer"),
        html.P(),

        html.Button('>>', id='right-btn'),
        html.Button('<<', id='left-btn'),
        html.Button('~', id='not-btn'),
        html.Button('&', id='and-btn'),
        html.Button('^', id='xor-btn'),
        html.Button('|', id='or-btn'),

        html.P(),
        html.P('allo'), # Well, this is pink at least.


        html.Div(id='output')

    ]
)

# Ah, an Output can only have a single Input function.
# Remember, Input needs to be in a list:
@app.callback(Output('output', 'children'), [Input('right-btn', 'value'), Input('left-btn', 'n_clicks')])
def on_click(n, default=0):
    print(default, " is default", n, ' is n')
    return n
# @app.callback(Output('output', 'children'), [Event('left-btn', 'n_clicks')])
# def on_click(n):
#     return n
# @app.callback(Output('output', 'children'), [Event('not-btn', 'n_clicks')])
# def on_click(n):
#     return n
# @app.callback(Output('output', 'children'), [Event('and-btn', 'n_clicks')])
# def on_click(n):
#     return n
# @app.callback(Output('output', 'children'), [Event('xor-btn', 'n_clicks')])
# def on_click(n):
#     return n
# @app.callback(Output('output', 'children'), [Event('or-btn', 'n_clicks')])
# def on_click(n):
#     return n



if __name__ == '__main__':
    app.run_server(debug=True)


# bittin
