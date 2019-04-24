import React, { Component, Fragment } from 'react';
import './App.css';

const options = [
	{
		name: 'Select Company',
		value: '',
		disabled: false,
	},
	{
		name: 'Law',
		value: 'law',
		disabled: false,
	},
	{
		name: 'Medical',
		value: 'medical',
		disabled: true,
	},
	{
		name: 'Safety Management',
		value: 'safety',
		disabled: true,
	}
];

const colors = [
	{
		name: 'Select color',
		value: '',
		disabled: false,
	},
	{
		name: 'Orange',
		value: '#F19113',
		disabled: false,
	},
	{
		name: 'Red Orange',
		value: '#CD4A01',
		disabled: false,
	},
	{
		name: 'Indian Red',
		value: '#B83226',
		disabled: false,
	},
	{
		name: 'Silver',
		value: '#B5BBC0',
		disabled: false,
	},
	{
		name: 'Grey',
		value: '#748182',
		disabled: false,
	},
	{
		name: 'Turquoise',
		value: '#16967A',
		disabled: false,
	},
	{
		name: 'Green',
		value: '#23A455',
		disabled: false,
	},
	{
		name: 'Blue',
		value: '#2474AF',
		disabled: false,
	},
	{
		name: 'Purple',
		value: '#833CA3',
		disabled: false,
	},
	{
		name: 'Space Grey',
		value: '#273646',
		disabled: false,
	}
];

const socialApps = [
	{
		name: 'Select app',
		value: '',
		disabled: false,
	},
	{
		name: 'Announcements',
		value: 'announcements',
		disabled: false,
	},
	{
		name: 'Chats',
		value: 'chats',
		disabled: false,
	},
	{
		name: 'News',
		value: 'news',
		disabled: false,
	}
];

const professionalApps = [
	{
		name: 'Select App',
		value: '',
		disabled: false,
	},
	{
		name: 'Q&A',
		value: 'qa',
		disabled: false,
	},
	{
		name: 'Referrals',
		value: 'referrals',
		disabled: false,
	},
];

const processesApps = [
	{
		name: 'Select App',
		value: '',
		disabled: false,
	},
	{
		name: 'Workflow',
		value: 'workflow',
		disabled: false,
	},
	{
		name: 'Read&Sign',
		value: 'readSign',
		disabled: false,
	},
	{
		name: 'Checklists',
		value: 'checklists',
		disabled: false,
	},
	{
		name: 'Task Assignments',
		value: 'taskAssignments',
		disabled: false,
	}
];

const groupTypes = [
	{
		name: 'Select Group Type',
		value: '',
		disabled: false,
	},
	{
		name: 'Open',
		value: 'open',
		disabled: false,
	},
	{
		name: 'Private',
		value: 'private',
		disabled: false,
	},
	{
		name: 'Close Sharing',
		value: 'closeSharing',
		disabled: false,
	},
];

const countries = [
	{
		name: 'Select Country',
		value: '',
		disabled: false,
	},
	{ name: 'Afghanistan', value: 'AF' },
	{ name: 'Albania', value: 'AL' },
	{ name: 'Algeria', value: 'DZ' },
	{ name: 'American Samoa', value: 'AS' },
	{ name: 'Andorra', value: 'AD' },
	{ name: 'Angola', value: 'AO' },
	{ name: 'Anguilla', value: 'AI' },
	{ name: 'Antarctica', value: 'AQ' },
	{ name: 'Antigua and Barbuda', value: 'AG' },
	{ name: 'Argentina', value: 'AR' },
	{ name: 'Armenia', value: 'AM' },
	{ name: 'Aruba', value: 'AW' },
	{ name: 'Australia', value: 'AU' },
	{ name: 'Austria', value: 'AT' },
	{ name: 'Azerbaijan', value: 'AZ' },
	{ name: 'Bahamas', value: 'BS' },
	{ name: 'Bahrain', value: 'BH' },
	{ name: 'Bangladesh', value: 'BD' },
	{ name: 'Barbados', value: 'BB' },
	{ name: 'Belarus', value: 'BY' },
	{ name: 'Belgium', value: 'BE' },
	{ name: 'Belize', value: 'BZ' },
	{ name: 'Benin', value: 'BJ' },
	{ name: 'Bermuda', value: 'BM' },
	{ name: 'Bhutan', value: 'BT' },
	{ name: 'Bolivia', value: 'BO' },
	{ name: 'Bosnia and Herzegovina', value: 'BA' },
	{ name: 'Botswana', value: 'BW' },
	{ name: 'Bouvet Island', value: 'BV' },
	{ name: 'Brazil', value: 'BR' },
	{ name: 'British Indian Ocean Territory', value: 'IO' },
	{ name: 'Brunei Darussalam', value: 'BN' },
	{ name: 'Bulgaria', value: 'BG' },
	{ name: 'Burkina Faso', value: 'BF' },
	{ name: 'Burundi', value: 'BI' },
	{ name: 'Cambodia', value: 'KH' },
	{ name: 'Cameroon', value: 'CM' },
	{ name: 'Canada', value: 'CA' },
	{ name: 'Cape Verde', value: 'CV' },
	{ name: 'Cayman Islands', value: 'KY' },
	{ name: 'Central African Republic', value: 'CF' },
	{ name: 'Chad', value: 'TD' },
	{ name: 'Chile', value: 'CL' },
	{ name: 'China', value: 'CN' },
	{ name: 'Christmas Island', value: 'CX' },
	{ name: 'Cocos (Keeling) Islands', value: 'CC' },
	{ name: 'Colombia', value: 'CO' },
	{ name: 'Comoros', value: 'KM' },
	{ name: 'Congo', value: 'CG' },
	{ name: 'Congo, The Democratic Republic of the', value: 'CD' },
	{ name: 'Cook Islands', value: 'CK' },
	{ name: 'Costa Rica', value: 'CR' },
	{ name: 'Cote D\'Ivoire', value: 'CI' },
	{ name: 'Croatia', value: 'HR' },
	{ name: 'Cuba', value: 'CU' },
	{ name: 'Cyprus', value: 'CY' },
	{ name: 'Czech Republic', value: 'CZ' },
	{ name: 'Denmark', value: 'DK' },
	{ name: 'Djibouti', value: 'DJ' },
	{ name: 'Dominica', value: 'DM' },
	{ name: 'Dominican Republic', value: 'DO' },
	{ name: 'Ecuador', value: 'EC' },
	{ name: 'Egypt', value: 'EG' },
	{ name: 'El Salvador', value: 'SV' },
	{ name: 'Equatorial Guinea', value: 'GQ' },
	{ name: 'Eritrea', value: 'ER' },
	{ name: 'Estonia', value: 'EE' },
	{ name: 'Ethiopia', value: 'ET' },
	{ name: 'Falkland Islands (Malvinas)', value: 'FK' },
	{ name: 'Faroe Islands', value: 'FO' },
	{ name: 'Fiji', value: 'FJ' },
	{ name: 'Finland', value: 'FI' },
	{ name: 'France', value: 'FR' },
	{ name: 'French Guiana', value: 'GF' },
	{ name: 'French Polynesia', value: 'PF' },
	{ name: 'French Southern Territories', value: 'TF' },
	{ name: 'Gabon', value: 'GA' },
	{ name: 'Gambia', value: 'GM' },
	{ name: 'Georgia', value: 'GE' },
	{ name: 'Germany', value: 'DE' },
	{ name: 'Ghana', value: 'GH' },
	{ name: 'Gibraltar', value: 'GI' },
	{ name: 'Greece', value: 'GR' },
	{ name: 'Greenland', value: 'GL' },
	{ name: 'Grenada', value: 'GD' },
	{ name: 'Guadeloupe', value: 'GP' },
	{ name: 'Guam', value: 'GU' },
	{ name: 'Guatemala', value: 'GT' },
	{ name: 'Guernsey', value: 'GG' },
	{ name: 'Guinea', value: 'GN' },
	{ name: 'Guinea-Bissau', value: 'GW' },
	{ name: 'Guyana', value: 'GY' },
	{ name: 'Haiti', value: 'HT' },
	{ name: 'Heard Island and Mcdonald Islands', value: 'HM' },
	{ name: 'Holy See (Vatican City State)', value: 'VA' },
	{ name: 'Honduras', value: 'HN' },
	{ name: 'Hong Kong', value: 'HK' },
	{ name: 'Hungary', value: 'HU' },
	{ name: 'Iceland', value: 'IS' },
	{ name: 'India', value: 'IN' },
	{ name: 'Indonesia', value: 'ID' },
	{ name: 'Iran, Islamic Republic Of', value: 'IR' },
	{ name: 'Iraq', value: 'IQ' },
	{ name: 'Ireland', value: 'IE' },
	{ name: 'Isle of Man', value: 'IM' },
	{ name: 'Israel', value: 'IL' },
	{ name: 'Italy', value: 'IT' },
	{ name: 'Jamaica', value: 'JM' },
	{ name: 'Japan', value: 'JP' },
	{ name: 'Jersey', value: 'JE' },
	{ name: 'Jordan', value: 'JO' },
	{ name: 'Kazakhstan', value: 'KZ' },
	{ name: 'Kenya', value: 'KE' },
	{ name: 'Kiribati', value: 'KI' },
	{ name: 'Korea, Democratic People\'S Republic of', value: 'KP' },
	{ name: 'Korea, Republic of', value: 'KR' },
	{ name: 'Kuwait', value: 'KW' },
	{ name: 'Kyrgyzstan', value: 'KG' },
	{ name: 'Lao People\'S Democratic Republic', value: 'LA' },
	{ name: 'Latvia', value: 'LV' },
	{ name: 'Lebanon', value: 'LB' },
	{ name: 'Lesotho', value: 'LS' },
	{ name: 'Liberia', value: 'LR' },
	{ name: 'Libyan Arab Jamahiriya', value: 'LY' },
	{ name: 'Liechtenstein', value: 'LI' },
	{ name: 'Lithuania', value: 'LT' },
	{ name: 'Luxembourg', value: 'LU' },
	{ name: 'Macao', value: 'MO' },
	{ name: 'Macedonia, The Former Yugoslav Republic of', value: 'MK' },
	{ name: 'Madagascar', value: 'MG' },
	{ name: 'Malawi', value: 'MW' },
	{ name: 'Malaysia', value: 'MY' },
	{ name: 'Maldives', value: 'MV' },
	{ name: 'Mali', value: 'ML' },
	{ name: 'Malta', value: 'MT' },
	{ name: 'Marshall Islands', value: 'MH' },
	{ name: 'Martinique', value: 'MQ' },
	{ name: 'Mauritania', value: 'MR' },
	{ name: 'Mauritius', value: 'MU' },
	{ name: 'Mayotte', value: 'YT' },
	{ name: 'Mexico', value: 'MX' },
	{ name: 'Micronesia, Federated States of', value: 'FM' },
	{ name: 'Moldova, Republic of', value: 'MD' },
	{ name: 'Monaco', value: 'MC' },
	{ name: 'Mongolia', value: 'MN' },
	{ name: 'Montserrat', value: 'MS' },
	{ name: 'Morocco', value: 'MA' },
	{ name: 'Mozambique', value: 'MZ' },
	{ name: 'Myanmar', value: 'MM' },
	{ name: 'Namibia', value: 'NA' },
	{ name: 'Nauru', value: 'NR' },
	{ name: 'Nepal', value: 'NP' },
	{ name: 'Netherlands', value: 'NL' },
	{ name: 'Netherlands Antilles', value: 'AN' },
	{ name: 'New Caledonia', value: 'NC' },
	{ name: 'New Zealand', value: 'NZ' },
	{ name: 'Nicaragua', value: 'NI' },
	{ name: 'Niger', value: 'NE' },
	{ name: 'Nigeria', value: 'NG' },
	{ name: 'Niue', value: 'NU' },
	{ name: 'Norfolk Island', value: 'NF' },
	{ name: 'Northern Mariana Islands', value: 'MP' },
	{ name: 'Norway', value: 'NO' },
	{ name: 'Oman', value: 'OM' },
	{ name: 'Pakistan', value: 'PK' },
	{ name: 'Palau', value: 'PW' },
	{ name: 'Palestinian Territory, Occupied', value: 'PS' },
	{ name: 'Panama', value: 'PA' },
	{ name: 'Papua New Guinea', value: 'PG' },
	{ name: 'Paraguay', value: 'PY' },
	{ name: 'Peru', value: 'PE' },
	{ name: 'Philippines', value: 'PH' },
	{ name: 'Pitcairn', value: 'PN' },
	{ name: 'Poland', value: 'PL' },
	{ name: 'Portugal', value: 'PT' },
	{ name: 'Puerto Rico', value: 'PR' },
	{ name: 'Qatar', value: 'QA' },
	{ name: 'Reunion', value: 'RE' },
	{ name: 'Romania', value: 'RO' },
	{ name: 'Russian Federation', value: 'RU' },
	{ name: 'RWANDA', value: 'RW' },
	{ name: 'Saint Helena', value: 'SH' },
	{ name: 'Saint Kitts and Nevis', value: 'KN' },
	{ name: 'Saint Lucia', value: 'LC' },
	{ name: 'Saint Pierre and Miquelon', value: 'PM' },
	{ name: 'Saint Vincent and the Grenadines', value: 'VC' },
	{ name: 'Samoa', value: 'WS' },
	{ name: 'San Marino', value: 'SM' },
	{ name: 'Sao Tome and Principe', value: 'ST' },
	{ name: 'Saudi Arabia', value: 'SA' },
	{ name: 'Senegal', value: 'SN' },
	{ name: 'Serbia and Montenegro', value: 'CS' },
	{ name: 'Seychelles', value: 'SC' },
	{ name: 'Sierra Leone', value: 'SL' },
	{ name: 'Singapore', value: 'SG' },
	{ name: 'Slovakia', value: 'SK' },
	{ name: 'Slovenia', value: 'SI' },
	{ name: 'Solomon Islands', value: 'SB' },
	{ name: 'Somalia', value: 'SO' },
	{ name: 'South Africa', value: 'ZA' },
	{ name: 'South Georgia and the South Sandwich Islands', value: 'GS' },
	{ name: 'Spain', value: 'ES' },
	{ name: 'Sri Lanka', value: 'LK' },
	{ name: 'Sudan', value: 'SD' },
	{ name: 'Suriname', value: 'SR' },
	{ name: 'Svalbard and Jan Mayen', value: 'SJ' },
	{ name: 'Swaziland', value: 'SZ' },
	{ name: 'Sweden', value: 'SE' },
	{ name: 'Switzerland', value: 'CH' },
	{ name: 'Syrian Arab Republic', value: 'SY' },
	{ name: 'Taiwan, Province of China', value: 'TW' },
	{ name: 'Tajikistan', value: 'TJ' },
	{ name: 'Tanzania, United Republic of', value: 'TZ' },
	{ name: 'Thailand', value: 'TH' },
	{ name: 'Timor-Leste', value: 'TL' },
	{ name: 'Togo', value: 'TG' },
	{ name: 'Tokelau', value: 'TK' },
	{ name: 'Tonga', value: 'TO' },
	{ name: 'Trinidad and Tobago', value: 'TT' },
	{ name: 'Tunisia', value: 'TN' },
	{ name: 'Turkey', value: 'TR' },
	{ name: 'Turkmenistan', value: 'TM' },
	{ name: 'Turks and Caicos Islands', value: 'TC' },
	{ name: 'Tuvalu', value: 'TV' },
	{ name: 'Uganda', value: 'UG' },
	{ name: 'Ukraine', value: 'UA' },
	{ name: 'United Arab Emirates', value: 'AE' },
	{ name: 'United Kingdom', value: 'GB' },
	{ name: 'United States', value: 'US' },
	{ name: 'United States Minor Outlying Islands', value: 'UM' },
	{ name: 'Uruguay', value: 'UY' },
	{ name: 'Uzbekistan', value: 'UZ' },
	{ name: 'Vanuatu', value: 'VU' },
	{ name: 'Venezuela', value: 'VE' },
	{ name: 'Viet Nam', value: 'VN' },
	{ name: 'Virgin Islands, British', value: 'VG' },
	{ name: 'Virgin Islands, U.S.', value: 'VI' },
	{ name: 'Wallis and Futuna', value: 'WF' },
	{ name: 'Western Sahara', value: 'EH' },
	{ name: 'Yemen', value: 'YE' },
	{ name: 'Zambia', value: 'ZM' },
	{ name: 'Zimbabwe', value: 'ZW' }
];


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
			console.log('INNVITED', userList)
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
