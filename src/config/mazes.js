import Business from "../components/icons/Business";
import Finish from "../components/icons/Finish";
import Car from "../components/icons/Car";
import Nightout from "../components/icons/Nightout";
import Takeout from "../components/icons/Takeout";
import Coffee from "../components/icons/Coffee";
import Rideshare from "../components/icons/Rideshare";
import Shoes from "../components/icons/Shoes";

const weekOne = {
  title: "Week one",
  grid: [
    [0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
  ],
  collisions: [
    {
      id: "finsh",
      coord: [8, 0],
      element: Finish,
      value: 0,
      isEnd: true,
    },
    {
      id: "nightout",
      coord: [0, 3],
      element: Nightout,
      value: 2,
      isEnd: false,
    },
    {
      id: "takeout",
      coord: [4, 7],
      element: Takeout,
      value: 1,
      isEnd: false,
    },
  ],
};

const weekTwo = {
  title: "Week two",
  grid: [
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
  collisions: [
    {
      id: "finsh",
      coord: [4, 0],
      element: Finish,
      value: 0,
      isEnd: true,
    },
    {
      id: "shoes",
      coord: [0, 5],
      element: Shoes,
      value: 3,
      isEnd: false,
    },
    {
      id: "coffee",
      coord: [4, 7],
      element: Coffee,
      value: 1,
      isEnd: false,
    },
    {
      id: "rideshare",
      coord: [8, 4],
      element: Rideshare,
      value: 2,
      isEnd: false,
    },
  ],
};

const weekThree = {
  title: "Week three",
  grid: [
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
  collisions: [
    {
      id: "finsh",
      coord: [0, 0],
      element: Finish,
      value: 0,
      isEnd: true,
    },
    {
      id: "rideshare",
      coord: [0, 5],
      element: Rideshare,
      value: 2,
      isEnd: false,
    },
    {
      id: "coffee-1",
      coord: [8, 3],
      element: Coffee,
      value: 1,
      isEnd: false,
    },
    {
      id: "coffee-2",
      coord: [4, 7],
      element: Coffee,
      value: 1,
      isEnd: false,
    },
    {
      id: "shoes",
      coord: [8, 13],
      element: Shoes,
      value: 3,
      isEnd: false,
    },
  ],
};

const weekFour = {
  title: "Week four",
  grid: [
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
  collisions: [
    {
      id: "finsh",
      coord: [4, 0],
      element: Finish,
      value: 0,
      isEnd: true,
    },
    {
      id: "business",
      coord: [0, 0],
      element: Business,
      value: 5,
      isEnd: false,
    },
    {
      id: "car",
      coord: [8, 0],
      element: Car,
      value: 4,
      isEnd: false,
    },
  ],
};

export const mazes = [weekOne, weekTwo, weekThree, weekFour];
