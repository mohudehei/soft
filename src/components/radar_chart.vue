<template>  
	<div ref="chart" style="width:100%;height:250px;"></div>  
</template>  
	
<script>  
import * as echarts from 'echarts';  
import theme from '../assets/macarons.json'; // echarts theme

export default {  
	name: 'radar_chart',  
	data() {  
		return {  
			myChart: null,
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
				radar: {
					indicator: [
						{ name: '加减法', max: 100 },
						{ name: '比大小', max: 100 },
						{ name: '乘除法', max: 100 },
						{ name: '推理', max: 100 },
						{ name: '效率', max: 100 },
						{ name: '耐性', max: 100 }
					],
					radius:80
				},
				series: [
					{
						name: 'Budget vs spending',
						type: 'radar',
						data: [
							{
								value: [42, 30, 20, 35, 50, 18],
								name: 'Allocated Budget'
							},
							{
								value: [50, 14, 28, 26, 42, 21],
								name: 'Actual Spending'
							}
						],
						tooltip: {
							trigger: 'item'
						}
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