import React, { Component } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'
import Item from '../components/Item'
import VerticalSeparator from '../../shared/components/VerticalSeparator';

class Regions extends Component {

  state = {
    regionsList: []
  }

  static navigationOptions = () => {
    return {
      header: null
    }
  }

  async componentDidMount() {
    await this.fetchRegions();
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
    return <Text>NO hay sugerencias</Text>
  }

  itemSeparator = () => {
    return(<VerticalSeparator />)
  }

  renderItem = ({item}) => {
    return(
      <Item 
        {...item} 
        onPress={() => { this.viewItem(item) }}
      />
    )
  }

  viewItem = (item) => {
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'PokemonList',
        params: {
          name: item.name,
          url: item.url
        }
      })
    )
  }

  render() {
    return(
      <View>
        <Text>
          EN HOME: {this.props.user.name}
        </Text>
        <Text>
          AQUI VOY A HACER EL FETCH DE LAS REGIONES
        </Text>
        <FlatList 
          data={this.state.regionsList}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </View>
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
