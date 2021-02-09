import Layout from '../components/CommonLayout'
import { Component } from 'react';
import 'isomorphic-fetch';
const makealive = require('../utils/livencharacters');

class Contact extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    }

    handleChange = (e) => {
        var changeString = `{"`+e.target.name+`":"`+e.target.value+`"}`;

        var changeObject = JSON.parse(changeString);

        this.setState(changeObject);
    }

    submitForm = (e) => {
        e.preventDefault();

        var data = this.state;

        alert("Thank you "+data.name+". Your email has been sent and will be reviewed shortly.");

        this.setState({
            submitted: true,
            name: "",
            email: "",
            subject: "",
            message: ""
        });

        fetch('/api/contact', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
            console.log(res);
        })
    }
    
    render() {
        return (
            <Layout>
                <div className="content container-fluid" id="contactMe">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-5">
                            <h1><span className="first-letter">{makealive("Contact Me")}</span></h1>
                            <div>I am interested in freelance/consulting opportunities. Fill in the form with any requests/ideas that you would like me to look over and I'll get back to you.</div>
                            <br />
                            <form id="contactForm" autoComplete="off" onSubmit={this.submitForm}>
                                <div className="row">
                                    <input className="halfInput" onChange={this.handleChange} type="text" name="name" placeholder="Name" value={this.state.name} />
                                    <input className="halfInput" onChange={this.handleChange} type="text" name="email" placeholder="Email" value={this.state.email} />
                                </div>
                                <div className="row">
                                    <input className="fullInput" type="text" onChange={this.handleChange} name="subject" placeholder="Subject" value={this.state.subject} />
                                </div>
                                <div className="row">
                                    <textarea className="fullInput" onChange={this.handleChange} name="message" placeholder="Message" value={this.state.message} />
                                </div>
                                <div className="row">    
                                    <input id="submit" type="submit" value="SEND" />
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-5" style={{textAlign:"center"}}>
                            <img id="contactImage" src="/static/images/logoIconwhite.svg" alt="logo" />
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Contact