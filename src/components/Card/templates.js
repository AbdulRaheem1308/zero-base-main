import React from "react";
import { DefaultCard } from "./Templates/DefaultCard";
import { QuickActionCard } from "./Templates/QuickActionCard";
import { FavouriteCard } from "./Templates/FavouriteCard";

const TemplateList = {
  "": (props) => <DefaultCard {...props} />,
  quickActionCard: (props) => <QuickActionCard {...props} />,
  favouriteCard: (props) => <FavouriteCard {...props} />,
};

export default TemplateList;
