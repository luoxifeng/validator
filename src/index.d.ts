

export = Validator;

interface SchemaCellConfig {
  value: string | Number | ((value: any) => boolean),
  tip: string;
  errorTip: string;
}

interface SchemaItemConfig {
  id: string;
  required?: SchemaCellConfig;
  type?: SchemaCellConfig;
  diy?: SchemaCellConfig;
}

type ValidatorSchema<T> = {
  [key in keyof T]: SchemaItemConfig;
}

interface ValidatorResult {

}


interface Validator {

  new <T>(cfg: ValidatorSchema<T>, validateAll: boolean);

  validate(): ValidatorResult;

}

declare namespace Validator {
  export type Result = ValidatorResult;
}

