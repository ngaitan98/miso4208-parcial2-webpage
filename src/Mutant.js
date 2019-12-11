import React from 'react';
import './Mutant.css';

class Mutant extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {mutant: props.data}
    }
    render(){
        return(
            <tr className = {!this.state.mutant.detectado?"table-success":"table-danger"}>
                <th scope = "row">{this.state.mutant.num}</th>
                <td>{this.state.mutant.detectado?"Sí":"No"}</td>
                <td>{this.state.mutant.compila?"Sí":"No"}</td>
                <td>
                    <a href = {this.state.mutant.bdtReport} target="_blank">Reporte BDT</a>
                </td>
            </tr>
        )
    }
}
export default Mutant;