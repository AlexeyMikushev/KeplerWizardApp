import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    width: '100%',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  selectableCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    backgroundColor: '#e1f2f2',
    paddingVertical: 10,
    paddingLeft: 40,
    paddingRight: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
  },
});
