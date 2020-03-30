export const toString = Function.prototype.call.bind(Object.prototype.toString);

export const upCaseFirstLetter = str => str.replace(/^(\w)/, str.charAt(0).toUpperCase());

export const isUndefined = target => typeof target === 'undefined';

export const isType = (val, type) => {
  let temp = type;
  if (typeof type === 'string') {
    temp = upCaseFirstLetter(type);
  } else {
    temp = type.name;
  }
  return toString(val) === `[object ${temp}]`;
};

export const wrapper = fun => (value, schema) => {
  if (isUndefined(value)) return true;
  return fun(value, schema);
}
