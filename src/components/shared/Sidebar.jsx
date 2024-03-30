// import React from 'react'
import classNames from 'classnames'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
// import { FcBullish } from 'react-icons/fc'
import { Menu, Transition } from '@headlessui/react'
import { DASHBOARD_SIDEBAR_LINKS} from '../../lib/constants/Navigation'
import { BsBadge3DFill } from 'react-icons/bs'

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
	const navigate = useNavigate()

	return (
		<div className="sider w-10 p-16 flex flex-col sider"style={{ opacity: 0.5 }}>
			<div className="flex item-right gap-2 px- py-16">
				{/*profile detailes */}
			<Menu as="div" className="relative">
					<div>
						<Menu.Button className="ml-1 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
							<span className="sr-only">Open user menu</span>
							<div 
								className="customProfile"
								style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
								
							>
								<dev className='text-white text-[20px]font-semibold font-poppins counter'>4</dev>
								<span className="sr-only">Marc Backes</span>
							</div>
						</Menu.Button>
					</div>
					<div className='font-poppins font-semibold text-[30px] text-white'>Samantha</div>
					<div className='mt-[5px] font-poppins text-gray-400'>samantha@email.com</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
							<Menu.Item>
								{({ active }) => (
									<div
										onClick={() => navigate('/profile')}
										className={classNames(
											active && 'bg-gray-100',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Your Profile
									</div>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<div
										onClick={() => navigate('/settings')}
										className={classNames(
											active && 'bg-gray-100',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Settings
									</div>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<div
										className={classNames(
											active && 'bg-gray-100',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Sign out
									</div>
								)}
							</Menu.Item>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
			<div className="font-poppins font-semibold text-[22px] Dashboard ">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'text-neutral-50' : 'text-neutral-50','font-poppins font-semibold text-[21px]','Dashboard', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}
