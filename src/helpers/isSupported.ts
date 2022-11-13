import { W, WP } from '../data/constants';

/**
 * 如果浏览器支持 Navigation Timing API，则为 True，
 * 用户计时 API 和 PerformanceObserver 接口。
 * 在 Safari 中，用户计时 API (performance.mark()) 不可用，
 * DevTools 时间线不会被标记注释。
 * Support: developer.mozilla.org/en-US/docs/Web/API/Performance/mark
 * Support: developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver
 * Support: developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByType
 */
export const isPerformanceSupported = (): boolean => {
	return WP && !!WP.getEntriesByType && !!WP.now && !!WP.mark;
};
