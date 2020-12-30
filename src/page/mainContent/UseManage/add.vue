<template>
	<div class="addProject Config">
		<div class="addForm zll-form">
            <h1>ServerLess无服务平台</h1>
            <p class="tab_s">欢迎使用！《请正确填写一下信息，带<span> * </span>为必填项》</p>
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-form-item class="formList" prop="addFormData1" label="手机号：">
                    <el-input clearable class="input_right" placeholder="请输入手机号" v-model="addForm.addFormData1" :disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item class="formList" prop="addFormData2" label="验证码：">
                    <el-input clearable class="input_right" placeholder="请输入验证码" v-model="addForm.addFormData2" :disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item class="formList" prop="addFormData3" label="密码：">
                    <el-input clearable class="input_right" placeholder="请输入密码" v-model="addForm.addFormData3" :disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item class="formList" prop="addFormData4" label="确认密码：">
                    <el-input clearable class="input_right" placeholder="请输入确认密码" v-model="addForm.addFormData4" :disabled="disabled"></el-input>
                </el-form-item>
            </el-form>
            <div class="use_btn">
				<p class="zll-botton" @click="setFormData('addForm')">确 定</p>
            </div>
		</div>
        <div class="img">
            <img src="@/assets/img/right_img.png">
        </div>
        <div class="clearBoth"></div>
	</div>
</template>
<script>
export default {
	props: ["titleTxt"],
	data() {
		return {
			disabled: false,
			addForm: {
				addFormData1: "",
				addFormData2: "", 
				addFormData3: "", 
				addFormData4: "", 
			},
			rules: {
				addFormData1: [
					{ required: true, message: "请输入手机号", trigger: "blur", },
				],
				addFormData2: [
					{ required: true, message: "请输入验证码", trigger: "blur", },
				],
				addFormData3: [
					{ required: true, message: "请输入密码", trigger: "blur", },
				],
				addFormData4: [
					{ required: true, message: "请输入确认密码", trigger: "blur", },
				],
			},
		};
	},
	methods: {
		disabledFun() {
			if (this.titleTxt == "查看") {
				this.disabled = true;
			} else {
				this.disabled = false;
			}
        },
		setFormData(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$emit("addForm", formdata);
				} else {
					return false;
				}
			});
		},
	},
	mounted() {
        this.disabledFun();
	},
};
</script>

<style scoped lang="scss">
@import "@/assets/style/dialog.scss";
.addProject {
    height: 420px;
    .formList {
        margin-bottom: 25px;
    }
    .addForm {
        width: calc( 100% - 200px );
        float: left;
        padding: 0 20px 30px;
        margin: 0;
        h1 {
            font-weight: normal;
            font-size: 20px;
            height: 50px;
            line-height: 50px;
        }
        .use_btn {
            margin-top: 30px;
            .zll-botton {
                width: 100px;
            }
        }
        .tab_s {
            height: 50px;
            line-height: 50px;
            background: #ecf8ff;
            color: #5e6d82;
            padding-left: 20px;
            border-left: 5px solid #50bfff;
            span {
                color: #F56C6C;
            }
        }
    }
    .img {
        width: 200px;
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
        border-left: 1px solid #ccc;
        height: 100%;
        img {
            width: 100%;
        }
    }
}
</style>
