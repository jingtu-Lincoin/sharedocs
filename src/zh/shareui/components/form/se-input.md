---
title: se-input 输入框
---

## 介绍

se-input 组件，可以用来展示单行输入框，多行输入框，密码输入框，数字输入框，带前缀或后缀的输入框，
日期选择，时间选择，地理位置选择，验证码输入框

## 使用示例

### 显示单行输入
    
```vue
<se-input label="标签" v-model="value" placeholder="请输入内容"></se-input>
```

### 显示密码输入框

```vue
<se-input label="标签" v-model="value" type="password" placeholder="请输入密码"></se-input>
```

### 显示多行输入框

```vue
<se-input label="标签" v-model="value" type="textarea" placeholder="请输入内容"></se-input>
```

### 显示数字输入框

```vue
<se-input label="标签" v-model="value" type="number" placeholder="请输入数字"></se-input>
```

## 属性
| 属性名         | 类型     | 默认值 | 说明    |
|:------------|:-------|:---:|:------|
| label       | String | "标签"  | 表单的标签 |
| type        | String    | "text" | 表单类型，text,textarea,validCode,switch,date,time,<br/>datetime,radiogroup,btnselect |
| placeholder | String | "请输入内容" | 占位符 |
| value       | String | "" | 表单的值 |
| disabled    | Boolean | false | 是否禁用 |
| modal       | Boolean | false | 是否只读 |