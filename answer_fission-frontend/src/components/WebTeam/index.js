import React, { Component } from 'react';
import './styles.css';

export default class WebTeam extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="web-team-container">
				<div class="col d-flex justify-content-around">
				<div className="card">
				<div className="web-team-wrapper">
					<div className="member-container">
						<div className="member-name">Ashish Patidar</div>
						<div className="status">
							<span className="field">Role</span> | Frontend Developer <br/>
						</div>
							<hr/>
						<div className="contacts">
							<a href="https://www.linkedin.com/in/ashish-patidar-34aa1a218/" target="_blank">
								<i className="fa fa-linkedin-square contact-icon"></i>
							</a>
							<a href="https://github.com/patidarashu" target="_blank">
								<i className="fa fa-github contact-icon"></i>
							</a>
							<br/>
							<br/>
							<div style={{textAlign: "left"}}>
							<i className="fa fa-envelope "></i>  patidarashish388@gmail.com
							<br/>
							<i className="fa fa-phone "></i>  +91 | 8959199523
							</div>

						</div>
					</div>
				</div>
				</div>
				<div className="card">
				<div className="web-team-wrapper">
					<div className="member-container">
						<div className="member-name">Sheetal Patil</div>
						<div className="status">
							<span className="field">Role</span> | Backend Developer <br/>
						</div>
							<hr/>
						<div className="contacts">
							<a href="https://www.linkedin.com/in/sheetal-patil-11b29a178/" target="_blank">
								<i className="fa fa-linkedin-square contact-icon"></i>
							</a>
							<a href="https://github.com/sheetalpatil117" target="_blank">
								<i className="fa fa-github contact-icon"></i>
							</a>
							<br/>
							<br/>
							<div style={{textAlign: "left"}}>
							<i className="fa fa-envelope "></i>  sheetalpatil1171999@gmail.com
							<br/>
							<i className="fa fa-phone "></i>  +91 | 9131076050
							</div>

						</div>
					</div>
				</div>
				</div>
				<div className="card">
				<div className="web-team-wrapper">
					<div className="member-container">
						<div className="member-name">Prabhat Singh Rajput</div>
						<div className="status">
							<span className="field">Role</span> | Backend Developer <br/>
						</div>
							<hr/>
						<div className="contacts">
							<a href="https://www.linkedin.com/in/prabhat-singh-rajput-683a55200/" target="_blank">
								<i className="fa fa-linkedin-square contact-icon"></i>
							</a>
							<a href="https://github.com/JerryD24" target="_blank">
								<i className="fa fa-github contact-icon"></i>
							</a>
							<br/>
							<br/>
							<div style={{textAlign: "left"}}>
							<i className="fa fa-envelope "></i>  prabhatc7879@gmail.com
							<br/>
							<i className="fa fa-phone "></i>  +91 | 7566552397
							</div>
						</div>
					</div>
				</div>
				</div>
				</div>
			</div>
		);
	}
}
