import {KeyboardType} from 'react-native';

export interface IPageInfo {
  title: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  buttonText: string;
  keyboardType?: KeyboardType;
}

export interface IPageInfoMultiselect {
  title: string;
  options: Array<string>;
  buttonText: string;
}
