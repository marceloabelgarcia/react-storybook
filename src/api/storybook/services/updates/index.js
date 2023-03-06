import { api, basePath, tokenAPI } from '../../call';

/**
 * Class that represents the call to the module service *
 * @export
 * @class NotificationsService
 */
export default class Updates {
  /**
   * Call to get new notifications of user
   *
   * @static
   * @return {Promise} Promise with call execution
   * @memberof DocService
   */
  static list() {
    const url = `${basePath}/updates`;
    return api.get(tokenAPI, url);
  }
}
