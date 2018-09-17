import * as React from 'react';
import ConvertPower from './ConvertPower';
import ConvertTorque from './ConvertTorque';
import ConvertSpeed from './ConvertSpeed';
import ConvertPressure from './ConvertPressure';

const App: React.StatelessComponent = () => (
	<div className="App container">
		<br />

		<h1>Car</h1>

		<br />
		<br />

		<h2>Power</h2>

		<br />

		<ConvertPower />

		<br />
		<br />

		<h2>Torque</h2>

		<br />

		<ConvertTorque />

		<br />
		<br />

		<h2>Speed</h2>

		<br />

		<ConvertSpeed />

		<br />
		<br />

		<h2>Pressure</h2>

		<br />

		<ConvertPressure />
	</div>
);

export default App;
