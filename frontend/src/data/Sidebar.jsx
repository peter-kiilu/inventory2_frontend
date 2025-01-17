import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";



// Icon variables
const DashboardIcon = <FaTh/>,
AddProductIcon = <BiImageAdd/>,
AccountIcon = <FaRegChartBar/>,
ReportBugIcon = <FaCommentAlt/>

const menu = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: AddProductIcon,
    path: "/add-product",
  },
  {
    title: "Account",
    icon: AccountIcon,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report Bug",
    icon: ReportBugIcon,
    path: "/contact-us",
  },
];

export default menu;
