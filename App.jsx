import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentenceText: '',
      img: require('./src/biscoito.png')
    };

    this.brokeCookie = this.brokeCookie.bind(this)

    this.sentences = [
      'O sucesso virá para aqueles que trabalham diligentemente e mantêm a esperança viva.',
      'A paciência é uma virtude que traz recompensas duradouras.',
      'Sua criatividade florescerá quando você abraçar a simplicidade.',
      'Não tema os desafios, pois neles reside a oportunidade de crescimento.',
      'A melhor maneira de prever o futuro é criá-lo.',
      'A felicidade está dentro de você; procure-a e você a encontrará.',
      'Seja a mudança que você deseja ver no mundo.',
      'A jornada é tão importante quanto o destino; aproveite cada passo.',
      'Sua bondade se refletirá em todos os aspectos da sua vida.',
      'Acredite no poder dos seus sonhos; eles têm o potencial de se tornarem realidade.',
    ];
  }

  brokeCookie(){
    let randomNumber = Math.floor(Math.random() * this.sentences.length)

    this.setState({
      sentenceText: `"${this.sentences[randomNumber]}"`,
      img: require('./src/biscoitoAberto.png')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />
        <Text style={styles.textSentence}>{this.state.sentenceText}</Text>

        <TouchableOpacity style={styles.btn} onPress={this.brokeCookie}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Broke a Cookie</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textSentence: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  btn: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 24,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
