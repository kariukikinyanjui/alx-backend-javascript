function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Sample API response');
    }, 1000);
  });
}

export default getResponseFromAPI;
