function compose(first, ...arg) {
  return (...list) =>
    arg.reduce((pre, item) => {
      return item(pre);
    }, first(...list));
}

const hoc = logger(visible(style(Input)));

const hoc = compose(
  logger,
  visible,
  style
);

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
