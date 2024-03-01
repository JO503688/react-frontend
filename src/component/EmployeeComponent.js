import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';

export default class EmployeeComponent extends Component {
constructor(props) {
    super(props);
    this.state ={
        employee: {},
        department: {},
        organization: {}
    } 
}
componentDidMount(){
   EmployeeService.getEmployee().then((Response) =>{

    this.setState({employee: Response.data.employee})
    this.setState({department : Response.data.department})
    this.setState({organization : Response.data.organization})

    console.log(this.state.employee)
    console.log(this.state.department)
    console.log(this.state.organization)

   })
}
  render() {
    return (
      <div>EmployeeComponent</div>
    )
  }
}
