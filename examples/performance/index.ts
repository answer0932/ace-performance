import ACE_Performance from '../../src';

const yideng = new ACE_Performance({
  elementTiming: true,
  logUrl: 'http://123.com/test',
});

console.log('🐻', yideng);
// 模拟一个长任务
const start = Date.now();
while (Date.now() - start < 1000) {}
