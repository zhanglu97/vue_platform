<template>
    <div class="ConfigManage">
        <div class="top_line">
            <h1>应 用 管 理</h1>
        </div>
		<div class="config_top_btn">
            <div class="list">
				<p class="zll-botton" @click="add()">新增应用</p>
            </div>
            <div class="list">
				<p class="zll-botton">编辑应用</p>
            </div>
            <div class="list">
				<p class="zll-botton">删除应用</p>
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
			<popout :title="type" :visible.sync="addDialog" v-if="addDialog" class="use_add">
				<Add ref="add" slot="content" :titleTxt="type" @addForm="getFormData" ></Add>
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
                    name: '*****',
				},{
					date: '2016-05-02',
                    name: '*****',
				},{
					date: '2016-05-02',
                    name: '*****',
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
					{ columnValue: "date", columnName: "手机号", },
					{ columnValue: "name", columnName: "密码" },
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
