import React, {Component} from 'react'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component{
  constructor(){
      super()
      this.state ={
          robots: [],
          searchfield:''
      }
      console.log('constructor')
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json()).then(users=> this.setState({robots:users}))

      console.log('DidMount')
  }

  onSearchChange=(event)=>{
      this.setState({
          searchField: event.target.value
      })


  } 

    render(){
        const {robots} = this.state;
        console.log('Render')
        const filteredRobots = robots.filter(robot => {
            return robot.name.includes(this.state.searchField);
        })
        
        return !robots.length ? <h1>Loading.....</h1> :
         (
            <div className=" center">
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <ErrorBoundary>
            <div className='container row'>  
              <CardList robots={filteredRobots}/>                 
             </div>
             </ErrorBoundary>
            </Scroll>
          </div>
         )
          

        

    }


}

export default App;