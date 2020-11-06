<template>
    <div class="FirstPage">
        <div class="tab">
            <el-tabs v-model="activeName" type="card">
                <el-tab-pane label="图形" name="1">
                    <div class="echart" ref="echart"></div>
                </el-tab-pane>
                <el-tab-pane label="列表" name="2">
                    <!-- table -->
                    <sys-table :isMultipleSelection="false" 
                        :tableData="tableData" 
                        :tableLoading="tableLoading" 
                        :tableHeader="tableHeader" 
                        :scopeWidth="100"
                    >
                        <template slot-scope="scope" slot="operate">
                            <el-button @click="goDetail(scope.row)" type="text" size="small">查看</el-button>
                        </template>
                    </sys-table>
                </el-tab-pane>
            </el-tabs>
        </div>
		<!-- 查看弹框 -->
		<div class="zll-dialog">
			<popout title="查看" :visible.sync="addDialog" v-if="addDialog" class="minSize">
				<Add ref="add" slot="content" :setData="setData"></Add>
				<template slot="bottom">
					<p class="zll-botton" @click="addDialog = false">确 定</p>
				</template>
			</popout>
		</div>
    </div>
</template>

<script>
import echartOption from './echartOption'
import Add from './add'
export default {
    data() {
        return {
            addDialog: false,
            activeName: '1',
            setData: [],
			tableData: [
				{
					date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
				},{
					date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
				},{
					date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
				},
			],
			tableHeader: [],
			tableLoading: true, //table刷新
        };
    },
    methods: {
		getTableList() { //获取表格数据
			this.tableLoading = true;
			setTimeout(() => {
				for (let i = 0; i < this.tableData.length; i++) {
					this.tableData[i]["index"] = i + 1;
				}
				this.tableHeader = [
					{ columnValue: "index", columnName: "序号", width: "50" },
					{ columnValue: "date", columnName: "日期", },
					{ columnValue: "name", columnName: "姓名" },
					{ columnValue: "address", columnName: "地址"},
				];
				this.tableData = JSON.parse(JSON.stringify(this.tableData));
				this.tableLoading = false;
			}, 500);
        },
        goDetail() {
        },
        getEchartData() {  
            let _this = this
            let echart = this.$echarts.init(this.$refs.echart);
            echart.setOption(echartOption.option)
            echart.on('click', function (data) {
                _this.addDialog = true
                _this.setData = data
                
            });
        },
    },
    mounted() {
		this.getTableList(); //显示table
        this.getEchartData()
    },
    components: {
        Add
    }
};
</script>
<style scoped lang="scss">
    .FirstPage {
        .echart {
            width: 100%;
            height: 500px;
        }
    }
</style>
