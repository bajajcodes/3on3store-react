const logoImage = {
  logoPath: `${process.env.PUBLIC_URL}/assets/logo/logo.svg`,
  logoDesc: "Logo for 3 on 3 store",
};

const ecommerceName = "3 on 3 Store";

const authInfo = {
  login: {
    authTo: "signup",
    authToName: "Signup",
    authMessage: "Welcome back.",
    asideLoginImage: {
      imagePath: `${process.env.PUBLIC_URL}/images/login-cuate_black.png`,
      imageDesc: "Login visualizer",
    },
  },
  signup: {
    authTo: "login",
    authToName: "Login",
    authMessage:
      "Join over 100,000 people who learned to play the game, read actionable items and get fitter on 3 on Store.",
    asideSignupImage: {
      imagePath: `${process.env.PUBLIC_URL}/images/Signup-cuate_black.png`,
      imageDesc: "Signup visualizer",
    },
  },
};

const slides = {
  sliderImages: [
    {
      source: `${process.env.PUBLIC_URL}/images/Hangout-rafiki.svg`,
      category: "social",
    },
    {
      source: `${process.env.PUBLIC_URL}/images/Workout-rafiki.svg`,
      category: "strength",
    },
    {
      source: `${process.env.PUBLIC_URL}/images/Ebook-pana.svg`,
      category: "intelligence",
    },
  ],
  inititalSlide: 0,
};

const starColor = "#38cfea";

const profileInfo = [
  {
    headerText: "Email ID",
    itemKey: "email",
  },
  {
    headerText: "First Name",
    itemKey: "firstName",
  },
  {
    headerText: "Last Name",
    itemKey: "lastName",
  },
  {
    headerText: "User Name",
    itemKey: "userName",
  },
  {
    headerText: "Gender",
    itemKey: "gender",
  },
  {
    headerText: "Mobile Number",
    itemKey: "number",
  },
  {
    headerText: "Date Of Birth",
    itemKey: "dob",
  },
];

const profileInputFields = [
  {
    text: "name",
  },
  {
    text: "number",
  },
  {
    text: "pincode",
  },
  {
    text: "state",
  },
  {
    text: "address",
  },
  {
    text: "locality",
  },
  {
    text: "city",
  },
];

export { logoImage, ecommerceName, starColor, slides, authInfo, profileInfo,profileInputFields };
