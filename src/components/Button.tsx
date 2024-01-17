import React from 'react'
import{
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'


const styles = StyleSheet.create({

    // botões comum
    button:{
        fontSize:40,
        height: Dimensions.get('window').width /4,
        width: Dimensions.get('window').width /4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
  // botões de operações matematicas
    operationButton:{
        color: '#fff',
        backgroundColor:'#fa8231',
    },
     // botões duas vezes maior
    buttonDouble:{
        width: (Dimensions.get('window').width /4) *2,
    },
     // botões tres vezes maior
     buttonTriple:{
        width: (Dimensions.get('window').width /4) *3,
    }
})

// props = propriedades
export default props =>{

    const stylesButton = [styles.button]
    if(props.double) stylesButton.push(styles.buttonDouble)
    if(props.triple) stylesButton.push(styles.buttonTriple)
    if(props.operation) stylesButton.push(styles.operationButton)

    return (
         <TouchableHighlight onPress ={()=>props.onClick(props.label)}>
         <Text style ={stylesButton}> {props.label} </Text>
         </TouchableHighlight>
    )
}