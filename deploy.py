from flask import Flask, render_template, request, jsonify
import json
from src.main.resolution.resolution import prove_by_resolution
from src.main.ulti.Capturing import Capturing

app = Flask(__name__,
            static_url_path='',
            static_folder='web/static',
            template_folder='web/templates'
)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/resolution', methods=['GET'])
def resolution():
    knowledge_base = None
    if request.method == 'GET':
        knowledge_base = request.args.get('data')
        knowledge_base = json.loads(knowledge_base)

        proof = request.args.get('proof')

    if knowledge_base is not None:
        with Capturing() as output:
            prove_by_resolution(knowledge_base, proof)
        
        proof = []
        for prove in output:
            proof.append(prove)

    return jsonify(proof)


if __name__ == "__main__":
    app.run(ssl_context='adhoc')