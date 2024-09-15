from flask import Flask, render_template

#create app
app = Flask(__name__)

content = 'lorem'

@app.route('/', methods =['GET'])
def index():
    return render_template('index.html', data={'title': 'home page'})

@app.route('/about', methods =['GET'])
def about():
    return render_template('about.html', data={'title': 'about page'})


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=4000) 