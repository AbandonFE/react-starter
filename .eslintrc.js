module.exports = {
  root: true,  // 使用项目根目录下的配置，不会再文件父目录中递归向上查找eslint配置文件
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",  // 表示ecmascript模块
    ecmaFeatures: {
      jsx: true // 启用 JSX
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,  // 该选项会自动设置 ecmaVersion 解析器选项为 6
    commonjs: true
  },
  extends: "standard", // 使用标准规则校验
  plugins: [
    "react",
    // "html"   // 校验html文件中script标签中的js代码
  ],
  rules: {
    "react/jsx-uses-vars": [2], //解决jsx校验中组件import未使用的问题
      "linebreak-style": 0,
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,

    // 缩进风格，默认为两个空格
    "indent": [0, 2],
    // 行尾必须有分号
    // "semi": [2, "always"],
    // 生产模式禁止debugger
    "no-debugger": 1,
    //allow variables that are accessed but not defined within the same file
    "no-undef": 0,
    // 允许使用new关键字创建的实例对象不做赋值
    "no-new": 0,
    // 定义数组或对象最后多余的逗号
    "comma-dangle": [2, "never"],
    // 无效的类型判断
    "valid-typeof": 2,
    // 不可能执行到的代码
    "no-unreachable": 2,
    // 行尾缺少分号
    "no-unexpected-multiline": 2,
    // 禁止覆盖原生对象
    "no-native-reassign": 2,
    // 禁止扩展原生对象
    "no-extend-native": 2,
    // 浮点数要写完整
    "no-floating-decimal": 2,
    // f、else、while、for代码块用{}包围
    "curly": 2,
    // 禁止使用常量表达式
    "no-constant-condition": 2,
    // 禁止删除变量
    "no-delete-var": 2,
    // 禁止使用eval
    "no-eval": 2,
    // 禁用with
    "no-with": 2,
    // 驼峰命名
    "camelcase": 0,
    // 禁止稀疏数组
    "no-sparse-arrays": 1,
    // 函数最多只能有3个参数
    "max-params": [1, 6],
    // 小括号里面不允许有空格
    "space-in-parens": [2, "never"],
    // 注释后面必须加空格
    "spaced-comment": 2
  }
}