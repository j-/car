import * as React from 'react';
import ConvertPower from './ConvertPower';
import ConvertTorque from './ConvertTorque';

const App: React.StatelessComponent = () => (
	<div className="App">
		<h1>Car</h1>

		<h2>Power</h2>
		<ConvertPower />

		<h2>Torque</h2>
		<ConvertTorque />
	</div>
);

export default App;
