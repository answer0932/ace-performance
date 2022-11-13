import { INavigatorInfo } from '../typings/types';
/**
 * 如下信息来源于 window.navigator:
 * 1. 设备内存
 * 2. 硬件并发
 * 3. 服务状态:
 *     - controlled: service worker 控制该页面
 *     - supported: 浏览器支持 worker
 *     - unsupported: 用户的浏览器不支持 service worker
 */
export declare const getNavigatorInfo: () => INavigatorInfo;
//# sourceMappingURL=getNavigatorInfo.d.ts.map