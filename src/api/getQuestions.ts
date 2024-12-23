import axios from 'axios';
import data from '../server/db/data.json';
import {IPageInfo} from '../components/pages/AboutYou/types';

// Create an instance of axios with default settings
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
