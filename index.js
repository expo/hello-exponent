var React = require('react-native');

var {
  AppRegistry,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} = React;

var HelloExponentApp = React.createClass({
  render() {
    return (
      <View style={{
        marginTop: 25,
        paddingHorizontal: 15,
      }}>
        <Text style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: 'navy',
        }}>Hello, Exponent!</Text>
      </View>
    );
  },
});

AppRegistry.registerComponent('HelloExponentApp', () => HelloExponentApp);
AppRegistry.registerComponent('main', () => HelloExponentApp);
