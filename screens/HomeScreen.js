import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { actions } from '../store/bookReducer';

const mockData = [{
  title: 'Some bio',
  author: 'Bajju Sam',
  available: false,
  with: 'John snow'
},
{
  title: 'Some other bio',
  author: 'Sam Bajju',
  available: true,
}];


const navigateAction = item => NavigationActions.navigate({
  routeName: 'Edit',

  params: { ...item },

});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'All Books',
  };

  componentWillMount() {
    // bookApi.all();
    // bookApi.post({
    //   title: 'Some Bio',
    //   author: 'Bajju',
    //   available: true,
    //   with: null,
    // });

    this.props.getAllBooks();
  }

  // eslint-disable-next-line class-methods-use-this
  renderItem(item) {
    return (
      <TouchableOpacity
        style={styles.cellContainer}
        disabled={!item.available}
        onPress={() => this.props.navigation.dispatch(navigateAction(item))}
      >
        <Text style={styles.value}>{item.title.toUpperCase()}</Text>
        <Text style={styles.value}>
          {`BY : ${item.author}`}
        </Text>
        <Text style={styles.value}>
          {item.available ? 'AVAILABLE' : `CURRENTLY WITH : ${item.with}`}
        </Text>
      </TouchableOpacity>
    );
  }


  render() {
    const { books } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <FlatList
            data={books}
            renderItem={({ item }) => this.renderItem(item)}
            keyExtractor={(item, index) => `item-${index}`}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cellContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    marginBottom: 5,
  },
  value: {
    marginTop: 5,
  }
});

const mapStateToProps = state => ({
  books: state.get('books')
});

const mapDispatchToProps = dispatch => ({
  getAllBooks: () => dispatch(actions.getAllBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
