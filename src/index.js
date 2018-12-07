import './style.css';

import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Fische} from './fiszka';

class Main extends Component{
constructor(props){
super(props);
this.state={
  questions:[

  ],
answer: "",
question: ""
}
}


changeMethod = (e) =>{
e.preventDefault()
let questions = this.state.questions
if((this.state.question.trim().length === 0 || this.state.answer.trim().length === 0)){
alert('uzupełnij fiszkę')
}else{
  questions.push({
    q:this.state.question,
    a: this.state.answer
  })
}
this.setState({questions});
this.setState({question: ""})
this.setState({answer: ""})
document.getElementById('question').value="";
document.getElementById('answer').value="";
}



delete = (i) =>{
let questions = this.state.questions
questions.splice(i, 1)
this.setState({questions})
}



render(){
return(

<Fragment>
<div id="create">
<p id="title">
Fische Creator by @PLtier
</p>
<form onSubmit={this.changeMethod}>
<input type="text" id="question" onChange={e => this.setState({question: e.target.value})}/>
<input type="text" id="answer" onChange={e => this.setState({answer: e.target.value})}/>
<button type="submit" >
Utwórz fiszkę
</button>
</form>
</div>
<div className="navBar">
{
this.state.questions.map((fiszka, i) => {
  return (

    <Fische
    onDelete={()=>this.delete(i)}
    question = {fiszka.q}
    tAnswer = {fiszka.a}
    />

  );
})

}
</div>
</Fragment>
   );
  }
 }

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);