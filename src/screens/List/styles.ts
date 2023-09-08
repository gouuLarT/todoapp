import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30
  },
  containerDOIS: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 35,
    paddingRight: 30,
    paddingLeft: 30,
  },
  textYet: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 50,
    color: '#808080'
  },
  textCreate: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: '#808080'
  },
  textCriadas: {
    color: '#4EA8DE',
    width: 57,
    height: 50,
    fontWeight: '700',
  },
  textConcluidas: {
    color: '#8284FA',
    width: 75,
    height: 58,
    fontWeight: '700',
  },
  imageBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
})

export default styles