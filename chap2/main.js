var data = {
  a: 1,
  event: 'click',
  message: 'Hello'
}

var vm = new Vue({
  el: '#app',
  data: data,
  created: function() {
    console.log('created');
  },
  methods: {
    doSomething: function(){
      this.a += 1;
    }
  },
  computed: {
    reversedMessage: function(){
      return this.message.split('').reverse().join('');
    }
  }
})

vm.a = 2
console.log(data.a)

data.a = 3
console.log(vm.a)
