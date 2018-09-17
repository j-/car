import * as React from 'react';

interface State {
	mpg: number | null;
	kpl: number | null;
}

const MPG_TO_KPL_RATIO = 0.425144;
const DEFAULT_MPG = 30;
const DEFAULT_KPL = DEFAULT_MPG * MPG_TO_KPL_RATIO;

export default class ConvertMileage extends React.Component<{}, State> {
	state: State = {
		mpg: DEFAULT_MPG,
		kpl: DEFAULT_KPL,
	}

	render () {
		const { mpg, kpl } = this.state;
		return (
			<form className="ConvertMileage row" onSubmit={this.handleFormSubmit}>
				<div className="form-group col-sm">
					<label htmlFor="ConvertMileage-mpg">Miles per gallon</label><br />
					<input
						id="ConvertMileage-mpg"
						className="form-control"
						type="number"
						value={mpg || ''}
						onChange={this.handleMpgChange}
					/>
				</div>
				<div className="form-group col-sm">
					<label htmlFor="ConvertMileage-kpl">Kilometres per litre</label><br />
					<input
						id="ConvertMileage-kpl"
						className="form-control"
						type="number"
						value={kpl || ''}
						onChange={this.handleKplChange}
					/>
				</div>
			</form>
		)
	}

	private handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	}

	private handleMpgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const mpg = Number(e.currentTarget.value);
		const kpl = mpg / MPG_TO_KPL_RATIO;
		this.setState({
			mpg,
			kpl,
		});
	}

	private handleKplChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const kpl = Number(e.currentTarget.value);
		const mpg = kpl * MPG_TO_KPL_RATIO;
		this.setState({
			mpg,
			kpl,
		});
	}
}