var upload = new Vue({
  el: '.upload__main',
  data() {
    return {
      status: 'waiting',
      file: ''
    };
  },
  mounted() {
    const uploadArea = document.querySelector('.upload-area');
    uploadArea.addEventListener('dragover', (e) => {
      this.dragOverHandler(e);
    });

    uploadArea.addEventListener('drop', (e) => {
      this.dropHandler(e);
    });
  },
  methods: {
    dragOverHandler(e) {
      e.preventDefault();
    },
    dropHandler(e) {
      e.preventDefault();
      this.file = e.target.files || e.dataTransfer.files;
    },
    collectData() {
      setTimeout(() => {
        this.status = 'collect'
      }, 3000);
    },
    changeFile(e) {
      this.file = e.target.files || e.dataTransfer.files;
    }
  },
  watch: {
    file() {
      this.status = 'loading';
      this.collectData();
    }
  }
});