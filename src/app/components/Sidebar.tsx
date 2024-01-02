import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdHistory, MdRequestPage, MdOutlineSettingsApplications, MdCreate } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { usePathname } from 'next/navigation'

interface SidebarItem {
    name: string;
    href: string;
    icon: React.ComponentType;
}

const sidebarItems: SidebarItem[] = [
    {
        name: "Home",
        href: "/",
        icon: AiOutlineHome,
    },
    {
        name: "Leave Request",
        href: "/leaverequest",
        icon: MdRequestPage,
    },
    {
        name: "History",
        href: "/history",
        icon: MdHistory,
    },
    {
        name: "Employee Details",
        href: "/details",
        icon: TbListDetails,
    },
    {
        name: "Leave Applications",
        href: "/leaveApplications",
        icon: MdOutlineSettingsApplications,
    },
    {
        name: "Create Employee",
        href: "/createEmployee",
        icon: MdCreate,
    },

];

const Sidebar: React.FC = () => {
    const pathname = usePathname();
    const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

    return (
        <>
            <div className="sidebar__wrapper ">
                <button className="btn" onClick={toggleSidebarcollapse}>
                    {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
                </button>
                <aside className="sidebar" data-collapse={isCollapsed}>
                    <div className="sidebar__top">
                        <Image
                            width={80}
                            height={80}
                            className="sidebar__logo"
                            src="/logo.jpg"
                            alt="logo"
                        />
                        <p className="sidebar__logo-name">Cipher Studio</p>
                    </div>
                    <ul className="sidebar__list">
                        {sidebarItems.map(({ name, href, icon: Icon }) => (
                            <li className="sidebar__item" key={name}>
                                <Link
                                    className={`sidebar__link ${pathname === href ? "sidebar__link--active" : ""
                                        }`}
                                    href={href}
                                >
                                    <span className="sidebar__icon">
                                        <Icon />
                                    </span>
                                    <span className="sidebar__name">{name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </>
    );
};

export default Sidebar;
