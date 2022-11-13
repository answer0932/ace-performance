import ReportData from '../data/ReportData';
import { ACE_Config } from '../typings/types';

export const config: ACE_Config = {
	// Metrics
	reportData: new ReportData({ logUrl: 'hole' }),
	isResourceTiming: false,
	isElementTiming: false,
	// Logging
	maxTime: 15000,
};
