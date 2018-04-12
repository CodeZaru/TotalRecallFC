import React, { Component } from 'react';
import './CardEditor.css';
import './CardPreview.css';

class CardEditor extends Component {
		constructor(props) {
			super(props);
			this.handleChange = this.handleChange.bind(this);
			this.state = { value: 'Card Preview' };
		}

		handleChange(e) {
			this.setState({ value: e.target.value });
		}



//		getCardQuestion() {
//		    const question = CardEditor.cardEditorQuestion.value;

//		    return { question };
//		}
/*
		getCardAnswer() {
		    const answer = cardEditorAnswer.value;

		    return { answer };
		}

*/
		render() {
		return (
      
    <div className="wholePage">


		<div className="halfPage">
          	<div className="cardMarkupDiv">
		        <div className="cardMarkupPanel">
            		<h3>Question</h3>
            		<textarea
              			style={{width: "100%", height: "100%"}}
              			className="cardEditorQuestion"
              			onChange={this.handleChange}
              			//value={song.chordpro}
              		/>
          		</div>
          		<div className="cardMarkupPanel">
            		<h3>Answer</h3>
            		<textarea
			            style={{width: "100%", height: "100%"}}
			            className="cardEditorAnswer"
			            onChange={this.handleChange}
			            //value={song.chordpro}
              		/>
          		</div>
        	</div>
        </div>	
	</div>      
     
		);
	}
}

export default CardEditor;