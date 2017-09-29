import React from 'react';

export default class extends React.Component {
    constructor(props){
        super();
        this.state = {
            recipient: '',
            subject: '',
            body: ''           
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){
        const name = evt.target.name;
        const value = evt.target.value;
        const obj = {};
        obj[name] = value;
        this.setState(obj);
    }

    render() {
        const { recipient, subject, body } = this.state;
        const { handleChange } = this;
        const { onSend } = this.props;
        const state = this.state;

        return (
            <form onSubmit={() => onSend(state)}>
                <div className="form-group">
                    <label>To:</label>
                    <input onChange={handleChange} value={recipient} type="text" id="recipient-field" name="recipient" />
                </div>
                <div className="form-group">
                    <label>Subject:</label>
                    <input value={subject} onChange={handleChange} type="text" id="subject-field" name="subject" />
                </div>
                <div className="form-group">
                    <label>Body:</label>
                    <textarea onChange={handleChange} value={body} id="body-field" name="body" />
                </div>
                <button type="submit">Send Message</button>
            </form>
        );
    }

}
