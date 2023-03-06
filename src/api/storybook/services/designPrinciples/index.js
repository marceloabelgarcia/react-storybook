import { api, basePath, tokenAPI } from '../../call';

/**
 * Class that represents the call to the module service *
 * @export
 * @class NotificationsService
 */
export default class DesignPrinciples {
  /**
   * Call to get new notifications of user
   *
   * @static
   * @return {Promise} Promise with call execution
   * @memberof DocService
   */
  static articles() {
    const url = `${basePath}/designPrinciples/articles`;
    return api.get(tokenAPI, url);
  }
}
