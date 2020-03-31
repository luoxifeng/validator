import { isUndefined, wrapper, isType } from './utils';

const rulesValidate = {
  required: (value, schema) => {
    if (!schema.value) return true;
    return !isUndefined(value) && value !== '';
  },
  type: wrapper((value, schema) => {
    return isType(value, schema.value);
  }),
  oneOf: wrapper((value, schema) => {
    return !isUndefined(value) && schema.value.includes(value);
  }),
  diy: wrapper((value, schema) => {
    return schema.value(value);
  })
};