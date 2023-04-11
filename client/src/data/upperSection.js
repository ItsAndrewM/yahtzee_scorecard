import Icon from "@mdi/react";
import {
  mdiDice1,
  mdiDice2,
  mdiDice3,
  mdiDice4,
  mdiDice5,
  mdiDice6,
} from "@mdi/js";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

export const upperSection = [
  {
    title: "aces",
    number: "= 1",
    icon: mdiDice1,
    howToScore: "count and add only aces",
  },
  {
    title: "twos",
    number: "= 2",
    icon: mdiDice2,
    howToScore: "count and add only twos",
  },
  {
    title: "threes",
    number: "= 3",
    icon: mdiDice3,
    howToScore: "count and add only threes",
  },
  {
    title: "fours",
    number: "= 4",
    icon: mdiDice4,
    howToScore: "count and add only fours",
  },
  {
    title: "fives",
    number: "= 5",
    icon: mdiDice5,
    howToScore: "count and add only fives",
  },
  {
    title: "sixes",
    number: "= 6",
    icon: mdiDice6,
    howToScore: "count and add only sixes",
  },
  {
    title: "total score",
    howToScore: TrendingFlatIcon,
  },
  {
    title: "bonus",
    description: "if total score is 63 or over",
    howToScore: "score 35",
  },
  {
    title: "total",
    description: "of upper section",
    howToScore: TrendingFlatIcon,
  },
];
