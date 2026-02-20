import { BsShop } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { FaSackDollar } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";

import men from "../assets/person/men.png";
import men1 from "../assets/person/men1.png";
import woman from "../assets/person/woman.png";

import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { RiShieldCheckLine } from "react-icons/ri";

export const ABOUTDETAIL = [
  {
    icon: BsShop,
    people: "10.5K",
    description: "Sallers active our site",
  },
  {
    icon: BiDollarCircle,
    people: "33K",
    description: "Mopnthly Produduct Sale",
  },
  {
    icon: FiShoppingBag,
    people: "45.5K",
    description: "Customer active in our site",
  },
  {
    icon: FaSackDollar,
    people: "25K",
    description: "Anual gross sale in our site",
  },
];

export const SERVICES = [
  {
    icon: TbTruckDelivery,
    title: "FREE AND FAST DELIVERY",
    subTitle: "Free delivery for all orders over $140",
  },
  {
    icon: RiCustomerServiceLine,
    title: "24/7 CUSTOMER SERVICE",
    subTitle: "Friendly 24/7 customer support",
  },
  {
    icon: RiShieldCheckLine,
    title: "MONEY BACK GUARANTEE",
    subTitle: "We reurn money within 30 days",
  },
];

export const TEAMS = [
  {
    image: men1,
    name: "Tom Cruise",
    role: "Founder & Chairman",
  },
  {
    image: woman,
    name: "Emma Watson",
    role: "Managing Director",
  },
  {
    image: men,
    name: "Will Smith",
    role: "Product Designer",
  },
  {
    image: woman,
    name: "Amelia Wilson",
    role: "team leader",
  },
  {
    image: men,
    name: "Devid Doe",
    role: "Business analyst",
  },
  {
    image: men1,
    name: "Alice Jackson",
    role: "Marketing manager",
  },
  {
    image: men,
    name: "Nick Doe",
    role: "Finance manager",
  },
  {
    image: woman,
    name: "Olivia Harper",
    role: "Human resources manager",
  },
];
