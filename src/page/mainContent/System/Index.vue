<template>
    <div class="System">
        <div class="tab">系统信息</div>
        <div>
            <el-row :gutter="10">
                <el-col :span="8">
                    <div class="system_list">
                        <p class="txt">CPU/每小时</p>
                        <div class="echart" ref="echart1"></div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="system_list">
                        <p class="txt">MEM/每小时</p>
                        <div class="echart" ref="echart2"></div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="system_list">
                        <p class="txt">负载/每小时</p>
                        <div class="echart" ref="echart3"></div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="tab tab2">统计分析</div>
        <div>
            <el-row :gutter="10">
                <el-col :span="12">
                    <div class="system_list zll-table">
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="date1" label="接口慢调用分析">
                                <template slot-scope="scope">
                                    <p style="color:#3a8ee6"> {{ scope.row.date1 }}</p>
                                </template>
                            </el-table-column>
                            <el-table-column label="统计信息">
                                <template slot-scope="scope">
                                    <p> {{ scope.row.date2 }}</p>
                                    <p> {{ scope.row.date3 }}</p>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date4" label="日期平均响应时间" ></el-table-column>
                        </el-table>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="system_list zll-table">
                        <el-table :data="tableData2" style="width: 100%">
                            <el-table-column prop="date1" label="异常类型">
                                <template slot-scope="scope">
                                    <p style="color:#3a8ee6"> {{ scope.row.date1 }}</p>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date2" label="出现次数"></el-table-column>
                        </el-table>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import echartOption from './echartOption'
export default {
    data() {
        return {
            tableData: [{
                date1: '/api/login.json',
                date2: '最大值：400ms',
                date3: '平均值： 150ms',
                date4: ''
            }, {
                date1: '/api/login.json',
                date2: '最大值：400ms',
                date3: '平均值： 150ms',
                date4: ''
            }, {
                date1: '/api/login.json',
                date2: '最大值：400ms',
                date3: '平均值： 150ms',
                date4: ''
            }],
            tableData2: [{
                date1: '/api/login.json',
                date2: '1123',
            }, {
                date1: '/api/login.json',
                date2: '34',
            }, {
                date1: '/api/login.json',
                date2: '34',
            }],
        };
    },
    methods: {
        getEchartData() {  
            let echart = this.$echarts.init(this.$refs.echart1);
            echart.setOption(echartOption.option1)

            let echart2 = this.$echarts.init(this.$refs.echart2);
            echart2.setOption(echartOption.option2)

            let echart3 = this.$echarts.init(this.$refs.echart3);
            echart3.setOption(echartOption.option3)
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
    .System {
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
        .system_list {
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
