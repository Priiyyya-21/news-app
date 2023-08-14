import { View, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const TopNavigation = ({index,setIndex}) => {
  return (
    <View style={{...styles.container,backgroundColor:"#FF69B4"}}>
     { index === 0 ?
    <TouchableOpacity>
        <Text></Text>
    </TouchableOpacity> 
    }
    </View>
  );
};


const styles= StyleSheet.create({

})
export default TopNavigation