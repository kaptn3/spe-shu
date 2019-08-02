var form = new Vue({
  el: '.form',
  data() {
    return {
      type: 'password',
      login: '',
      password: '',
      error: ['Логин не зарегистрирован', 'Проверьте данные']
    };
  },
  computed: {
    loginClass() {
      return {
        'form__input_fill': this.login.length > 6,
        'form__input_error': this.error[0]
      };
    },
    passwordClass() {
      return {
        'form__input_fill': this.password.length > 6,
        'form__input_error': this.error[1]
      };
    },
  },
  methods: {
    toggleShow() {
      this.type = this.type === 'text' ? 'password' : 'text';
    }
  },
  watch: {
    login() {
      if (this.login.length > 0) {
        this.error[0] = '';
      } else {
        this.error[0] = 'Логин не зарегистрирован';
      }
    },
    password() {
      if (this.password.length > 0) {
        this.error[1] = '';
      } else {
        this.error[1] = 'Проверьте данные';
      }
    }
  }
});