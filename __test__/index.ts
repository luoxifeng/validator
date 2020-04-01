import Validator from '../src';

const cfg = [
  {
    id: 'showId',
    required: {
      value: true,
      tip: '必填参数',
      errorTip: '请输入showName'
    },
    type: {
      value: Number,
      tip: '必填参数',
      errorTip: 'showId必须是Number'
    },
    diy: {
      value: (value) => /^\d{6,8}$/.test(value),
      tip: 'showId是6-8位的数字',
      errorTip: 'showId是6-8位的数字'
    },
  },
  {
    id: 'showName',
    type: {
      value: String,
      tip: '必填参数',
      errorTip: '请输入showName'
    }
  },
  {
    id: 'showBtn',
    required: {
      value: true,
      tip: '必填参数',
      errorTip: '请输入showName'
    },
    type: {
      value: Boolean,
      tip: '必填参数',
      errorTip: '请输入showName'
    }
  },
  {
    id: 'other',
    type: {
      value: String,
      tip: 'other',
      errorTip: 'other'
    }
  },
];

console.log(Validator);

var f = new Validator(cfg);


f.validate(['ll']);
