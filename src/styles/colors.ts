interface Theme {
  backGroundColor: string;
  textColor: string;
  cardContainerColor?: {
    take: string;
    give: string;
  };
  button: {
    background: string;
    text: string;
  };
}

export const DarkTheme: Theme = {
  backGroundColor: "#08211d",
  textColor: "#fefae0",
  cardContainerColor: {
    take: "#8ba646",
    give: "#e26d5c",
  },
  button: {
    background: "#3f4238",
    text: "#fefae0",
  },
};

export const LightTheme: Theme = {
  backGroundColor: "#fefae0",
  textColor: "#08211d",
  cardContainerColor: { take: "#ddfedd", give: "#e26d5c" },
  button: {
    background: "#feffef",
    text: "#08211d",
  },
};
