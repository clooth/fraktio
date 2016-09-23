import axios from 'axios';
import moment from 'moment';

// Create new axios client with a base url
const client = axios.create({
  baseURL: 'https://api.fraktio.fi/',
  timeout: 5000,
});

// Fetch all blog posts
export const fetchPosts = () =>
  client.get('/posts').then(res => res.data);

// Fetch all presentations
export const fetchPresentations = () =>
  client.get('/presentations').then(res => res.data);

// Fetch all people
export const fetchPeople = () =>
  client.get('/people').then(res => res.data);
