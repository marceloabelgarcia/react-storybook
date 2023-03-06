import { api, basePath, tokenAPI } from '../../call';

/**
 * Class that represents the call to the module service *
 * @export
 * @class NotificationsService
 */
export default class Menu {
  /**
   * Call to get new notifications of user
   *
   * @static
   * @return {Promise} Promise with call execution
   * @memberof DocService
   */
  static getItems() {
    const url = `${basePath}/foundations/menu/items`;
    return api.get(tokenAPI, url);
  }
}
