<template>
    <div class="Analyse">
        <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="概览分析" name="first">
                <el-row :gutter="10">
                    <el-col :span="4" v-for="(item, index) in analyseList" :key="index">
                        <div class="nav_item" :class="{ 'error': item.type == 6 }">
                            <p class="name">{{ item.name }}</p>
                            <p class="total">
                                {{ item.total }}
                                <span v-if="item.type == 2">ms</span>
                                <span v-if="item.type == 4 || item.type == 5">次</span>
                                <span v-if="item.type == 6">个</span>
                            </p>
                            <p class="week">
                                周同比
                                <span v-show="item.week == '0%'"><img src="@/assets/img/line.png"></span>
                                <span v-show="item.week > '100%'"><img src="@/assets/img/up.png"></span>
                                <span v-show="item.week < '100%' && item.week !== '0%'" ><img src="@/assets/img/down.png"></span>
                                {{ item.week }}
                            </p>
                            <p class="day">
                                日环比
                                <span v-show="item.day == '0%'"><img src="@/assets/img/line.png"></span>
                                <span v-show="item.day > '100%'"><img src="@/assets/img/up.png"></span>
                                <span v-show="item.day > '0%' && item.day < '100%' " ><img src="@/assets/img/down.png"></span>
                                {{ item.day }}
                            </p>
                        </div>
                    </el-col>
                </el-row>
                <div class="tab">应用提供服务</div>
                <div>
                    <el-row :gutter="10">
                        <el-col :span="12">
                            <div class="Analyse_list">
                                <p class="txt">应用提供服务请求量/每小时</p>
                                <div class="echart" ref="echart1"></div>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="Analyse_list">
                                <p class="txt">应用提供服务平均响应时间/每小时</p>
                                <div class="echart" ref="echart2"></div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-tab-pane>
            <el-tab-pane label="拓扑图" name="second">
                
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import echartOption from './echartOption'
export default {
    data() {
        return {
            activeName: 'first',
            analyseList: [{
                type: 1,
                name: '总请求量',
                total: '42w',
                week: '0%',
                day: '156.22%',
            }, {
                type: 2,
                name: '平均响应时间',
                total: '365',
                week: '0%',
                day: '114.22%',
            }, {
                type: 3,
                name: '实例数',
                total: '2',
                week: '0%',
                day: '0%',
            },{
                type: 4,
                name: 'Full GC',
                total: '21',
                week: '4.5%',
                day: '4.5%',
            },{
                type: 5,
                name: '慢SQL',
                total: '7',
                week: '700%',
                day: '700%',
            },{
                type: 6,
                name: '异常',
                total: '8851',
                week: '895%',
                day: '1545.22%',
            }]
        };
    },
    methods: {
        getEchartData() {  
            let echart = this.$echarts.init(this.$refs.echart1);
            echart.setOption(echartOption.option1)

            let echart2 = this.$echarts.init(this.$refs.echart2);
            echart2.setOption(echartOption.option2)
        },
    },
    mounted() {
        this.getEchartData()
    },
    components: {
    }
};
</script>
<style scoped lang="scss">
    .Analyse {
        .nav_item {
            margin-bottom: 10px;
            background: #ececec;
            padding: 10px;
            height: 140px;
            border-radius: 5px;
            .name {
                font-size: 14px;
                color: #555;
            }
            .total {
                font-size: 26px;
                text-align: center;
                font-weight: 600;
                margin: 12px 0;
                span {
                    font-size: 12px;
                    font-weight: 400;
                }
            }
            .week, .day {
                color: #666;
                text-align: center;
                line-height: 20px;
                img {
                    height: 12px;
                }
            }
            &.error {
                border: 2px solid #cc0909;
            }
        }
        .tab {
            height: 40px;
            line-height: 40px;
            background: #f1f2f9;
            border: 1px solid #cccccc;
            border-left: 4px solid #666;
            padding-left: 10px;
            margin-bottom: 10px;
            &.tab2 {
                margin-top: 20px;
            }
        }
        .Analyse_list {
            border: 1px solid #cccccc;
            .txt {
                height: 40px;
                line-height: 40px;
                padding-left: 10px;
                border-bottom: 1px solid #cccccc;
                background: #f9faff;
            }
            .echart {
                height: 200px;
            }
        }
    }
</style>
