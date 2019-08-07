const signUp = new Vue({
  el: '#sign-up',
  data() {
    return {
      error: false,
      sec: 45,
      interval: null,
      phoneLength: 0
    };
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
      this.error = true;
    },
    getCode() {
      this.sec = 45;
      this.interval = setInterval(() => {
        if (this.sec > 0) {
          this.sec -= 1;
        } else {
          clearInterval(this.interval);
        }
      }, 1000);
    },
    inputPhone() {
      this.phoneLength = phone.value.length;
    }
  }
});

var phone = document.querySelector("input[type='tel']");
var maskOptions = {
  mask: '+{7} (000) 000-00-00'
};
var mask = IMask(phone, maskOptions);