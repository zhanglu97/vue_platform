var nodesM = [
    {
        name: '服务器2',
        img: require("@/assets/img/pic1.png")
    }, {
        name: '服务器1',
        img: require("@/assets/img/pic1.png")
    }
];
//左侧图表数据
var nodes = [
    {
        name: '存储设备1',
        img: require("@/assets/img/pic2.png"),
    }, {
        name: '网络设备1',
        img: require("@/assets/img/pic2.png"),
    }, {
        name: '网络设备2',
        img: require("@/assets/img/pic2.png"),
    }, {
        name: '网络设备3',
        img: require("@/assets/img/pic2.png"),
    }
];
var links = [{
        source: "存储设备1",
        target: "服务器1",
        name: "数据传输中",
    }, {
        source: "存储设备1",
        target: "服务器2",
        name: "数据传输中",
    }, {
        source: "网络设备1",
        target: "服务器1",
        name: "数据传输中",
    }, {
        source: "网络设备2",
        target: "服务器1",
        name: "暂停传输",
    },
];

var charts = {
    nodes: [],
    links: [],
    linesData: []
};
var x = 1;
var y = 1;
var dataMap = new Map();
for (var j = 0; j < nodes.length; j++) {
    var node = {
        name: nodes[j].name,
        value: [x, y],
        symbolSize: 40,
        symbol: 'image://' + nodes[j].img,
        itemStyle: {
            normal: {
                color: '#333',
            }
        }
    };
    dataMap.set(nodes[j].name, [x, y]);
    charts.nodes.push(node);
    y += 2;
}
//右侧数据显示
for (var k = 0; k < nodesM.length; k++) {
    var nodea = {
        name: nodesM[k].name,
        value: [x + 4, y / 2],
        symbolSize: 60,
        symbol: 'image://' + nodesM[k].img
    };
    dataMap.set(nodesM[k].name, [x + 4, y / 2]);
    charts.nodes.push(nodea)
    y += 6;
}
//画线
for (var i = 0; i < links.length; i++) {
    var link = {
        source: links[i].source,
        target: links[i].target,
        label: {
            normal: {
                show: true,
                formatter: links[i].name
            }
        },
        lineStyle: {
            normal: {
                color: '#12b5d0'
            }
        }
    }
    charts.links.push(link)

    if(links[i].name === '暂停传输'){
        link.lineStyle.normal.color = '#bbb'
    } else { // 组装动态移动的效果数据
        var lines = {
            coords: [
                dataMap.get(links[i].source),
                dataMap.get(links[i].target)
            ]
        }
        charts.linesData.push(lines)
    }
}
export default {
    option: {
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: {
            show: false,
            type: 'value'
        },
        grid: {
            left: '0',
            right: '10%'
        },
        series: [{
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
            symbolSize: 50,
            label: {
                normal: {
                    show: true,
                    position: 'bottom',
                    color: '#333'
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: 'none',
                    curveness: '0.06'
                }
            },
            edgeSymbolSize: 8,
            data: charts.nodes,
            links: charts.links,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: function (item) {
                            return item.data.name
                        }
                    }
                }
            }
        }, {
            name: 'A',
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            effect: {
                show: true,
                trailLength: 0,
                symbol: 'arrow',
                color: '#3a8ee6',
                symbolSize: 8
            },
            lineStyle: {
                curveness: '0.06'
            },
            data: charts.linesData
        }]
    }
}