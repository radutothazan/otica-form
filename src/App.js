import React, { Component, Fragment } from 'react';
import './App.css';

import { processesApps, professionalApps, colors, countries, socialApps, options, groupTypes} from './dummyData';

class App extends Component {
	state = {
		selectedColor: null,
		sectionIndex: 0,
		emailGroups: 1,
		invitedUsers: [],
	};

	onInputChange = (e, value, maxLength) => {
		if (maxLength && e.target.value.length > maxLength) return;
		this.setState({ [value]: e.target.value })
	};

	renderInputGroup = (label, value, maxLength) => {
		return (
			<div className="form-group row input-group-sm">
				<label>{label}</label>
				<input type={value === 'password' ? "password" : "text"} className="form-control "
					   value={this.state[value]}
					   onChange={e => this.onInputChange(e, value, maxLength)}/>
			</div>
		)
	};

	renderDropdown = (label, options) => {
		return (
			<div className="form-group row input-group-sm">
				<label>{label}</label>
				<select className="form-control"
						onChange={e => {
							if (label === 'Color') {
								const colorImage = e.target.value ? colors.filter(c => c.value === e.target.value)[0].name.toLowerCase().replace(' ', '_') : null;
								return this.setState({
									[label.replace(' ', '').toLowerCase()]: e.target.value,
									colorImage
								})
							}
							this.setState({ [label.replace(' ', '').toLowerCase()]: e.target.value })
						}}>
					{options.map(o => {
						return <option key={o.name} disabled={o.disabled} value={o.value}
									   style={label === 'Color' ? { backgroundColor: o.value } : {}}>{o.name}</option>;
					})}
				</select>
			</div>
		)
	};

	onSubmit = (e) => e.preventDefault();

	renderUserSection = () => {
		return (
			<Fragment>
				<h4 className="h4 text-left">User Section</h4>
				{this.renderInputGroup('First Name', 'firstName')}
				{this.renderInputGroup('Last Name', 'lastName')}
				{this.renderInputGroup('Email', 'email')}
				{this.renderInputGroup('Phone Number', 'phone')}
				{this.renderInputGroup('License Number', 'licenseNumber', 7)}
				{this.renderDropdown('Country', countries)}
			</Fragment>
		)
	};

	renderSpaceSection = () => {
		const { colorImage } = this.state;
		return (
			<Fragment>
				<h4 className="h4 text-left">Space Section</h4>
				{this.renderDropdown('Color', colors)}
				{colorImage ?
					<img src={`${process.env.PUBLIC_URL}/images/${colorImage}.PNG`} alt={colorImage}
						 className="w-25"/> : null}
				{this.renderInputGroup('Space Name', 'companyName')}
				{this.renderDropdown('Group Types', groupTypes)}
				{this.renderDropdown('Social Apps', socialApps)}
				{this.renderDropdown('Professional Apps', professionalApps)}
				{this.renderDropdown('Processes Apps', processesApps)}
			</Fragment>
		)
	};

	onBtnClick = () => {
		const { sectionIndex, invitedUsers, emailGroups } = this.state;
		if (sectionIndex < 2) return this.setState({ sectionIndex: sectionIndex + 1 });
		console.log('SUBMIT', this.state)
		if (!invitedUsers.length) {
			const userList = new Array(emailGroups).fill().map((v, i) => ({
				name: this.state[`inviteName${i}`],
				email: this.state[`inviteEmail${i}`],
			}));
			console.log('INVITED USERS LIST', userList)
		}
	};

	renderInviteGroups = index => {
		return (
			<Fragment>
				{this.renderInputGroup('Name', `inviteName${index}`)}
				{this.renderInputGroup('Email', `inviteEmail${index}`)}
			</Fragment>
		)
	};

	onAddNewRow = () => {
		const { emailGroups } = this.state;
		if (!this.state[`inviteName${emailGroups - 1}`] || !this.state[`inviteEmail${emailGroups - 1}`]) return;
		this.setState({ emailGroups: emailGroups + 1 })
	};

	renderInvite = () => {
		const { emailGroups } = this.state;
		return (
			<Fragment>
				<h4 className="h4 text-left">Invite Users Section</h4>
				{new Array(emailGroups).fill().map((v, index) => this.renderInviteGroups(index))}
				<div>
					<button className="btn btn-primary" onClick={this.onAddNewRow}>+ Add New
					</button>
				</div>
			</Fragment>
		)
	};

	renderSection() {
		const { sectionIndex } = this.state;
		let section = this.renderUserSection();
		switch (sectionIndex) {
			case 1:
				section = this.renderSpaceSection();
				break;
			case 2:
				section = this.renderInvite();
				break;
			default:
				break;
		}
		return section;
	}

	render() {
		const { sectionIndex } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<span>Create Company</span>
				</header>
				<section className="col-8 offset-2">
					<form onSubmit={this.onSubmit}>
						{this.renderDropdown('Company Type', options)}
						{this.renderSection()}
						<button className="btn btn-success mb-3 col-3 float-right"
								onClick={this.onBtnClick}>{sectionIndex < 2 ? 'Next' : 'Submit'}</button>
						{sectionIndex > 0 ?
							<button className="btn btn-success mb-3 col-3 float-left"
									onClick={() => this.setState({ sectionIndex: sectionIndex - 1 })}>Previous</button> : null}
					</form>

				</section>
			</div>
		);
	}
}

export default App;
