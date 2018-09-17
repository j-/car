import * as React from 'react';

interface State {
	pascal: number | null;
	bar: number | null;
	atm: number | null;
	psi: number | null;
}

const PASCAL_TO_BAR_RATIO = 1e-5;
const PASCAL_TO_ATM_RATIO = 9.8692e-6;
const PASCAL_TO_PSI_RATIO = 0.000_145_037_737_730;
const DEFAULT_BAR = 1;
const DEFAULT_PASCAL = DEFAULT_BAR / PASCAL_TO_BAR_RATIO;
const DEFAULT_ATM = DEFAULT_PASCAL * PASCAL_TO_ATM_RATIO;
const DEFAULT_PSI = DEFAULT_PASCAL * PASCAL_TO_PSI_RATIO;

export default class ConvertPressure extends React.Component<{}, State> {
	state: State = {
		pascal: DEFAULT_PASCAL,
		bar: DEFAULT_BAR,
		atm: DEFAULT_ATM,
		psi: DEFAULT_PSI,
	}

	render () {
		const { pascal, bar, atm, psi } = this.state;
		return (
			<form className="ConvertPressure row" onSubmit={this.handleFormSubmit}>
				<div className="form-group col-sm-6">
					<label htmlFor="ConvertPressure-bar">Bar</label><br />
					<input
						id="ConvertPressure-bar"
						className="form-control"
						type="number"
						value={bar || ''}
						onChange={this.handleBarChange}
					/>
				</div>
				<div className="form-group col-sm-6">
					<label htmlFor="ConvertPressure-psi">Psi</label><br />
					<input
						id="ConvertPressure-psi"
						className="form-control"
						type="number"
						value={psi || ''}
						onChange={this.handlePsiChange}
					/>
				</div>
				<div className="form-group col-sm-6">
					<label htmlFor="ConvertPressure-pascal">Pascal</label><br />
					<input
						id="ConvertPressure-pascal"
						className="form-control"
						type="number"
						value={pascal || ''}
						onChange={this.handlePascalChange}
					/>
				</div>
				<div className="form-group col-sm-6">
					<label htmlFor="ConvertPressure-atm">Standard atmosphere</label><br />
					<input
						id="ConvertPressure-atm"
						className="form-control"
						type="number"
						value={atm || ''}
						onChange={this.handleAtmChange}
					/>
				</div>
			</form>
		)
	}

	private handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	}

	private handlePascalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const pascal = Number(e.currentTarget.value);
		const bar = pascal * PASCAL_TO_BAR_RATIO;
		const atm = pascal * PASCAL_TO_ATM_RATIO;
		const psi = pascal * PASCAL_TO_PSI_RATIO;
		this.setState({
			pascal,
			bar,
			atm,
			psi,
		});
	}

	private handleBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const bar = Number(e.currentTarget.value);
		const pascal = bar / PASCAL_TO_BAR_RATIO;
		const atm = pascal * PASCAL_TO_ATM_RATIO;
		const psi = pascal * PASCAL_TO_PSI_RATIO;
		this.setState({
			pascal,
			bar,
			atm,
			psi,
		});
	}

	private handleAtmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const atm = Number(e.currentTarget.value);
		const pascal = atm / PASCAL_TO_ATM_RATIO;
		const bar = pascal * PASCAL_TO_BAR_RATIO;
		const psi = pascal * PASCAL_TO_PSI_RATIO;
		this.setState({
			pascal,
			bar,
			atm,
			psi,
		});
	}

	private handlePsiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const psi = Number(e.currentTarget.value);
		const pascal = psi / PASCAL_TO_PSI_RATIO;
		const bar = pascal * PASCAL_TO_BAR_RATIO;
		const atm = pascal * PASCAL_TO_ATM_RATIO;
		this.setState({
			pascal,
			bar,
			atm,
			psi,
		});
	}
}