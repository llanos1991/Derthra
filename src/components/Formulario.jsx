import React from 'react';
import { useState } from "react";
import '../styles/Formulario.css';

function Formulario() {
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        universidad: "",
        carrera: "",
        mensaje: "",
      });

    const [mensajeEnvio, setMensajeEnvio] = useState(""); // mensaje para el usuario

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);
        // Aquí puedes enviar los datos a una API, Firebase, base de datos, etc.
        try {
            const response = await fetch('http://localhost:8080/api/solicitudes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                setMensajeEnvio("Solicitud enviada exitosamente");
                // Aquí puedes agregar un mensaje de éxito o resetear el formulario
                setFormData({
                    nombre: "",
                    correo: "",
                    universidad: "",
                    carrera: "",
                    mensaje: "",
                  });
            } else {
                setMensajeEnvio("Error al enviar la solicitud");
            }
        } catch (error) {
            console.error("Hubo un error:", error);
            setMensajeEnvio("Error de red al enviar la solicitud");
        }
      };

  return (
    <>
    <div class="form-wrapper">
        <div class="formulario">
            <h1>Formulario de Prácticas</h1>
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="universidad"
                    placeholder="Universidad o instituto"
                    value={formData.universidad}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="carrera"
                    placeholder="Carrera o especialidad"
                    value={formData.carrera}
                    onChange={handleChange}
                />
                <textarea
                    name="mensaje"
                    placeholder="Mensaje adicional (opcional)"
                    rows="4"
                    value={formData.mensaje}
                    onChange={handleChange}
                />
                <button type="submit">Enviar solicitud</button>
                </form>
                {mensajeEnvio && <p style={{ marginTop: "1em" }}>{mensajeEnvio}</p>}
        </div>
    </div>      
  </>
  );
}

export default Formulario;
