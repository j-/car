import * as React from 'react';

interface State {
	miles: number | null;
	kilometers: number | null;
}

const MI_TO_KM_RATIO = 1.60934;
const DEFAULT_MI = 60;
const DEFAULT_KM = DEFAULT_MI * MI_TO_KM_RATIO;

export default class ConvertSpeed extends React.Component<{}, State> {
	state: State = {
		miles: DEFAULT_MI,
		kilometers: DEFAULT_KM,
	}

	render () {
		const { miles, kilometers } = this.state;
		return (
			<form className="ConvertSpeed row" onSubmit={this.handleFormSubmit}>
				<div className="form-group col-sm">
					<label htmlFor="ConvertSpeed-miles-per-hour">Miles per hour</label><br />
					<input
						id="ConvertSpeed-miles-per-hour"
						className="form-control"
						type="number"
						value={miles || ''}
						onChange={this.handleMilesPerHourChange}
					/>
				</div>
				<div className="form-group col-sm">
					<label htmlFor="ConvertSpeed-kilometers-per-hour">KM per hour</label><br />
					<input
						id="ConvertSpeed-kilometers-per-hour"
						className="form-control"
						type="number"
						value={kilometers || ''}
						onChange={this.handleKilometersPerHourChange}
					/>
				</div>
			</form>
		)
	}

	private handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	}

	private handleMilesPerHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const miles = Number(e.currentTarget.value);
		const kilometers = this.milesToKilometers(miles);
		this.setState({
			miles,
			kilometers,
		});
	}

	private handleKilometersPerHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const kilometers = Number(e.currentTarget.value);
		const miles = this.kilometersToMiles(kilometers);
		this.setState({
			miles,
			kilometers,
		});
	}

	private milesToKilometers (miles: number) {
		return miles * MI_TO_KM_RATIO;
	}

	private kilometersToMiles (km: number) {
		return km / MI_TO_KM_RATIO;
	}
}
