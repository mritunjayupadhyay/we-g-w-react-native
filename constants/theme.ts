const COLORS = {
    placeholder: "#CDCDCD",
  
    black: "#000",
    gray: "#808080",
    gray2: "#8F8F8F",

  
    white: "#FFFFFF",
    lightGreen: "#4AD8DA",
  };
  
  const FONT = {
    regular: "DMRegular",
    medium: "DMMedium",
    bold: "DMBold",
  };
  
  const SIZES = {

    padding: 15,
    padding2: 22,

    fontSize1: 10,
    fontSize2: 13,
    fontSize3: 15,
    fontSize4: 16,
    fontSize5: 18,

    borderSize: 22.5
  };

  const CARD = {
    width: 322,
    height: 180,
    borderRadius: 13,
    paddingTop: 30,
    paddingBottom: 22,
    paddingLeft: 30,
    paddingRight: 60,
    // box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.15);
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0,
      shadowRadius: 20,
      elevation: 9,
    }
  }
  
  const SHADOWS = {
    small: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
    },
  };
  
  export { COLORS, FONT, SIZES, SHADOWS, CARD };