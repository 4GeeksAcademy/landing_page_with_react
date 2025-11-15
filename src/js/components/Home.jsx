import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<>

<Navbar/>

<div className="container">

<Jumbotron/>


<div className="row">

<Card />
<Card />
<Card />
<Card />
</div>
</div>
<footer className="bg-dark text-white text-center"> CopyRight @ Your Webside 2019</footer>

		</>
	);
};

export default Home;