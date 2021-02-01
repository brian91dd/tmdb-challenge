import axios from 'axios';

const headersTMDB = {
  Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
  'Content-Type': 'application/json;charset=utf-8',
};

export const ApiCall = (params) => axios(params)
  .then((res) => res.data);

export const ApiCallTMDB = ({ url, ...rest }) => axios({
  url: `${process.env.REACT_APP_TMDB_API}${url}`,
  headers: headersTMDB,
  ...rest,
}).then((res) => res.data);
