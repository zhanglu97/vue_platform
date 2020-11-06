export default {
    option1: {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                "type": "none"
            },
            formatter: '{b}：{c}%',
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
                formatter: '{value}%',
            },
        },
        grid: {
            top: '10%',
            bottom: '15%'
        },
        series: [{
            data: [1, 3, 5, 8, 4, 7, 5],
            type: 'line',
            smooth: true,
            itemStyle: {
                color:  '#f5870a'
            },
        }]
    },
    
    option2: {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                "type": "none"
            },
            formatter: '{b}：{c}G',
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
                formatter: '{value}G',
            },
        },
        grid: {
            top: '15%',
            bottom: '15%'
        },
        series: [{
            data: [9, 10, 8, 9, 9, 9, 9],
            type: 'line',
            smooth: true,
            itemStyle: {
                color:  '#f5870a'
            },
        }]
    },
    
    option3: {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                "type": "none"
            },
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
            top: '15%',
            bottom: '15%'
        },
        series: [{
            data: [0.21, 0.3, 0.25, 0.33, 0.29, 0.3, 0.29],
            type: 'line',
            smooth: true,
            itemStyle: {
                color:  '#f5870a'
            },
        }]
    }
}