import * as gm from 'gammacv';

export default {
  op: (input, params) => {
    let pipeline = input;

    pipeline = gm.grayscale(pipeline);

    pipeline = gm.adaptiveThreshold(
      pipeline,
      params.THRESHOLD.uS,
      params.THRESHOLD.uT,
      0,
    );

    return pipeline;
  },
  params: {
    THRESHOLD: {
      name: 'THRESHOLD',
      uS: {
        name: 'Size',
        type: 'uniform',
        min: 0,
        max: 100,
        step: 1,
        default: 5,
      },
      uT: {
        name: 'Value',
        type: 'uniform',
        min: 0,
        max: 100,
        step: 1,
        default: 15,
      },
    },
  },
};
