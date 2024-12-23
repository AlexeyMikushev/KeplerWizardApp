import axios from 'axios';
import data from '../server/db/data.json';
import {IPageInfo, IPageInfoMultiselect} from './dto';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getAboutYouInfo = async (): Promise<Partial<IPageInfo>> => {
  try {
    const response = await api.get('/about-you');
    return response.data;
  } catch (error) {
    // if there is a problem with CORS return data directly
    return data['about-you'];
  }
};
export const getEmailInfo = async (): Promise<Partial<IPageInfo>> => {
  try {
    const response = await api.get('/email');
    return response.data;
  } catch (error) {
    // if there is a problem with CORS return data directly
    return data.email;
  }
};

export const getSuperpowersInfo = async (): Promise<
  Partial<IPageInfoMultiselect>
> => {
  try {
    const response = await api.get('/superpowers');
    return response.data;
  } catch (error) {
    // if there is a problem with CORS return data directly
    return data.superpowers;
  }
};

export const postName = async (name: string) => {
  try {
    const response = await api.post('/name', {name});
    return response.data;
  } catch (error) {
    console.warn('error', error);
  }
};
export const postEmail = async (email: string) => {
  try {
    const response = await api.post('/email', {email});
    return response.data;
  } catch (error) {
    console.warn('error', error);
  }
};
export const postSuperpowersInfo = async (superpowers: Array<string>) => {
  try {
    const response = await api.post('/superpowers', {superpowers});
    return response.data;
  } catch (error) {
    console.warn('error', error);
  }
};
