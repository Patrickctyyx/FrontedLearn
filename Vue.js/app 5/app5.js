var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello, patrick!'
    },
    methods: {
        reverseMessage: function (){
            this.message = this.message.split('').reverse().join('')
        }
    }
})