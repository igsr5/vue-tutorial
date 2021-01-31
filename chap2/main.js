var data = {
  a: 1,
  event: 'click',
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
  }
})

vm.a = 2
console.log(data.a)

data.a = 3
console.log(vm.a)
