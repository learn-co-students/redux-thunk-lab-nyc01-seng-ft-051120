import React, { Component } from 'react';
import CatList from './CatList'
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
class App extends Component {   
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  loadingOrCats =() => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CatList catPics={this.props.catPics}/>
    }
  }

  render() {
    return (
      <div>
        <h1>CatBook</h1>
          {this.loadingOrCats()}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
