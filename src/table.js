import React, { Component } from 'react';
import './Table.css';
import grace from './grace.jpg'

class Table extends Component {
	render() {
		return ( 
			<div className="Summary">
				<table className="Summary-table">
					<thead>
						<tr>
							<th colSpan="2">Grace Murray Hopper</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colSpan="2">
								<img src={grace} alt="Grace Hooper" className= "Img-width"/>
								<p>Rear Admiral Grace M. Hopper, 1984</p>
							</td>
						</tr>
						<tr>
							<th>NickName</th>
							<td>"Amazing grace"</td>
						</tr>
						<tr>
							<th>Born</th>
							<td>December 9, 1906</td>
						</tr>
						<tr>
							<th>Died</th>
							<td>January 1, 1992 (aged 85)</td>
						</tr>
						<tr>
							<th>Allegiance</th>
							<td>
								<img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png" alt="Bandera de Estados Unidos" />United States of America</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Table;