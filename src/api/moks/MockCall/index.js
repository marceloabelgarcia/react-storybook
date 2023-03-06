/* eslint-disable camelcase */

import mockFile__EdsLibraries from '../resource/storybook/eds/libraries';
import mockFile__EdsUpdates from '../resource/storybook/eds/updates';
import mockFile__Updates from '../resource/storybook/updates';
import mockFile__DesginPrinciples from '../resource/storybook/desginPrinciples';
import mockFile__Menu from '../resource/storybook/menu/';

const mockDictionary = {
  'storybook/eds/libraries/global': mockFile__EdsLibraries.global,
  'storybook/eds/libraries/domain': mockFile__EdsLibraries.domain,
  'storybook/eds/updates': mockFile__EdsUpdates,
  'storybook/designPrinciples': mockFile__DesginPrinciples,
  'storybook/updates': mockFile__Updates,
  'storybook/menu/items/foundations': mockFile__Menu.foundations,
  'storybook/menu/items/libraries-gcl': mockFile__Menu['libraries-gcl'],
  'storybook/menu/items/libraries-dcl': mockFile__Menu['libraries-dcl']
};

/**
 * Class that is used to encapsulate calls to mocks
 *
 * @class MockCall
 */
export default class MockCall {
  /**
   * Get mock data from file dictionary
   *
   * @static
   * @param {String} path path ti identify of mock
   * @param {String} queryParams Object with the key pairs value of the parameters of the querystring
   * @param {String} body Object containing the key pairs value of the request body
   * @return {Object} Initial configuration object
   * @memberof ApiCall
   */
  static getMockData(path, queryParams) {
    return new Promise((resolve) => {
      // fix query with params
      const pathQuery = Object.keys(mockDictionary).find((e) => path.includes(e)) || path;

      queryParams = path.split(`${pathQuery}/`).join('');

      if (!mockDictionary[pathQuery]) {
        throw new Error(`Mock file not found. Path "${pathQuery}" is not listed in the dictionary.`);
      }
      let data = mockDictionary[pathQuery];
      if (typeof data === 'function') {
        data = data(queryParams);
      }
      const jsonReturn = {
        status: {
          level: 'OK',
          code: 200
        },
        data
      };
      const range = Math.round(Math.random() * 5) - 1;
      const time = range * range * 10;

      setTimeout(() => {
        resolve(jsonReturn);
      }, time);
    });
  }

  /**
   * Method representing a GET call to the Api
   *
   * @param {String} tokenAPI api access token
   * @param {String} path Url destination of the call
   * @param {Object} queryParams Object with the key pairs value of the parameters of the querystring
   * @return {Promise} Returns the result of the Ajax call promise
   * @memberof ApiCall
   */
  static get(tokenAPI, path, queryParams) {
    return MockCall.getMockData(path, queryParams);
  }

  /**
   * Method representing a POST call to the Api
   *
   * @param {String} tokenAPI api access token
   * @param {String} path Url destination of the call
   * @param {Object} queryParams Object with the key pairs value of the parameters of the querystring
   * @param {Object} body = Object containing the key pairs value of the request body
   * @return {Promise} Returns the result of the Ajax call promise
   * @memberof ApiCall
   */
  static post(tokenAPI, path, queryParams, body) {
    return MockCall.getMockData(path, queryParams, body);
  }

  /**
   * Method representing a PATCH call to the Api
   *
   * @param {String} tokenAPI api access token
   * @param {String} path Url destination of the call
   * @param {Object} queryParams Object with the key pairs value of the parameters of the querystring
   * @param {Object} body = Object containing the key pairs value of the request body
   * @return {Promise} Returns the result of the Ajax call promise
   * @memberof ApiCall
   */
  static patch(tokenAPI, path, queryParams, body) {
    return MockCall.getMockData(path, queryParams, body);
  }
}
