// Import Libraries
import React from 'react'
import { Text,View } from 'react-native'

// Make component
const Header = (props) => {
    const { textStyle,viewStyle } = styles;
    return (
        <View style = { viewStyle }>
            <Text style = { textStyle }>{ props.headerTitle }</Text>
        </View>
    );
}

// Style
const styles = {

    viewStyle: {
      backgroundColor: '#FFD500',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
  
    textStyle: {
      fontSize: 20
    }
  
  };

// Export componenet
export default Header