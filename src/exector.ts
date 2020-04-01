import { rulesValidate } from './rules';

export const exector = (value, schema, validateAll = false) => {
  const {
    id,
    required,
    type,
    oneOf,
    diy
  } = schema;
  let res;
  const results = [];
  let result = {
    key: id,
    passed: true,
    results
  };
  const common = (validateType) => {
    const schemaCfg = schema[validateType];
    if (!schemaCfg) return;
    res = rulesValidate[validateType](value, schemaCfg);
    if (!res) {
      results.push({
        key: validateType,
        msg: schemaCfg.errorTip || `${validateType} validate not passed`
      });
      result.passed = false;
      if (!validateAll) return result;
    }
  }

  if (required) {
    res = common('required');
    if (res) return res;
  }

  if (type) {
    res = common('type');
    if (res) return res;
  }

  if (oneOf) {
    res = common('oneOf');
    if (res) return res;
  }

  if (diy) {
    res = common('diy');
    if (res) return res;
  }

  return result;
}