<template>  
	<div ref="chart" style="width:100%;height:400px;"></div>  
</template>  
	
<script>  
import * as echarts from 'echarts';  
import theme from '../assets/macarons.json'; // echarts theme

export default {  
	name: 'bar_line_chart',  
	data() {  
		return {  
			myChart: null,  
			x: [],
			data1: [],  
			data2: [],
			data3: [],
		};  
	},  
	mounted() {  
		this.initializeChart();  
		this.registerTheme();
	}, 
	methods: {  
		registerTheme() {
			echarts.registerTheme('macarons', theme);
		},
		initializeChart() {
			this.myChart = echarts.init(this.$refs.chart, 'macarons');
			this.myChart.setOption(this.getOption());
		},
		getOption() {
			return {  
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						crossStyle: {
							color: '#999'
						}
					}
				},
				toolbox: {
					feature: {
						dataView: { show: true, readOnly: false },
						magicType: { show: true, type: ['line', 'bar'] },
						restore: { show: true },
						saveAsImage: { show: true }
					}
				},
				legend: {
					data: ['正确题目', '错误题目', '做过总题目']
				},
				xAxis: [
					{
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
						axisPointer: {
							type: 'shadow'
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						name: '题目数',
						min: 0,
						max: 100,
						interval: 10,
						axisLabel: {
							formatter: '{value} 道'
						}
					},
					{
						type: 'value',
						name: '总题目数',
						min: 0,
						max: 200,
						interval: 20,
						axisLabel: {
							formatter: '{value} 道'
						}
					}
				],
				series: [
					{
						name: '正确题目',
						type: 'bar',
						tooltip: {
							valueFormatter: function (value) {
								return value + ' 道';
							}
						},
						data: [
							2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
						]
					},
					{
						name: '错误题目',
						type: 'bar',
						tooltip: {
							valueFormatter: function (value) {
								return value + ' 道';
							}
						},
						data: [
							2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
						]
					},
					{
						name: '做过总题目',
						type: 'line',
						yAxisIndex: 1,
						tooltip: {
							valueFormatter: function (value) {
								return value + ' 道';
							}
						},
						data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
					}
				]
			};  
		}
	},  
	beforeDestroy() {  
		if (this.myChart) {  
			this.myChart.clear();  
		}  
	},  
};  
</script>  