from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Ruta 1: La que ya viste en tu navegador
@app.route('/', methods=['GET'])
def inicio():
    return "¡Hola equipo! El cerebro de Maya-Bot está encendido y funcionando."

# ==========================================
# Ruta 2: ¡EL NUEVO RECEPTOR DE SÍNTOMAS!
# ==========================================
@app.route('/api/enviar-sintomas', methods=['POST'])
def recibir_sintomas():
    # 1. Atrapamos el paquete (JSON) que enviará la página web
    datos = request.get_json() 
    
    # 2. Lo imprimimos en tu terminal para que tú (el programador) lo veas
    print("\n--- ¡ALERTA: LLEGARON DATOS DEL PACIENTE! ---")
    print(datos)
    print("---------------------------------------------\n")
    
    # 3. Le devolvemos un mensaje a la página web confirmando que lo recibimos
    return jsonify({
        "estado": "exito",
        "mensaje": "El Backend recibió los síntomas fuerte y claro."
    })

if __name__ == '__main__':
    print("Iniciando servidor Maya-Bot...")
    app.run(debug=True, port=5000)