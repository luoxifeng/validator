import ValidatorNS, {
  ValidatorSchema
} from '../typings/index';

export default class Validator implements ValidatorNS.Validator {

  constructor(cfg: any, validateAll = false) {

  }

  validate(filterList = []) {
    return null;
  }

}
