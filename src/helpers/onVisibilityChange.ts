import { D } from '../data/constants';

export const visibility = {
	isHidden: false,
};

/**
 * 从可见性更改侦听器中，它仅在以下情况下保存
 * 发送计时或记录时使用错误的“隐藏”值。
 */
export const didVisibilityChange = function (cb: Function) {
	if (D.hidden) {
		cb();
		visibility.isHidden = D.hidden;
	}
};
