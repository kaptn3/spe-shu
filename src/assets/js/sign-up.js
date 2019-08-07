const signUp = new Vue({
  el: '#sign-up',
  data() {
    return {
      error: false
    };
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
      this.error = true;
    }
  }
});

var element = document.querySelector("input[type='tel']");
var maskOptions = {
  mask: '+{7} (000) 000-00-00'
};
var mask = IMask(element, maskOptions);