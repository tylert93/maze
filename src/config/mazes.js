import Flag from "../components/icons/Flag";
import Ticket from "../components/icons/Ticket";
import Cake from "../components/icons/Cake";
import Bag from "../components/icons/Bag";
import Cart from "../components/icons/Cart";
import Phone from "../components/icons/Phone";
import House from "../components/icons/House";
import Computer from "../components/icons/Computer";

const weekOne = {
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
      element: Flag,
      value: 0,
      isEnd: true,
    },
    {
      id: "ticket",
      coord: [0, 3],
      element: Ticket,
      value: 2,
      isEnd: false,
    },
    {
      id: "cake",
      coord: [4, 7],
      element: Cake,
      value: 1,
      isEnd: false,
    },
  ],
};

const weekTwo = {
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
      element: Flag,
      value: 0,
      isEnd: true,
    },
    {
      id: "bag",
      coord: [0, 5],
      element: Bag,
      value: 3,
      isEnd: false,
    },
    {
      id: "cart",
      coord: [4, 7],
      element: Cart,
      value: 1,
      isEnd: false,
    },
    {
      id: "phone",
      coord: [8, 4],
      element: Phone,
      value: 3,
      isEnd: false,
    },
  ],
};

const weekThree = {
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
      element: Flag,
      value: 0,
      isEnd: true,
    },
    {
      id: "phone",
      coord: [0, 5],
      element: Phone,
      value: 2,
      isEnd: false,
    },
    {
      id: "cart-1",
      coord: [8, 3],
      element: Cart,
      value: 1,
      isEnd: false,
    },
    {
      id: "cart-2",
      coord: [4, 7],
      element: Cart,
      value: 1,
      isEnd: false,
    },
    {
      id: "bag",
      coord: [8, 13],
      element: Bag,
      value: 3,
      isEnd: false,
    },
  ],
};

const weekFour = {
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
      element: Flag,
      value: 0,
      isEnd: true,
    },
    {
      id: "house",
      coord: [0, 0],
      element: House,
      value: 4,
      isEnd: false,
    },
    {
      id: "computer",
      coord: [8, 0],
      element: Computer,
      value: 3,
      isEnd: false,
    },
  ],
};

export const mazes = [weekOne, weekTwo, weekThree, weekFour];
