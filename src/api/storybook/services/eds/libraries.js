import { api, basePath, tokenAPI } from '../../call';

/**
 * Class that represents the call to the module service *
 * @export
 * @class NotificationsService
 */
export default class Libraries {
  /**
   * Call to get new notifications of user
   *
   * @static
   * @return {Promise} Promise with call execution
   * @memberof DocService
   */
  static globalLibraries() {
    const url = `${basePath}/eds/libraries/global`;
    return api.get(tokenAPI, url);
  }

  /**
   * Call to get new notifications of user
   *
   * @static
   * @return {Promise} Promise with call execution
   * @memberof DocService
   */
  static domainLibraries() {
    const url = `${basePath}/eds/libraries/domain`;
    return api.get(tokenAPI, url);
  }
}
