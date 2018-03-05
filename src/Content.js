import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
    render() {
        return (
          <section>             
            <h3 className= "content-info">Career</h3>
            <ol className="content-info">
              <li> Worl War II</li>
              <li> UNIVAC </li>
              <li> COBOL </li>
              <li> Standards </li>
            </ol>
            <h4 className="content-info">Phrase</h4> 
						<blockquote cite="http://www.azquotes.com/quote/553883"> Humans are allergic to change. They love to say, 'We've always done it this way.' I try to fight that. That's why I have a clock on my wall that runs counter-clockwise. </blockquote>
          </section>
      	);
		}
}




export default Content;