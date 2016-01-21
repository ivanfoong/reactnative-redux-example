import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default class SessionView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { session_key, login, logout } = this.props;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Session Key: {session_key}</Text>
        <TouchableOpacity onPress={() => login("session_key_example")} style={styles.button}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout} style={styles.button}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
