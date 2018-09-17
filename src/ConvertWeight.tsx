import * as React from 'react';

interface State {
	pounds: number | null;
	kilograms: number | null;
}

const LB_TO_KG_RATIO = 0.453592;
const DEFAULT_LB = 2500;
const DEFAULT_KG = DEFAULT_LB * LB_TO_KG_RATIO;

export default class ConvertWeight extends React.Component<{}, State> {
	state: State = {
		pounds: DEFAULT_LB,
		kilograms: DEFAULT_KG,
	}

	render () {
		const { pounds, kilograms } = this.state;
		return (
			<form className="ConvertWeight row" onSubmit={this.handleFormSubmit}>
				<div className="form-group col-sm">
					<label htmlFor="ConvertWeight-pounds">Pounds</label><br />
					<input
						id="ConvertWeight-pounds"
						className="form-control"
						type="number"
						value={pounds || ''}
						onChange={this.handlePoundsChange}
					/>
				</div>
				<div className="form-group col-sm">
					<label htmlFor="ConvertWeight-kilograms">Kilograms</label><br />
					<input
						id="ConvertWeight-kilograms"
						className="form-control"
						type="number"
						value={kilograms || ''}
						onChange={this.handleKilogramsChange}
					/>
				</div>
			</form>
		)
	}

	private handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	}

	private handlePoundsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const pounds = Number(e.currentTarget.value);
		const kilograms = pounds / LB_TO_KG_RATIO;
		this.setState({
			pounds,
			kilograms,
		});
	}

	private handleKilogramsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const kilograms = Number(e.currentTarget.value);
		const pounds = kilograms * LB_TO_KG_RATIO;
		this.setState({
			pounds,
			kilograms,
		});
	}
}