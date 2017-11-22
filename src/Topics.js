import React from 'react'
import { Route, Link } from 'react-router-dom'
import Topic from './Topic'
import Props from './Props'
import Components from './Components'



class Topics extends React.Component {
    constructor(props){
    super()
    this.state = {
      match : props.match,
    } 
  }

  render() {
    return(
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${this.state.match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${this.state.match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${this.state.match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>
    <Route path="/topics/rendering" component={Topic}/>
    <Route path="/topics/components" component={Components} />
    <Route path="/topics/props-v-state" component={Props} />
    <Route exact path={this.state.match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)
  }
}

export default Topics;