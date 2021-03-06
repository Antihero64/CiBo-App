

import React, { Component, useState } from "react";
import { View, Text, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';


export default class App extends Component {

constructor(props) {
    super(props);
    this.WEBVIEW_REF = React.createRef();
}

componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton = ()=>{
   this.WEBVIEW_REF.current.goBack();
   return true;
}

onNavigationStateChange(navState) {
  this.setState({
    canGoBack: navState.canGoBack
  });
}

render(){
   return (
    <WebView
        source={{ uri: "https://www.circuit-board.de/forum" }}
        ref={this.WEBVIEW_REF}
        style={{ marginTop: 20 }}
        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
     />
    )

 }
}