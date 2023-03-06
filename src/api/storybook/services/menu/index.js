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
   * @param {String} name Name from section
   * @return {Promise} Promise with call execution
   * @memberof DocService
   */
  static getItems(name) {
    const url = `${basePath}/menu/items/${name}`;

    return api.get(tokenAPI, url);
  }
}
