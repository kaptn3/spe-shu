var form = new Vue({
  el: '.form',

  data() {
    return {
      type: 'password',
      login: '',
      password: '',
      errorLogin: '',
      errorPassword: ''
    };
  },

  computed: {
    loginClass() {
      return {
        'form__input_fill': this.login.length > 6,
        'form__input_error': this.errorLogin
      };
    },

    passwordClass() {
      return {
        'form__input_fill': this.password.length > 6,
        'form__input_error': this.errorPassword
      };
    }

  },
  methods: {
    toggleShow() {
      this.type = this.type === 'text' ? 'password' : 'text';
    },

    checkForm(e) {
      e.preventDefault();
      this.errorLogin = 'Ошибка логина';
      this.errorPassword = 'Ошибка пароля';
    }

  },
  watch: {
    login() {
      if (this.login.length > 0) {
        this.errorLogin = '';
      } else {
        this.errorLogin = 'Логин не зарегистрирован';
      }
    },

    password() {
      if (this.password.length > 0) {
        this.errorPassword = '';
      } else {
        this.errorPassword = 'Проверьте данные';
      }
    }

  }
});