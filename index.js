// Calls functions once a promise has been delivered.
// var p = promise();
// Queue functions: p(yourCallback)
// Deliver the promise: promise.deliver([args...]).
// Once the promise has been delivered, p(yourCallback) immediately calls the callback.
 
module.exports = function () {
  var queue = [], args = null;
  var promise = function (fn) {
    if (promise.delivered) {
      process.nextTick(function () {
        fn.apply(null, args);
      });
    } else {
      queue.push(fn);
    }
  }
  promise.deliver = function () {
    args = arguments, promise.delivered = true;
    queue.splice(0, queue.length).forEach(function (fn) {
      process.nextTick(function () {
        fn.apply(null, args);
      });
    });
  }
  return promise;
}
