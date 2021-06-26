fetch(
  'https://api.wazirx.com/api/v2/market-status'
  //   method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //   mode: 'no-cors', // no-cors, *cors, same-origin
  //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //   headers: { 'Content-Type': 'application/json' }
  // }
)
  .then(res => res.json())
  .then(data => console.log(data));
