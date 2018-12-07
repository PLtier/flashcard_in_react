
import React, {Component, Fragment} from 'react';

export class Fische extends Component{

  constructor(props){
  super(props);
  this.state={
uAnswer:"",
isGoodOrBad:""
  };


}


checkMethod = () =>{
let tAnswer = this.props.tAnswer;
let uAnswer = this.state.uAnswer;

if (tAnswer === uAnswer){
  this.setState({
      isGoodOrBad: 'good'
    });
} else {
  this.setState({
      isGoodOrBad: 'bad'
});

}
}


render(){
return(
<Fragment>
<div className="gBlock">
</div>
<div className="fiszka">
<div>{this.props.question}</div>
<input onChange={e => this.setState({uAnswer: e.target.value})}/>
<button onClick={this.checkMethod}>
Check!
</button>
<div>checkLog: {this.state.isGoodOrBad}</div>
<button onClick={this.props.onDelete}>
Delete
</button>
</div>
</Fragment>

)
}
}
