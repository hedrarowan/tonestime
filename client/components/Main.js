import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MessageForm  from './MessageForm'
import store from '../store'
import  * as Tone from 'tone'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.toneTime = new Tone.Synth({
            oscillator: {
                type: 'fatsawtooth7',
                harmonicity: 0.8,
                modulationType: 'sine'
            }, 
            envelope: {
                attack: 0, 
                decay: 0.2,
                sustain: 0.2,
                release: 0.4
            }
        }).toDestination()
        this.state = {
            message: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleStop = this.handleStop.bind(this)
    }

    

    componentDidMount() {
        
        this.setState({
            message: this.props.message
        })
        
    }

    handleClick() {
        Tone.start()

        this.toneTime.triggerAttack("C4", "8n");
    }

    handleStop() {
        this.toneTime.triggerRelease()
    }
    render() {
        return (
            <div>
                <div>
                {/* <button onClick={this.handleClick}>Boom</button> */}
                
                    
                </div>
                <main>
                    <h3>{store.message}</h3>
                    <MessageForm tone={this.toneTime}/>
                </main>

                <div>
                    <button onClick={this.handleStop}>STOP</button>
                </div>
                
            </div>
        )
            
        
    }
}