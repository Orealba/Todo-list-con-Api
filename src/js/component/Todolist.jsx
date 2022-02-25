import React, { useEffect, useState } from "react";
import "../../styles/Todolist.css";

const Todolist = () => {
	const [list, setlist] = useState([]);
	const [tarea, setTarea] = useState("");

	const HandleSubmit = (ev) => {
		ev.preventDefault();
		if (tarea != "") {
			const newlist = [...list, tarea];

			setTarea("");
			console.log(newlist);
			fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/alesanchezr",
				{
					method: "PUT",
					body: JSON.stringify(newlist),
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
				});
		}
	};
	const Delete = (item) => {
		setlist(list.filter((itemcito) => item != itemcito));
		console.log(index);
	};

	useEffect(() => {
		const todolist = fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/alesanchezr",
			{
				method: "POST",
				body: JSON.stringify([]),
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	}, []);

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
