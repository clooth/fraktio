import axios from 'axios';
import moment from 'moment';

// Create new axios client with a base url
const client = axios.create({
  baseURL: 'https://fraktio.fi/wp-json/wp/v2/',
  timeout: 5000,
});

// Fetch all blog posts
const postFields = ['id', 'date', 'title', 'content', 'excerpt'];
export const fetchPosts = () =>
  client.get('/posts', { data: { per_page: 100, fields: postFields } })
    .then(res => res.data)
    .then(res => res.map(({ id, date, title, content, excerpt }) => ({
      id,
      date,
      title: title.rendered,
      content: content.rendered,
      excerpt: excerpt.rendered,
    })));

// Fetch all presentations
const presentationFields = ['id', 'title', 'content', 'acf'];
export const fetchPresentations = () =>
  client.get('/presentations', { per_page: 100, fields: presentationFields })
    .then(res => res.data)
    .then(res => res.map(({ id, title, content, acf }) => ({
      id,
      title: title.rendered,
      content: content.rendered,
      date: moment(acf.presentations_date, 'YYYYMMDD').unix(),
      presenter: {
        name: acf.presenters_name,
        company: acf.presenters_company,
      },
      video_id: acf.youtube_video_id,
    })));

// Fetch all people
const peopleFields = ['id', 'acf'];
export const fetchPeople = () =>
  client.get('/people', { data: { per_page: 100, fields: peopleFields } })
    .then(res => res.data)
    .then(res => res.map(({ id, acf }) => ({
      id,
      firstName: acf.person_first_name,
      lastName: acf.person_last_name,
      nickname: acf.person_nickname,
      title: acf.person_job_title,
      photoUrl: acf.person_photo.sizes.smallsquare
    })));
