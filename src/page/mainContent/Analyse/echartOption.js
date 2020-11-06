export default {
    option1: {
        legend: {
            data: ['HTTP入口'],
            align: 'left',
            show: true
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                lineStyle: {
                    color: {
                        type: 'linear', x: 0,  y: 0, x2: 0, y2: 1,
                        colorStops: [{
                                offset: 0, color: 'rgba(255,255,255,0)' // 0% 处的颜色
                            }, {
                                offset: 0.5, color: 'rgba(255,255,255,1)' // 100% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(255,255,255,0)' // 100% 处的颜色
                            }
                        ],
                        global: false // 缺省为 false
                    }
                }
            },
            formatter: '{b}：{c}',
        },
        xAxis: {
            type: 'category',
            data: ['8-7 00:00', '8-7 04:00', '8-7 08:00', '8-7 12:00', '8-7 16:00'],
            boundaryGap: false,
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: { type: 'dashed', }
            },
            axisLabel: {
                formatter: '{value}',
            },
        },
        grid: {
            top: '10%',
            bottom: '15%'
        },
        series: [{
            name: 'HTTP入口',
            data: [1, 3, 5, 8, 4, 7, 5],
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    color: 'rgba(0,70,209,0.8)' // 线条颜色
                },
                borderColor: '#f0f'
            },
            itemStyle: {
                normal: {
                    color: 'rgba(0,70,209,1)'
                }
            },
            areaStyle: {//区域填充样式
                normal: {
                    color: 'rgba(0,70,209,0.5)',
                    shadowColor: 'rgba(112, 160, 210, 0.8)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
        }]
    },

    option2: {
        legend: {
            data: ['HTTP入口'],
            align: 'left',
            show: true
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                "type": "none"
            },
            formatter: '{b}：{c}ms',
        },
        xAxis: {
            type: 'category',
            data: ['8-7 00:00', '8-7 04:00', '8-7 08:00', '8-7 12:00', '8-7 16:00'],
            boundaryGap: false,
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: { type: 'dashed', }
            },
            axisLabel: {
                formatter: '{value}ms',
            },
        },
        grid: {
            top: '15%',
            bottom: '15%'
        },
        series: [{
            name: 'HTTP入口',
            data: [9, 10, 8, 9, 9, 9, 9],
            type: 'line',
            smooth: true,
            itemStyle: {
                color: '#f5870a'
            },
        }]
    },
}