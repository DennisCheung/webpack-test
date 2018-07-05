# webpack-test
webpack搭建vue环境练习

最简单的ES6学习环境，请使用 *最新* Chrome 浏览器，最差也要使用 360安全浏览器9.1以上版本（它的webkit内核是55）

### webpack部分
**1、在webpack中，运行两套命令安装两套包，安装babel相关loader**
```shell
1.1、cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
1.2、cnpm i babel-preset-env babel-preset-stage-0 -D
```
**2、webpack 配置文件中,module节点下的rules数组添加匹配规则:**
```shell
{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
```
**3、.babelrc配置json语法规范,无注释，字符串双引号，preset语法**
```javascript
{
	"presets":["env","stage-0"],
	"plugins":["transform-runtime"]
}
```
**4、图片文件打包编译配置url-loader file-loader**
```javascript
{
    test: /\.(png|jpe?g|gif|svg|bmp)(\?.*)?$/,
    loader: 'url-loader?limit=10000&name=[hash:8]-[name].[ext]'
}
{
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader'
}
```
### vue部分
**1、 区分webpack中导入vue和普通网页使用script导入vue**<br>   
1.1. 两者并不是同一个vue.js <br>
1.2. 后者是齐全的vue <br>
1.3. 前者webpack查找node_modules目录下vue的package.json里的main属性找到入口文件是阉割版vue.runtime.common.js <br>
1.4. 修改方式根目录配置文件webpack配置文件里与module、plugins同级，添加 <br>
``` javascript
resolve:{
	alias:{
      //设置vue导入时候的包的路径
		"vue$":"vue/dist/vue.js"
	}
}
```
1.5. 前者不能创建注册组件，必须分成单独组件.vue的形式
1.6. webpack默认不能打包.vue文件、需要安装
``` shell
cnpm i vue-loader vue-template-cpmpiler -D
```
1.7. webpack配置文件处
``` javascript
const VueLoaderPlugin = require('vue-loader/lib/plugin')
plugins:[
	new VueLoaderPlugin()
	]
```

