export const reducer = (state, action) => {
  switch (action.type) {
    case "x":
      return {
        ...state,
        [`box${action.payload}`]: {
          ...state[`box${action.payload}`],
          a: true,
          b: "x",
        },
      };
    case "o":
      return {
        ...state,
        [`box${action.payload}`]: {
          ...state[`box${action.payload}`],
          a: true,
          b: "o",
        },
      };
    default:
      return state;
  }
};

export const STATE = {
  box1: [
    {
      a: false,
      b: "",
    },
  ],
  box2: [
    {
      a: false,
      b: "",
    },
  ],
  box3: [
    {
      a: false,
      b: "",
    },
  ],
  box4: [
    {
      a: false,
      b: "",
    },
  ],
  box5: [
    {
      a: false,
      b: "",
    },
  ],
  box6: [
    {
      a: false,
      b: "",
    },
  ],
  box7: [
    {
      a: false,
      b: "",
    },
  ],
  box8: [
    {
      a: false,
      b: "",
    },
  ],
  box9: [
    {
      a: false,
      b: "",
    },
  ],
};
