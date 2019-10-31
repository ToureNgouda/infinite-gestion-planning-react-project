import React , { Component }from 'react';
import { Table } from 'reactstrap';

export default class  Planning extends Component{
    render(){
        return (
            <Table bordered>
              <thead>
                <tr>
                  <th></th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">08h00-16h00</th>
                  <td>1 <br/>2</td>
                  <td>3<br/>4</td>
                  <td>5 <br/>5</td>
                </tr>
                <tr>
                  <th scope="row">16h00-00h00</th>
                  <td>1 <br/>2</td>
                  <td>3<br/>4</td>
                  <td>5 <br/>5</td>
                </tr>
                <tr>
                  <th scope="row">00h00-08h00</th>
                  <td>1 <br/>2</td>
                  <td>3<br/>4</td>
                  <td>5 <br/>5</td>
                </tr>
              </tbody>
            </Table>
          );
    }
  
}
