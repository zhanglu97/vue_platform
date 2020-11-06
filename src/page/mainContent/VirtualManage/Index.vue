<template>
    <div class="VirtualManage">
		<!-- 头部input搜索 -->
		<div class="Search_Top_Input">
			<div class="input_flex">
				<el-input clearable v-model="searchData1" placeholder="名称"></el-input>
			</div>
			<div class="input_flex">
				<el-select clearable v-model="searchData2" placeholder="状态">
                    <el-option label="正常" value="正常"></el-option>
                    <el-option label="冻结" value="冻结"></el-option>
                </el-select>
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
        >
            <template slot-scope="scope" slot="operate">
                <el-button @click="goDetail(scope.row)" type="text" size="small">查看</el-button>
                <el-button @click="cancal(scope.row, tableData)" type="text" size="small">删除</el-button>
            </template>
        </sys-table>

		<!-- 查看弹框 -->
		<div class="zll-dialog">
			<popout title="查看" :visible.sync="addDialog" v-if="addDialog">
				<Add ref="add" slot="content"></Add>
				<template slot="bottom">
					<p class="zll-botton" @click="addDialog = false">确 定</p>
				</template>
			</popout>
		</div>
    </div>
</template>

<script>
import Add from "./add";
export default {
    data() {
        return {
            addDialog: false,
            searchData1: '',
            searchData2: '',
			tableData: [
				{
					date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    state: '正常'
				},{
					date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    state: '正常'
				},{
					date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    state: '正常'
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
					{ columnValue: "name", columnName: "名称" },
					{ columnValue: "address", columnName: "地址"},
					{ columnValue: "state", columnName: "状态", width: "100" },
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
			this.getTableList();
		},
    },
    mounted() {
		this.getTableList(); //显示table
    },
	components: {
		Add,
	},
};
</script>
<style scoped lang="scss">
@import "@/assets/style/SearchTop.scss";
</style>
