// 用 Vue 来初始化组件
Vue.component('todo-item', {
    // props中的内容相当于可以传入的参数
    props: ['todo', 'score'],
    template: '<li>{{ todo.text: score.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7', 
    data: {
        lessons: [
            {text: '计组', score: '100'},
            {text: '汇编', score: '99'},
            {text: 'OS', score: '98'},
            {text: '嵌入式', score: '97'}
        ], 
        scores: [
            {text: '100'},
            {text: '99'},
            {text: '98'},
            {text: '97'}
        ]
    }
})