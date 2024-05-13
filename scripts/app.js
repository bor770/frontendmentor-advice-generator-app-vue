const ERROR_MESSAGE = `Something went wrong!`;

const load = async () => {
  let response;

  try {
    response = await fetch(`https://api.adviceslip.com/advice`);
  } catch (error) {
    alert(ERROR_MESSAGE);
    return;
  }

  if (!response.ok) {
    alert(ERROR_MESSAGE);
    return;
  }

  const responseData = await response.json();

  return responseData.slip;
};

const AdviceApp = {
  async created() {
    this.slip = await load();
  },
  data() {
    return { slip: {} };
  },
  methods: {
    async reload() {
      this.slip = await load();
    },
  },
};

Vue.createApp(AdviceApp).mount(`#advice-app`);
