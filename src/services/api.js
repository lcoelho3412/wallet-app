const requestAPI = async () => {
  const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return response.ok ? Promise.resolve(data) : Promise.reject(data);
};

export default requestAPI;
