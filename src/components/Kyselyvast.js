import React, {Component} from 'react';  

/* Import Components */
/*
import CheckBox from '../components/CheckBox';  
import Input from '../components/Input';  
import TextArea from '../components/TextArea';  
import Select from '../components/Select';
import Button from '..Button/components/Button'
*/
class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        email: '',
        age: '',
        gender: '',
        expertise: '',
        about: ''

      },

      genderOptions: ['Male', 'Female', 'Others'],
      skillOptions: ['Programming', 'Development', 'Design', 'Testing']

    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit() {
    // Form submission logic
  }
  handleClearForm() {
    // Logic for resetting the form
  }
  
  /*
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>

        <Input /> 
        <Input /> 
        <Select /> 
        <CheckBox /> 
        <TextArea /> 
        <Button /> 
        <Button /> 

      </form>
    );
  }
*/

  render() {
    return ( <p>Tänne vastaukset? </p>)}
    ;
}

export default FormContainer;