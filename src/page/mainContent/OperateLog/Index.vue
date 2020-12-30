<template>
    <div class="OperateLog">
        <div class="top_line">
            <h1>操 作 日 志</h1>
        </div>
		<!-- 头部input搜索 -->
		<div class="Search_Top_Input">
			<div class="input_flex">
				<el-input clearable v-model="searchData1" placeholder="应用名"></el-input>
			</div>
			<div class="input_flex">
				<el-input clearable v-model="searchData2" placeholder="参数名"></el-input>
			</div>
			<div class="input_flex">
				<el-input clearable v-model="searchData3" placeholder="操作人"></el-input>
			</div>
			<div class="input_flex">
				<el-select clearable v-model="searchData4" placeholder="操作类型">
                    <el-option label="新增应用" value="新增应用"></el-option>
                    <el-option label="修改应用" value="修改应用"></el-option>
                    <el-option label="删除应用" value="删除应用"></el-option>
                </el-select>
			</div>
			<div class="input_flex">
				<el-select clearable v-model="searchData5" placeholder="操作状态">
                    <el-option label="新增应用" value="新增应用"></el-option>
                    <el-option label="修改应用" value="修改应用"></el-option>
                    <el-option label="删除应用" value="删除应用"></el-option>
                </el-select>
			</div>
			<div class="input_flex">
				<el-date-picker v-model="searchData6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
			</div>
			<div class="input_flex">
				<span class="zll-search">搜索</span>
				<span class="zll-search-reset" @click="searchReset()">重置</span>
			</div>
		</div>
        <!-- table -->
        <sys-table :isMultipleSelection="false" 
            :tableData="tableData" 
            :tableLoading="tableLoading" 
            :tableHeader="tableHeader" 
            :scopeWidth="150"
            :isOperate="false"
        >
        </sys-table>

    </div>
</template>

<script>
export default {
    data() {
        return {
            addDialog: false,
            searchData1: '',
            searchData2: '',
            searchData3: '',
            searchData4: '',
            searchData5: '',
            searchData6: '',
			tableData: [
				{
					data1: '2016-05-02',
                    data2: '王小虎',
                    data3: '上海市普陀区金沙江路 1518 弄',
                    data4: '',
                    data5: '',
                    data6: '',
                    data7: '',
                    data8: '',
                    data9: '',
                    data10: '',
                    data11: '',
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
					{ columnValue: "data1", columnName: "节点应用名", },
					{ columnValue: "data2", columnName: "参数名称" },
					{ columnValue: "data3", columnName: "参数历史值"},
					{ columnValue: "data4", columnName: "参数新值" },
					{ columnValue: "data5", columnName: "描述信息" },
					{ columnValue: "data6", columnName: "操作类型" },
					{ columnValue: "data7", columnName: "操作状态" },
					{ columnValue: "data8", columnName: "操作类型" },
					{ columnValue: "data9", columnName: "操作人" },
					{ columnValue: "data10", columnName: "操作时间" },
					{ columnValue: "data11", columnName: "备注" },
				];
				this.tableData = JSON.parse(JSON.stringify(this.tableData));
				this.tableLoading = false;
			}, 500);
        },
        goDetail() { //查看
            this.addDialog = true
        },
        cancal(index, rows) { //删除
            rows.splice(index, 1);
			this.getTableList();
        },
		searchReset() { //重置搜索
			this.searchData1 = "";
			this.searchData2 = "";
			this.searchData3 = "";
			this.searchData4 = "";
			this.searchData5 = "";
			this.searchData6 = "";
			this.getTableList();
		},
    },
    mounted() {
		this.getTableList(); //显示table
    },
	components: {
	},
};
</script>
<style scoped lang="scss">
@import "@/assets/style/SearchTop.scss";
.OperateLog {
    width: 1200px;
    margin: 0 auto;
    .top_line {
        height: 60px;
        line-height: 60px;
        border-bottom: 5px solid #efefef;
        margin-bottom: 20px;
        h1 {
            text-align: center;
            color: #3a8ee6;
            font-weight: normal;
        }
    }
}
</style>
