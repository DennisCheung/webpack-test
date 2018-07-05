
import './css/index.css'

import login from './login.vue'
class Animal {
	static age="动物"
}
console.log(Animal.age)

import Vue from "vue"

new Vue({
	el:"#app",
	data:{
		msg:"信息"
	},
	components:{
		// login
	},
	render:c=>c(login)
})