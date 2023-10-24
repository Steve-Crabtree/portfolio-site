const request = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/users';
request.open('GET', url, false);
request.send();
request.onload = () => {
//   console.log(request);
  if (request.status === 200) {
    console.log(JSON.parse(request.response));
  } else {
    console.log(`error ${request.status} ${request.statusText}`);
  }
};
