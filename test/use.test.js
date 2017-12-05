/* eslint-disable */
import path from 'path';
import webpack from './helpers/compiler';

describe('Loader', () => {
  test('Use', async () => {
    const config = {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: path.resolve(__dirname, '../src/use') },
            {
              loader: 'css-loader',
              options: {}
            }
          ]
        }
      ]
    }

    const stats = await webpack('fixture.js', config);
    const { source } = stats.toJson().modules[2];

    expect(source).toMatchSnapshot();
  });
});
