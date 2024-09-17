
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; // Importar el icono de la basura


//create your first component
function Home() {
	const [tareas, setTareas] = useState([]);
	const [nuevaTarea, setNuevaTarea] = useState("");

	//Función para agregar tarea
	const agregarTarea = (e) => {
		if (e.key === "Enter" && nuevaTarea.trim() !== "") {
			setTareas([...tareas, nuevaTarea]);
			setNuevaTarea(""); //Limpiar el input
		}
	};

	//Función para eliminar tarea por índice
	const eliminarTarea = (index) => {
		const nuevasTareas = tareas.filter((_, i) => i !== index);
		setTareas(nuevasTareas);
	};

	return (
		<div className="list">
			<h1>todos</h1>
			<div className="input">
				<input type="text" placeholder="What needs to be done?"
				value={nuevaTarea}
				onChange={(e) => setNuevaTarea(e.target.value)} onKeyDown={agregarTarea} // Capturar el evento de "Enter"
				 />
			</div>

			<ul style={{ listStyleType: "none", padding: 0 }}>
				{tareas.map((tarea, index) => (
					<li key={index} style={{ margin: "10px 0" }}>
						{tarea}
						<button onClick={() => eliminarTarea(index)}>
							 <FontAwesomeIcon icon={faXmark} className="icon" /> </button></li>
				))}
			</ul>

		</div>

	);
}

export default Home;
