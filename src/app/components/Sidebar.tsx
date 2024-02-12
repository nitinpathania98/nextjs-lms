"use client"
import React from 'react';
import { Image } from '@fluentui/react';
import { useContext } from 'react';
import { SidebarContext } from '@/context/SidebarContext';
import { usePathname } from 'next/navigation';
import { MdCreate, MdHistory, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineDetails, MdOutlineHome, MdRequestPage, MdSettingsApplications } from 'react-icons/md';
import Link from 'next/link';

interface SidebarItem {
    name: string;
    href: string;
    icon: React.ComponentType;
}

const sidebarItems: SidebarItem[] = [
    {
        name: 'Home',
        href: '/',
        icon: MdOutlineHome,
    },
    {
        name: 'Leave Request',
        href: '/leaverequest',
        icon: MdRequestPage,
    },
    {
        name: 'History',
        href: '/history',
        icon: MdHistory,
    },
    {
        name: 'Employee Details',
        href: '/details',
        icon: MdOutlineDetails,
    },
    {
        name: 'Leave Applications',
        href: '/leaveApplications',
        icon: MdSettingsApplications,
    },
    {
        name: 'Edit Profile',
        href: '/editEmployee',
        icon: MdCreate,
    },
];

const Sidebar: React.FC = () => {
    const pathname = usePathname();
    const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

    return (
        <>
            <div className="sidebar__wrapper  h-screen ">
                <button className="btn" onClick={toggleSidebarcollapse}>
                    {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
                </button>
                <aside className="sidebar" data-collapse={isCollapsed}>
                    <div className="sidebar__top">
                        <Image
                            width={80}
                            height={30}
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
                                    className={`sidebar__link ${pathname === href ? 'sidebar__link--active' : ''
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
