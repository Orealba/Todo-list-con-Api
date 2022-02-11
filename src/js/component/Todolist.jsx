import React, { useEffect, useState } from "react";
import "../../styles/Todolist.css";

const Todolist = (props) => {
	const [list, setlist] = useState([]);
	const [tarea, setTarea] = useState("");

	const HandleSubmit = (ev) => {
		ev.preventDefault();
		setlist([...list, tarea]);
		setTarea("");
		console.log(list);
	};
	const Delete = (item) => {
		setlist(list.filter((itemcito) => item != itemcito));
		console.log(index);
	};

	return (
		<>
			<div className="todo-list">
				<h1>To-do list</h1>
				<form onSubmit={HandleSubmit}>
					<input
						className="vacio"
						value={tarea}
						onChange={(ev) => {
							setTarea(ev.target.value);
						}}
						type="text"
						placeholder="text"
					/>
					<button type="submit"> Agregar tarea</button>
				</form>
				<div>
					{list.map((item, index) => (
						<div id={index}>
							<span>{item}</span>

							<button onClick={() => Delete(item)}>Borrar</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Todolist;
