<template>
	<div class="addProject">
		<div class="addForm zll-form">
			<el-form :model="addForm" ref="addForm" class="demo-ruleForm">
                <el-form-item class="formList" label="名称：">
                    <el-input clearable class="input_right" placeholder="请输入名称" v-model="addForm.addFormData1"></el-input>
                </el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
export default {
    props: ['setData'],
	data() {
		return {
            addForm: {
                addFormData1: ''
            }
        }
	},
	methods: {
		
	},
	mounted() {
        console.log(this.setData)
        this.addForm.addFormData1 = this.setData.name
	},
};
</script>

<style scoped lang="scss">
@import "@/assets/style/dialog.scss";
</style>
