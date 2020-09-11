import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import styles from './styles';

import PageHeader from '../../shared/PageHeader';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.navigation = props.navigation;
  }

  state = {
    productInfo: {},
    docs: [],
    page: 1,
  };

  

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    this.setState({
      docs: [...this.state.docs, ...docs],
      productInfo,
      page
    });
  };

  loadMore = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  }

  renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      {/* {console.log(item)} */}
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>

      <TouchableOpacity style={styles.productButton}
        onPress={() => {
          this.props.navigation.navigate('Products', item);
        }}>
        <Text style={styles.productButtonText}>Acess</Text>
      </TouchableOpacity>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        
        <PageHeader title='JSHunt'/>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.2}
        />
      </View>
    );
  }
}
