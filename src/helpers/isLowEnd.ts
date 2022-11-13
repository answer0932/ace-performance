import { getDM, getHC } from '../data/constants';
import { EffectiveConnectionType } from '../typings/types';

export const getIsLowEndDevice = (): boolean => {
	// 如果可用于运行线程的逻辑处理器数量 <= 4
	if (getHC() && getHC() <= 4) {
		return true;
	}
	// 如果 RAM 客户端设备的大致数量有 <= 4
	if (getDM() && getDM() <= 4) {
		return true;
	}
	return false;
};

export const getIsLowEndExperience = (
	et: EffectiveConnectionType,
	sd: boolean
): boolean => {
	// 如果连接含义是有效类型
	// one of 'slow-2g', '2g', '3g', or '4g' is !== 4g
	switch (et) {
		case 'slow-2g':
			return true;
			break;
		case '2g':
			return true;
			break;
		case '3g':
			return true;
			break;
		default:
			// 流量节省程序首选项
			return getIsLowEndDevice() || sd;
	}
};
