
import React, { Component, useState } from "react";
import { Alert, StyleSheet, Text, TouchableHighlight, View, Modal } from 'react-native';
import { WebView } from 'react-native-webview';




export default class MyWeb extends Component {
  render() {
    return (

      <WebView
        source={{ uri: 'https://circuit-board.de/forum/' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}


