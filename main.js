Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    red: 'red',
    seen: true,
    array: [0, 1, 2, 3, 4],
    time: 'morning',
  },
  methods: {
    changeTime: function(){
      if(this.time == 'morning'){
        this.time = 'night';
      }else if(this.time == 'night'){
        this.time = 'morning';
      }
    }
  }
})
