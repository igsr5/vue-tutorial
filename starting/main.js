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
      'aaa',
      'bbb',
      'ccc',
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
