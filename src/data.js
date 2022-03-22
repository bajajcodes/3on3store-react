const data = {
  logoImage: {
    logoPath: `${process.env.PUBLIC_URL}/assets/logo/logo.svg`,
    logoDesc: "Logo for 3 on 3 store",
  },
  ecommerceName: "3 on 3 Store",
  headerInfo: {
    login: {
      authTo: "signup",
      authToName: "Signup",
      authMessage: "Welcome back.",
    },
    signup: {
      authTo: "login",
      authToName: "Login",
      authMessage:
        "Join over 100,000 people who learned to play the game, read actionable items and get fitter on 3 on Store.",
    },
  },
  slides: {
    sliderImages: [
      `${process.env.PUBLIC_URL}/images/Hangout-rafiki.svg`,
      `${process.env.PUBLIC_URL}/images/Workout-rafiki.svg`,
      `${process.env.PUBLIC_URL}/images/Ebook-pana.svg`,
    ],
    inititalSlide: 0,
  },
  asideImages: {
    asideLoginImage: {
      imagePath: `${process.env.PUBLIC_URL}/images/login-cuate_black.png`,
      imageDesc: "Login visualizer",
    },
    asideSignupImage: {
      imagePath: `${process.env.PUBLIC_URL}/images/Signup-cuate_black.png`,
      imageDesc: "Signup visualizer",
    },
  },
  starColor: "#38cfea",
};

export { data };
