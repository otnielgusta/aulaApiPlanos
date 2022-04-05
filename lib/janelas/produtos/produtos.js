import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, View, TouchableOpacity, Image } from 'react-native';
import { getPlanos } from './planos_controller';
import PlanoComponnent from './plano_componnent';

export default function Produtos({ navigation }) {

  const [planos, setPlanos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(()=>{

    getPlanos(setPlanos, setIsLoading);


  },[isLoading])
  
  if (isLoading) {

    return <ActivityIndicator size="large" color="#000" style={{marginTop: 200}} />
  } else {


    return (
      <View style={styles.container}>

        {


          planos.map((data) => {
            console.log("Carrega data");
            console.log(data);
            return <PlanoComponnent plano={data} />
          })
        }

        {/* <TouchableOpacity style={styles.botao} onPress={()=> {navigation.navigate('Janela2', {texto: "Texto teste da janela 2"})}} >Janela 2</TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.botao} onPress={()=> {navigation.replace('Janela3', {texto: "Texto teste da janela 3"})}} >Janela 3</TouchableOpacity> */}

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#87ceeb',
    alignItems: 'center',

  },
  title: {
    fontSize: 32,
    marginTop: 30
  },

  botao: {
    marginBottom: 30,
    backgroundColor: 'blue',
    width: '30%',
    height: 40,
    color: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif'
  },
  viewForm: {
    marginTop: "20px",
    flexDirection: "column",
  },
  viewInput: {
    flexDirection: "column",

    marginBottom: "10px",
  },
  textInput: {
    width: "200px",
    height: "30px",
    backgroundColor: "#fff",
    borderRadius: "5px"
  },
  btnDescricao: {
    borderRadius: "5px",
    marginTop: 5,
    backgroundColor: '#626262',
    height: 40,
    color: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif'
  },
  descView: {
    marginTop: "10px",
    backgroundColor: "#fff",
    textAlign: 'center',
    borderRadius: "5px"
  },

  btnPlano: {
    borderRadius: "5px",
    marginBottom: 30,
    marginTop: 5,
    backgroundColor: 'green',
    height: 40,
    color: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif'
  },
  textButton: {
    color: "#fff",

  }
});
