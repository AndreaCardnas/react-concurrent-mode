export default function promiseWrapper(promise) {
  // set initial status
  let status = 'pending';

  // store result
  let result;

  // wait for promise
  let suspender = promise
    .then((response) => {
      status = 'success';
      result = response;
    })
    .catch((error) => {
      status = 'error';
      result = error;
    });

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
}
