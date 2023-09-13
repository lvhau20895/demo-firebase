import Login from "./Login";
import Logout from "./Logout";

function App() {
	const warningTitleCSS =
		"color:yellow; font-size:60px; font-weight: bold; -webkit-text-stroke: 1px black;";
	const warningDescCSS = "font-size: 18px; color: green;";
	console.log("%cStop!", warningTitleCSS);
	console.log(
		'%cThis is a browser feature intended for developers. If someone told you to copy and paste something here to enable a Facebook feature or "hack" someone\'s account, it is a scam and will give them access to your Facebook account.',
		warningDescCSS
	);
	console.log(
		"%cSee https://www.facebook.com/selfxss for more information.",
		warningDescCSS
	);
	return (
		<div className="App">
			<Login />

			<Logout />
		</div>
	);
}

export default App;
