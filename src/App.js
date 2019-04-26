import React, { Component, Fragment } from 'react';
import ImagePicker from 'react-image-picker';
import axios from 'axios';
import 'react-image-picker/dist/index.css';
import './App.css';
import Logo from './oticaLogo.png';

import {
	processesApps,
	professionalApps,
	colors,
	countries,
	socialApps,
	options,
	groupTypes
} from './dummyData';

const MultiSelect = ({ title, options = [], onChange, placeholder = 'Select multiple options'}) => {
	let selectedValues = [];
	const onValueChange = val => {
		if (selectedValues.includes(val)) selectedValues = selectedValues.filter(v => v !== val);
		else selectedValues.push(val);
		return onChange(selectedValues);
	};
	return (
		<div className='d-flex flex-column w-100'>
			<label className='d-flex align-self-start'>{title}</label>
			<button type="button" className="btn btn-default btn-m dropdown-toggle form-control d-flex justify-content-between align-items-center" data-toggle="dropdown"><span>{placeholder}</span> <span className="caret" /></button>
			<ul className="dropdown-menu w-100">
				{options.map(o => <li><input type="checkbox" onChange={() => onValueChange(o.value)}/>&nbsp; &nbsp; <span>{o.name}</span></li>)}
			</ul>
		</div>
	);
};

class App extends Component {
	state = {
		selectedColor: null,
		sectionIndex: 0,
		emailGroups: 1,
		invitedUsers: [],
		companyName: null,
		firstName: null,
		lastName: null,
	};

	onInputChange = (e, value, maxLength) => {
		if (maxLength && e.target.value.length > maxLength) return;
		this.setState({ [value]: e.target.value })
	};

	renderInputGroup = (label, value = '', maxLength, placeholder = '', cssClass = '') => {
		if(placeholder != '')
		{
			return (
				<div className={"form-group row input-group-sm "+cssClass}>
					<input id={label} type={value === 'password' ? "password" : "text"} className="form-control"
						   value={this.state[value] || ''}
						   placeholder={placeholder}
						   onChange={e => this.onInputChange(e, value, maxLength)}/>
				</div>
			)
		}else
		{
			return (
				<div className={"form-group row input-group-sm "+cssClass}>
					<label>{label}</label>
					<input id={label} type={value === 'password' ? "password" : "text"} className="form-control"
						   value={this.state[value] || ''}
						   onChange={e => this.onInputChange(e, value, maxLength)}/>
				</div>
			)
		}
	};

	renderDropdown = (label, options, multiple) => {
		if (multiple) {
			return (
				<div className="form-group row input-group-sm">
					<MultiSelect
						title={label}
						options={options}
						class="form-control"
						onChange={values => this.setState({ [label.replace(' ', '').toLowerCase()]: values })}
					/>
				</div>
			)
		}
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
			<div className='sectionWrapper container'>
				<h4 className="h4 text-left">User Section</h4>
				{this.renderInputGroup('First Name', 'firstName')}
				{this.renderInputGroup('Last Name', 'lastName')}
				{this.renderInputGroup('Email', 'email')}
				{this.renderInputGroup('Phone Number', 'phone')}
				{this.renderInputGroup('License Number', 'licenseNumber', 7)}
				{this.renderDropdown('Country', countries)}
			</div>
		)
	};

	_renderColorPicker = (label, colorsArray) => {
		return (
			<div className='form-group row input-group-sm'>
				<label>{label}</label>
				<ImagePicker
					images={colorsArray.map((c, i) => ({ src: `${process.env.PUBLIC_URL}/images/${c.name.toLowerCase().replace(' ', '_')}.PNG`, value: i }))}
					onPick={x => this.setState({ color: colors[x.value].name})}
				/>
			</div>
		);
	};

	renderWelcomeSection = () => {
		return (
			<div className='sectionWrapper sectionWelcome'>
				<h2 className="h4 text-left">Welcome to Otica.Spaces!</h2>
				<div className="article_divider"></div>
				<p>Create your own space into Otica and invite your friends to join!</p>
				<p>Customize your experience, create your own groups, choose the features you want and get immediate and reliable access to items of knowledge you need.</p>
				<button className="btn-navigation mb-3 col-3 float-left" onClick={() => this.setState({ sectionIndex: 1 })}>
					<a href="javascript:void(0)">Start !</a>
				</button>
			</div>
		)
	};

	renderVerticalSection = () => {
		return (
			<div className='sectionWrapper sectionVertical'>
				<h2 className="h4 text-left">Step 1/3 Tell us more about you</h2>
				<div className="article_divider"></div>
				<p>By telling us more about you we will be able to choose the right app template for you and to create a user for you so you can login in your app's space</p>

					{this.renderDropdown('1. Choose your field of expertise', options)}
					{this.renderInputGroup('2. Choose your first name', 'firstName')}
					{this.renderInputGroup('3. Choose your last name', 'lastName')}
					{this.renderInputGroup('4. Choose your email', 'email')}
					{this.renderInputGroup('5. Choose your phone number', 'phone')}
					{this.renderInputGroup('6. Choose your license number', 'licenseNumber', 7)}
					{this.renderDropdown('7. Choose yout country', countries)}
					<br/><br/><br/>
					<button className="btn-navigation mb-3 col-3 float-left" onClick={() => this.setState({ sectionIndex: 0 })}>Previous step</button>
					<button className="btn-navigation mb-3 col-3 float-right" onClick={() => this.setState({ sectionIndex: 2 })}>Next step</button>
					<br/><br/><br/>
			</div>
		)
	};

	renderInviteSection = () => {
		const { emailGroups } = this.state;
		return (
			<Fragment>
				<div className='sectionWrapper sectionVertical'>
					<h2 className="h4 text-left">Step 3/3 Invite people in your space</h2>

					<div class="article_divider"></div>
					<p>By inviting users by name and email other will be able to access your space inside your app</p>

					{new Array(emailGroups).fill().map((v, index) => this.renderInviteGroups(index))}
					<br/><br/><br/>

					<button className="btn-navigation mb-3 col-3 float-left" onClick={() => this.setState({ sectionIndex: 2 })}>Previous</button>

					<button className="btn-navigation btn-navigation-green mb-3 col-3 float-right" onClick={() => this.setState({ sectionIndex: 4 })}>Create your space !</button>
				</div>
			</Fragment>

		)
	};

	renderLoaderSection = () => {
        const { sectionIndex, invitedUsers, emailGroups } = this.state;
        const _this = this;
        if (sectionIndex < 2) return this.setState({ sectionIndex: sectionIndex + 1 });
        console.log('SUBMIT', this.state);
        let userList = [];
        const { firstName, lastName, companyName, color, email } = this.state;
        if (!invitedUsers.length) {
            if (invitedUsers.length > 0) {
                userList = new Array(emailGroups).fill().map((v, i) => ({
                    name: this.state[`inviteName${i}`],
                    email: this.state[`inviteEmail${i}`],
                }));
            }
            userList.push({
                name: `${firstName} ${lastName}`,
                email
            });
            console.log('INVITED USERS LIST', userList)
        }
        if (!userList.length || !firstName || !lastName || !companyName || !color || !email) return this.setState({ sectionIndex: 6 });

        const bodyFormData = new FormData();
        bodyFormData.set('name', companyName);
        bodyFormData.set('username', `admin${firstName}${lastName}`);
        bodyFormData.set('full_name', `${firstName} ${lastName}`);
        bodyFormData.set('email', `admin${email}`);
        bodyFormData.set('app_color', color);
        bodyFormData.set('users', JSON.stringify(userList));
        axios({
            method: 'post',
            url: 'http://dev-api.otica.ai/api/spaces_api/createSpace',
            data: bodyFormData,
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(() => {
                _this.setState({sectionIndex: 5})
            })
            .catch(() => {
                _this.setState({sectionIndex: 6})
            });
		return (

			<div className='sectionWrapper sectionLoader'>
				<h2 className="h4 text-left">Please wait while we create your space</h2>

				<div class="article_divider"></div>
				<img src="./preloader.gif" />
				<p class='loading-text'>Loading ...</p>
			</div>
		)
	};

	renderSuccessSection = () => {


		const { emailGroups } = this.state;
		var _this = this;

		return (

			<div className='sectionWrapper sectionLoader'>
			<h2 className="h4 text-left">Congrats, your space was created</h2>
			<div class="article_divider"></div>
				<i class="fa fa-check-circle fa-success"></i>
				<p class='loading-text'>All done !</p>
			</div>
		)

	};

    renderFailSection = () => {
        return (

            <div className='sectionWrapper sectionLoader'>
                <h2 className="h4 text-left">An unknown error occurred</h2>
                <div class="article_divider"></div>
                <i class="fa fa-check-circle fa-success"></i>
                <p class='loading-text'>Please try again!</p>
            </div>
        )
    };

	renderSpaceSection = () => {
		return (
			<div className='sectionWrapper sectionSpace'>
				<h2 className="h4 text-left">Step 2/3 Customize your space</h2>
				<div class="article_divider"></div>

				<p>Configure and customize your space. Choose the name, the coloring and enable/disable app features</p>

				{this.renderInputGroup('1. Choose space name', 'companyName')}
				{this._renderColorPicker('2. Choose the color theme', colors)}
				{this.renderDropdown('3. Choose the group types you want to allow in your app', groupTypes)}
				{this.renderDropdown('4. Choose social capabilities', socialApps, true)}
				{this.renderDropdown('5. Choose your professional capabilities', professionalApps, true)}
				{this.renderDropdown('6. Choose your processes', processesApps, true)}

				<br/><br/><br/>

				<button className="btn-navigation mb-3 col-3 float-left" onClick={() => this.setState({ sectionIndex: 1 })}>Previous step</button>

				<button className="btn-navigation mb-3 col-3 float-right" onClick={() => this.setState({ sectionIndex: 3 })}>Next step</button>

				<br/><br/><br/>
			</div>
		)
	};

	renderInviteGroups = index => {
		return (
			<div className='row d-flex justify-content-between col-12 offset-3 invite-row'>
					{this.renderInputGroup('', `inviteName${index}`, 512,'Enter full name', 'invite-name')}
					{this.renderInputGroup('', `inviteEmail${index}`, 512,'Enter valid email', 'invite-email')}
					<div class='invite-add'>
						<button className="btn-add" onClick={this.onAddNewRow}>+</button>
					</div>
			</div>
		)
	};

	onAddNewRow = () => {
		const { emailGroups } = this.state;
		if (!this.state[`inviteName${emailGroups - 1}`] || !this.state[`inviteEmail${emailGroups - 1}`]) return;
		this.setState({ emailGroups: emailGroups + 1 })
	};

	renderSection() {
		const { sectionIndex } = this.state;

		let section = this.renderUserSection();
		switch (sectionIndex) {
			case 0:
				section = this.renderWelcomeSection();
				break;
			case 1:
				section = this.renderVerticalSection();
				break;
			case 2:
				section = this.renderSpaceSection();
				break;
			case 3:
				section = this.renderInviteSection();
				break;
			case 4:
				section = this.renderLoaderSection();
				break;
			case 5:
				section = this.renderSuccessSection();
				break;
            case 6:
                section = this.renderFailSection();
				break;
			default:
				break;
		}
		return section;
	}

	_renderContent() {
		const { sectionIndex, error } = this.state;
		if (error) return (
			<section className="col-8 offset-2 App-section">
				<div className="alert alert-danger" role="alert">
					Some fields were not added. Try again!
				</div>
				<button className="btn btn-primary" onClick={() => this.setState({ error: false })}>Ok</button>
			</section>
		);
		return (

				<div className="App-section-wrapper">
					<div className="col-8 offset-2 App-section">
						<div className="header_title">
				            <a href="http://otica.ai/">
				            	<img src="http://spaces.otica.ai/static/media/oticaLogo.57635eed.png" alt="otica_logo_blog" />
				            </a>
				        </div>

						<form onSubmit={this.onSubmit}>
							{this.renderSection()}
						</form>
					</div>
					<div className="footer">
				        <div className="footer_text">
				            <p>
								We are always enthusiastic to show our solutions and discuss them.
								You are invited to contact us with any query you have or any information you need.
				                <br/>
				                <a target="_blank" href="https://twitter.com/intent/tweet?text=Otica&amp;url=http://otica.ai">
				                	<i className="fab fa-twitter" id="footer_icon"></i>
				          		</a>
				                <a target="_blank" href="https://www.linkedin.com/company/otica-ai/">
				                	<i className="fab fa-linkedin-in" id="footer_icon"></i>
				                </a>
				            </p>

				        </div>

				        <div className="footer_button_wrapper">
				            <button className="footer_button">
				                <a href="mailto:info@otica.ai" className="footer_button_text">Contact Us</a>
				            </button>
				        </div>
					</div>
				</div>

		)
	}

	render() {
		return (
			<div className="App">
				<header className="header_wrapper">
					<div className="header_navigation">
			            <a className="header_navigation_item" href="#our_vision">Our vision</a>
			            <a className="header_navigation_item" href="//blog.otica.ai">Blog</a>
			            <a className="header_navigation_item" href="mailto:info@otica.ai">Contact us</a>
			        </div>
			    </header>

				{this._renderContent()}
			</div>
		);
	}
}

export default App;
