import React from "react";

class HomePage extends React.Component {
    constructor(){
        super();

        this.state = {
            questions: []
        };
    }

    componentDidMount(){
        fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple')
        .then(resp => resp.json())
        .then(data => this.setState({
            questions: data.results
        }))
    }
    
    render(){
        console.log(this.state.questions)
        return (
            <div> 
                Home Page Component 
                {this.state.questions.map(q => {
                    return <p key={q.question}>{q.question}</p>
                })}

            </div>
        )
    }
}

export default HomePage;