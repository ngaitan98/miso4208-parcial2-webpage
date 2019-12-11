import React from 'react';
import './App.css';
import Mutant from './Mutant';

class App extends React.Component {
  state = {
    mutantes: []
  }
  constructor() {
    super()
    this.state = { mutantes: [] }
  }
  componentDidMount(){
    fetch("https://mutantes.s3.amazonaws.com/mutantes.json").then(response => {
      return response.json()
    }).then(json => {
      this.setState({mutantes:json.mutantes})
      console.log(this.state);
    }).catch(err => { console.log(err) })
  }
  render() {
    return (
      <div className="container">
        <div id="header">
          <div className="title">MISO-4208 Mutant Killer</div>
          <div className="row">
            <div className="col-sm-6">
              <h4><a href="http://ngaitan.com" target="_blank">Nicolás Gaitán</a></h4>
            </div>
            <div className="col-sm-6">
              <h4><a href="https://github.com/jaespinosa12" target="_blank">Julian Andrés Espinosa</a></h4>
            </div>
          </div>
        </div>
        <div id="text">

        </div>
        <div id="mutants">
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Encontrado</th>
                <th>Compila</th>
                <th>Reportes</th>
              </tr>
            </thead>
            <tbody>
            {this.state.mutantes.map((e,i) => <Mutant data={e} key={i}/>)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App


