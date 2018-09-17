import * as React from 'react';
import ConvertPower from './ConvertPower';
import ConvertTorque from './ConvertTorque';

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
	</div>
);

export default App;
