import {Fragment, Component} from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default class App extends Component{
  render(){
    return(
      <Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </Fragment>
    )
  }
}

