## storage 的封装

```
'use strict';

/**
 * Storage class
 * @class
 */

export default class Storage {
  constructor(options) {
    //storage名称
    this.storage_name = options.name;
    if (!this.storage_name) throw new Error('Storage.constructor() options.name is null');
    /*global localStorage*/
    if (typeof localStorage === 'undefined') {
      this.storage = options.storage || new InternalStorage();
    } else {
      this.storage = options.storage || localStorage;
    }
    this.expire_name = 'storage_expire_at';
    this.init();
  }

  /**
   * 初始化
   *
   *
   * @memberOf Storage
   */
  init() {
    if (!this.storage.getItem(this.expire_name)) {
      this.storage.setItem(this.expire_name, JSON.stringify({}));
    }
  }

  /**
   * 存数据
   *
   * @param {String|Number} key key
   * @param {any} object 对象
   * @param {Number} expire 过期时间
   *
   * @memberOf Storage
   */
  set(key, object, expire) {
    if (object === null || object === undefined) return;
    const data_key = this.getStorageKey(key);
    if (expire) {
      this.expire(data_key, expire);
    }
    this.storage.setItem(data_key, JSON.stringify(object));
  }

  /**
   * 取数据
   *
   * @param {String|Number} key key
   *
   * @memberOf Storage
   */
  get(key) {
    if (this.isExpire(key)) return null;
    return JSON.parse(this.storage.getItem(this.getStorageKey(key)));
  }

  clear() {
    const expire_list = JSON.parse(this.storage.getItem(this.expire_name));
    Object.keys(expire_list).forEach(key => this.storage.removeItem(key));
    this.storage.removeItem(this.expire_name);
  }

  /**
   * 设置过期
   *
   * @param {String|Number} key
   * @param {Number} expire
   *
   * @memberOf Storage
   */
  expire(key, expire) {
    let expire_list = JSON.parse(this.storage.getItem(this.expire_name));
    expire_list = Object.assign({}, expire_list);
    expire_list[key] = Date.now() + expire;
    this.storage.setItem(this.expire_name, JSON.stringify(expire_list));
  }

  /**
   * 是否过期
   *
   * @param {any} key
   *
   * @memberOf Storage
   */
  isExpire(key) {
    const expire_list = JSON.parse(this.storage.getItem(this.expire_name));
    const data_key = this.getStorageKey(key);
    return expire_list[data_key] < Date.now();
  }

  getStorageKey(key) {
    return `storage_${this.storage_name}_${key}`;
  }
}

/**
 * 模拟storage
 *
 * @export
 * @class InternalStorage
 */
export class InternalStorage {
  setItem(key, item) {
    this[key] = item;
    return item;
  }

  getItem(key) {
    return this[key] || null;
  }

  removeItem(key) {
    delete this[key];
  }

  clear() {
    Object.keys(this).forEach(key => delete this[key]);
  }
}

```