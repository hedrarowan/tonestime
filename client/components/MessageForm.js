import React from 'react'
import { connect } from 'react-redux'
import { fetchMessage, welcomeMessage } from '../store'
import Tone from 'tone'

class MessageForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            freq: 'a'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async componentDidMount() {
        
        {
            this.setState({
                message: this.props.message
                
            })
        }

    }

   handleChange(event) {
    
        this.setState({
            [event.target.name]: event.target.value,
            freq: this.state.message.slice(-1)
        })
        const freqNum = this.state.freq.charCodeAt(0) + 400;
        this.props.tone.triggerAttackRelease(`${freqNum}`, "8n")
        

        
       
        
    }

    handleSubmit(event) {
        
        event.preventDefault();
        this.props.tone.triggerRelease();
        this.props.newMessage(this.state.message)
        this.props.tone.triggerAttackRelease(`C3`, '8n')
        this.input.value = ''
    }

    render() {
        return (
            <div className='message-form'>
                <h3>{this.props.message}</h3>
            <form id='new-message-form' onSubmit={this.handleSubmit} >
                <div className = 'input'>
                    <input className='form-control'
                    ref={(ref) => this.input = ref}
                    type="text"
                    name="message"
                    
                    onChange={this.handleChange}
                    />
                    <span className='submit-button'>
                        <button type='submit'>Send Your Message!</button>
                    </span>
            
                </div>
            </form>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newMessage: (message) => dispatch(welcomeMessage(message))
    }
}

const connectForm = connect(mapStateToProps, mapDispatchToProps)(MessageForm);

export default connectForm;