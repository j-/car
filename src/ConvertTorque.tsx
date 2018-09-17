import * as React from 'react';
import './ConvertTorque.css';

interface State {
	poundfeet: number | null;
	newtonmetres: number | null;
}

const NM_TO_PF_RATIO = 0.73756215;
const DEFAULT_PF = 1000;
const DEFAULT_NM = DEFAULT_PF / NM_TO_PF_RATIO;

export default class ConvertTorque extends React.Component<{}, State> {
	state: State = {
		poundfeet: DEFAULT_PF,
		newtonmetres: DEFAULT_NM,
	}

	render () {
		const { poundfeet, newtonmetres } = this.state;
		return (
			<form className="ConvertTorque" onSubmit={this.handleFormSubmit}>
				<div>
					<label htmlFor="ConvertTorque-poundfeet">Pound feet</label><br />
					<input
						id="ConvertTorque-poundfeet"
						type="number"
						value={poundfeet || ''}
						onChange={this.handlePoundfeetChange}
					/>
				</div>
				<div>
					<label htmlFor="ConvertTorque-newtonmetres">Newton metres</label><br />
					<input
						id="ConvertTorque-newtonmetres"
						type="number"
						value={newtonmetres || ''}
						onChange={this.handleNewtonmetresChange}
					/>
				</div>
			</form>
		)
	}

	private handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	}

	private handlePoundfeetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const poundfeet = Number(e.currentTarget.value);
		const newtonmetres = this.poundfeetToNewtonmetres(poundfeet);
		this.setState({
			poundfeet,
			newtonmetres,
		});
	}

	private handleNewtonmetresChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newtonmetres = Number(e.currentTarget.value);
		const poundfeet = this.newtonmetresToPoundfeet(newtonmetres);
		this.setState({
			poundfeet,
			newtonmetres,
		});
	}

	private poundfeetToNewtonmetres (poundfeet: number) {
		return poundfeet / NM_TO_PF_RATIO;
	}

	private newtonmetresToPoundfeet (newtonmetres: number) {
		return newtonmetres * NM_TO_PF_RATIO;
	}
}