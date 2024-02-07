import "./App.css";
function App() {
	return (
		<div>
			<div id="buttonDiv">
				<button className="minusonebtn">-1</button>
				<button className="plusonebtn">+1</button>
				<div>
					<button className="resetbtn">Reset Count</button>
				</div>
			</div>
			<span className="counter"></span>
			<div>
				<span className="odd-or-even"></span>
				<span className="is-prime"></span>
			</div>
		</div>
	);
}

export default App;
