import * as React from 'react';
import './ConvertPower.css';

interface State {
	horsepower: number | null;
	kilowatts: number | null;
}

/** @see https://www.kwtohp.net/hp-to-kw-conversion */
const HP_TO_KW_RATIO = 0.745699872;
const DEFAULT_HP = 1000;
const DEFAULT_KW = DEFAULT_HP * HP_TO_KW_RATIO;

export default class ConvertPower extends React.Component<{}, State> {
	state: State = {
		horsepower: DEFAULT_HP,
		kilowatts: DEFAULT_KW,
	}

	render () {
		const { horsepower, kilowatts } = this.state;
		return (
			<form className="ConvertPower" onSubmit={this.handleFormSubmit}>
				<div>
					<label htmlFor="ConvertPower-horsepower">Horsepower</label><br />
					<input
						id="ConvertPower-horsepower"
						type="number"
						value={horsepower || ''}
						onChange={this.handleHorsepowerChange}
					/>
				</div>
				<div>
					<label htmlFor="ConvertPower-kilowatts">Kilowatts</label><br />
					<input
						id="ConvertPower-kilowatts"
						type="number"
						value={kilowatts || ''}
						onChange={this.handleKilowattsChange}
					/>
				</div>
			</form>
		)
	}

	private handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	}

	private handleHorsepowerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const horsepower = Number(e.currentTarget.value);
		const kilowatts = this.horsepowerToKilowatts(horsepower);
		this.setState({
			horsepower,
			kilowatts,
		});
	}

	private handleKilowattsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const kilowatts = Number(e.currentTarget.value);
		const horsepower = this.kilowattsToHorsepower(kilowatts);
		this.setState({
			horsepower,
			kilowatts,
		});
	}

	private horsepowerToKilowatts (horsepower: number) {
		return horsepower * HP_TO_KW_RATIO;
	}

	private kilowattsToHorsepower (kilowatts: number) {
		return kilowatts / HP_TO_KW_RATIO;
	}
}