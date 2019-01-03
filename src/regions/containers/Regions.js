import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'
import Region from '../components/Region'
import Loading from '../../shared/components/Loading';
import RegionLayout from '../components/RegionsLayout';
import Empty from '../../shared/components/Empty';

class Regions extends Component {

  state = {
    regionsList: [],
    loading: true
  }

  static navigationOptions = () => {
    return {
      header: null
    }
  }

  async componentWillMount() {
    await this.fetchRegions();
    this.setState({
      loading: false
    })
  }

  async fetchRegions() {
    const { baseUrl } = this.props;

    await fetch(`${baseUrl}region`).then(response => {
      return response.json();
    }).then(responseData => {
      const { results } = responseData
      this.setState({regionsList: results})
    }).catch(error => {
      this.setState({regionsList: []})
    })
  }

  keyExtractor = (item) => {
    return(item.name.toString());
  }

  renderEmpty = () => {
    return(<Empty message='no se encontro ninguna región' />)
  }

  renderRegion = ({item}) => {
    return(
      <Region 
        {...item} 
        onPress={() => { this.viewRegion(item) }}
      />
    )
  }

  viewRegion = (item) => {
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'CreateTeam',
        params: {
          name: item.name,
          url: item.url
        }
      })
    )
  }

  render() {
    if (this.state.loading) {
      return(<Loading />)
    }
    return(
      <RegionLayout
        user={this.props.user}
      >
        <FlatList 
          data={this.state.regionsList}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderRegion}
        />
      </RegionLayout>
    );
  }
}

function mapStateToProps(state){
  return {
    authorize: state.authorize,
    user: state.user,
    baseUrl: state.baseUrl
  }
}

export default connect(mapStateToProps)(Regions)
