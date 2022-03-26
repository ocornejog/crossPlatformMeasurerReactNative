import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Platform } from 'react-native';
import C from '../constants/mainColors';
import RNSpeedometer from 'react-native-speedometer';
import Speedometer, {Background, Arc, Needle, Progress, Marks, Indicator} from 'react-native-cool-speedometer';
import FontStyles from '../constants/mainTextFormats';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;
//const SPEEDOMETER_HEIGHT = (Platform.OS === 'web')? (WINDOW_WIDTH>(1.5*WINDOW_HEIGHT))? WINDOW_WIDTH*0.25: (WINDOW_HEIGHT>WINDOW_WIDTH)? WINDOW_WIDTH*0.5: WINDOW_WIDTH*0.33: WINDOW_WIDTH*0.7;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.04);

//-------------------------------------------------------------------------
const Measurer = props => {
//---------------------------------------------------
// Hooks for the attributes
const [SPEEDOMETER_HEIGHT, setHeight] = useState(props.height);
//-----------------------------------------------------------
// Functions
  useEffect(() => {
    setHeight(props.height);
  }, [props.height])
//---------------------------------------------------
// Rendering the component ...
  return (
    <View style={{height: (SPEEDOMETER_HEIGHT/2)+50, width: '100%'}}>
      {(props.value !== null)?
      <View style={{height: (SPEEDOMETER_HEIGHT/2)+50, width: '100%'}}>
        <Speedometer 
        value={props.value} height={SPEEDOMETER_HEIGHT} width={SPEEDOMETER_HEIGHT} fontFamily='CerealBook' angle={160} max={props.maxValue} lineCap="round" accentColor={C.blueLogo}
        >
          <Background angle={180} color={C.greyLogo} opacity={(Platform.OS === 'web')? 0.3: 0.7}/>
          <Arc arcWidth={(Platform.OS === 'web')? 38: 20}/>
          <Progress arcWidth={(Platform.OS === 'web')? 38: 20}/>
          <Marks step={props.step} lineCap={'round'} numbersRadius={(Platform.OS === 'web')? 16: 20} lineSize={(Platform.OS === 'web')? 15: 10} fontSize={(Platform.OS === 'web')? 20: 18}/>
          <Needle baseOffset={(Platform.OS === 'web')? -14: -10} circleRadius={(Platform.OS === 'web')? 15: 10} color={C.redPrimary} circleColor={C.blueLogo} baseWidth={(Platform.OS === 'web')? 12: 6}/>
        </Speedometer>
        <Text style={[FontStyles.heading0, {position: 'absolute', top: (SPEEDOMETER_HEIGHT/2)+10, left: (Platform.OS === 'web')? (2*SPEEDOMETER_HEIGHT)/7:SPEEDOMETER_HEIGHT/4, color: C.greyLogo}]}>{`${props.value.toFixed(2)} Mbps`}</Text>
      </View>
      :
      <View style={{alignSelf: 'center', alignItems: 'center', alignContent: 'center', justifyContent: 'center', height: (SPEEDOMETER_HEIGHT/2)+50, width: '75%'}}>
        <View style={{borderRadius: 10, backgroundColor: C.blueLogo, width: '100%', alignItems: 'center', alignContent: 'center', justifyContent: 'center', padding: 12}}>
          <Text style={[FontStyles.bodyBold, {color: C.whitePrimary, textAlign: 'center', textAlignVertical: 'center'}]}>No existen datos a analizarse en el intervalo de tiempo seleccionado</Text>
        </View>
      </View>
      }
    </View>
  );
}
export default Measurer;
//-------------------------------------------------------------------------
Measurer.defaultProps = {
  value: 20.895,
  maxValue: 40,
  step: 2
};
//-------------------------------------------------------------------------
const styles = StyleSheet.create({
  primaryBoton: {
    height: 54,
    //width: '100%',
    margin: 0, //space extern to others objects
    padding: 0, //space intern to ins container
    borderWidth: 1,
    backgroundColor: C.blueLogo,
    borderColor: '#ffffff',
    color: 'black',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    //marginBottom:8,
    borderRadius:16
  },
  primaryBotonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat_700'
  },

  secondaryBoton: {
    marginTop: 4,
    height: 64,
    width: '100%',
    marginBottom:8,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: C.bluePrimary,
    borderWidth:2,
    borderRadius:44
  },
  secondaryBotonText: {
    color: C.bluePrimary,
    fontSize: 24,
    fontWeight: 'bold',
  },

  tertiaryBoton: {
    marginTop: 4,
    height: 48,
    marginBottom:8,
    textAlign: 'center',
    alignSelf: 'center',
  },
  tertiaryBotonText: {
    color: C.bluePrimary,
    fontSize: 20,
    fontWeight: 'bold',
  },

  quaternaryBoton: {
    marginTop: 4,
    textAlign: 'right',
    alignSelf: 'flex-end',
    paddingRight:16
  },
  quaternaryBotonText: {
    color: C.bluePrimary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  quinaryBoton: {
    marginTop: 0,
    //height: 56,
    width: '100%',
    marginBottom:0,
    textAlign: 'center',
    alignSelf: 'center',
  },
  quinaryBotonText: {
    color: C.bluePrimary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  
});