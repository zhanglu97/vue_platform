<template>
	<div class="Login" v-loading="loading" element-loading-text="登录中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)" id="particles-js">
		<div class="Header">
			<h3><span>欢迎您，请登录</span></h3>
		</div>
		<div class="loginBody login_input">
			<div class="login-top">大 平 台</div>
			<el-form :model="LoginForm" ref="LoginForm" label-width="50px" class="demo-ruleForm">
				<el-form-item>
					<el-input clearable v-model="LoginForm.name" placeholder="请输入用户名" class="loginInput">
						<i slot="prefix" class="el-input__icon el-icon-user"></i>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input clearable type="password" v-model="LoginForm.password" autocomplete="off" placeholder="请输入密码" @keyup.enter.native="LoginSubmit" class="loginInput">
						<i slot="prefix" class="el-input__icon el-icon-lock"></i>
					</el-input>
				</el-form-item>
				<div class="login-button" @click="LoginSubmit">登 录</div>
			</el-form>
		</div>
	</div>
</template>

<script>
import { getRoutePages } from "@/router";
import particlesJs from "../../libs/particles.min.js";
import particlesConfig from "../../libs/particles.json";
export default {
	name: "Login",
	data() {
		return {
			loading: false,
			LoginForm: {
				name: "",
				password: ""
			}
		};
	},
	methods: {
		LoginSubmit() {
			if (this.LoginForm.name) {
				if (this.LoginForm.password) {
					this.loading = true;
					//登录成功
					localStorage.setItem("loginStatus", 1); //设置登录状态为已登录
					localStorage.setItem(
						"userInfo",
						JSON.stringify(this.LoginForm)
					); //记录登录信息
					this.$router.addRoutes([getRoutePages()]); //添加路由

					setTimeout(() => {
						this.loading = false;
						this.$router.push({ name: "FirstPage" });
					}, 1000);

					return;
				}
				this.$message.error("密码不能为空!");
				return;
			} else {
				this.$message.error("用户名不能为空!");
			}
		}
	},
	mounted() {
		particlesJS("particles-js", particlesConfig);
	}
};
</script>

<style scoped lang="scss">
.Login {
	background-image: url(../assets/img/app_page2.jpg);
	height: 100%;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
	.Header {
		height: 70px;
		line-height: 70px;
		color: #fff;
		background: rgba(0, 0, 0, 0.3);
		position: absolute;
		top: 0;
		width: 100%;
		h3 {
			width: 100%;
			margin: 0 auto;
			padding: 0 100px;
			font-size: 30px;
			font-weight: normal;
		}
		span {
			font-size: 14px;
			font-weight: 400;
			float: right;
		}
    }
	.loginBody {
		width: 500px;
		height: 300px;
		background-color: rgba(93, 129, 173, 0.3);
        border-radius: 10px;
        border: 5px solid #ffffff20;
		// box-shadow: 0 0 20px #797575;
		padding: 20px 50px 0 0;
		position: relative;
		z-index: 1111;
		.login-top {
			font-size: 22px;
			box-sizing: border-box;
			color: #ffffff;
			margin-bottom: 30px;
			text-align: center;
			padding-left: 50px;
		}
		.login-button {
			cursor: pointer;
			// width: 250px;
			text-align: center;
			padding: 10px 0px;
			background-color: #368ae0;
			margin: 0 auto;
			margin-top: 40px;
			color: #ffffff;
			margin-left: 50px;
            font-size: 14px;
            border-radius: 30px;
			&:active {
				opacity: 0.8;
			}
		}
	}
}
</style>
