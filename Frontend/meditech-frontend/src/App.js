import "./App.css";
import "./Components/Orders.css"
import Sidebar from "./Components/Sidebar";
import home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Orders from "./Components/Orders";
import History from "./Components/History";
import assign from "./Components/Assign";
import Update from "./Components/Update";
import Porters from "./Components/Porters";

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/' component={home} />
					<Route path='/home' component={home} />
					<Route path='/orders' component={Orders} />
					<Route path='/history' component={History} />
					<Route path='/assign' component={assign} />
					<Route path='/update' component={Update} />
					<Route path='/porters' component={Porters} />


				</Switch>
			</div>
		</Router>
	);
}

export default App;

