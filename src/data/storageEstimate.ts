import { logData } from './log';
import { convertToKB } from '../helpers/utils';

/**
 * StorageManager接口的estimate()方法询问StorageManager
 * 应用程序占用多少存储空间（使用）
 * 有多少可用空间
 */
export const reportStorageEstimate = (storageInfo: StorageEstimate) => {
	const estimateUsageDetails =
		'usageDetails' in storageInfo ? (storageInfo as any).usageDetails : {};
	logData('storageEstimate', {
		quota: convertToKB((storageInfo as any).quota),
		usage: convertToKB((storageInfo as any).usage),
		caches: convertToKB(estimateUsageDetails.caches),
		indexedDB: convertToKB(estimateUsageDetails.indexedDB),
		serviceWorker: convertToKB(estimateUsageDetails.serviceWorkerRegistrations),
	});
};
