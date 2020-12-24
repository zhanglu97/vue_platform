<template>
    <div class="ConfigManage">
        <div class="top_line">
            <h1>配 置 管 理</h1>
        </div>
		<div class="config_top_btn">
            <div class="list">
				<p class="zll-botton" @click="add()">新增配置</p>
            </div>
            <div class="list">
				<p class="zll-botton">编辑配置</p>
            </div>
            <div class="list">
				<p class="zll-botton">删除配置</p>
            </div>
            <div class="list">
				<p class="zll-botton">返回</p>
            </div>
            <div class="clearBoth"></div>
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
                <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
                <el-button @click="cancal(scope.row, tableData)" type="text" size="small">删除</el-button>
            </template>
        </sys-table>

		<!-- 查看弹框 -->
		<div class="zll-dialog">
			<popout :title="type" :visible.sync="addDialog" v-if="addDialog" class="Config_add">
				<Add ref="add" slot="content" :titleTxt="type" @addForm="getFormData" ></Add>
				<template slot="bottom">
					<p class="zll-botton" v-if="type !== '查看'" @click="()=>{this.$refs.add.setFormData('addForm')}">提 交</p>
					<p class="zll-botton" v-if="type == '查看'" @click="addDialog = false">确 定</p>
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
            type: '',
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
					{ columnValue: "date", columnName: "配置项", },
					{ columnValue: "name", columnName: "配置值" },
					{ columnValue: "address", columnName: "备注"},
					{ columnValue: "state", columnName: "更新时间" },
				];
				this.tableData = JSON.parse(JSON.stringify(this.tableData));
				this.tableLoading = false;
			}, 500);
        },
        add() { //新增
            this.addDialog = true
            this.type = '新增'
        },
        edit() { //编辑
            this.addDialog = true
            this.type = '编辑'
        },
        goDetail() { //查看
            this.addDialog = true
            this.type = '查看'
        },
        getFormData(data) {

        },
        cancal(index, rows) { //删除
            rows.splice(index, 1);
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
.ConfigManage {
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
.config_top_btn {
    margin-bottom: 20px;
    .list {
        width: 25%;
        float: left;
        .zll-botton {
            width: 120px;
            border-radius: 8px;
            // margin: 0;
        }
    }
}
</style>
