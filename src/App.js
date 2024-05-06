//App.js
import './App.css';
import Header from './Components/Header.js';
import Cards from './Components/Cards.js';
import { data } from './data.js';
import Footer from './Components/Footer.js';


function App() {
	const mappedData = data.map((item) => {
		return (
			<Cards key={item.id} item={item} />
		)
	})
	return (
		<div className="App">
			<Header />
			{mappedData}
			<Footer />
		</div>
	);
}

export default App;

