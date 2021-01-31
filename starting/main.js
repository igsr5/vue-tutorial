Vue.component('todo-item', {
  props: {
    id: Number,
    text: String
  },
  template: '<li>{{ id }}. This is a todo {{ text }}</li>',
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    red: 'red',
    seen: true,
    array: [0, 1, 2, 3, 4],
    time: 'morning',
    items: [
      {id: 1, text: 'aaa'},
      {id: 2, text: 'bbb'},
      {id: 3, text: 'ccc'},
    ],
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
