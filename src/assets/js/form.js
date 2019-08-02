var form = new Vue({
  el: '.form',
  data() {
    return {
      type: 'password'
    };
  },
  methods: {
    toggleShow() {
      this.type = this.type === 'text' ? 'password' : 'text';
    }
  }
});