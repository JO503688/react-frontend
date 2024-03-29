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
      <div>
        <div className='container card offset-md-3'>
          <h3 className='text-center card-header'> View Employee Details</h3>
            <div className='card-body'>
              <div className='row'>
                  <p><strong>Employee First Name:</strong>{this.state.employee.firstName}</p>
              </div>
              <div className='row'>
                  <p><strong>Employee Last Name:</strong>{this.state.employee.lastName}</p>
              </div>
              <div className='row'>
                  <p><strong>Employee Email:</strong>{this.state.employee.email}</p>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
