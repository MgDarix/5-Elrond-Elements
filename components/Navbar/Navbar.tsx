import Link from 'next/link';
import React, { useState } from 'react';
import { classNames, handlescrollIntoView } from '../../utils';
import { Disclosure } from '@headlessui/react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

type Navigation = {
  name: string,
  href: string,
  show: boolean
  isNextLink: boolean
  target?: React.HTMLAttributeAnchorTarget | undefined,
}

const initalNavigation: Navigation[] = [
  { name: 'Home', href: '/', isNextLink: true, show: true },
  { name: 'Roadmap', href: '/roadmap', isNextLink: true, show: true },
  { name: 'Our team', href: '/team', isNextLink: true, show: true },
  //{ name: 'FAQ', href: '/faq', isNextLink: true, show: true },
]

type NavbarProps = {
  //
};

const Navbar: React.FC<NavbarProps> = () => {
  const [navigation, _] = useState(initalNavigation)
  const router = useRouter();

  const handleClick = (href: string, close?: any) => {
    handlescrollIntoView(href.slice(1, href.length))
    close && close()
  }

  return <>
    <Disclosure as="nav" className="bg-dark-600 backdrop-filter backdrop-blur bg-opacity-70 items-center sticky top-0 shadow z-20">
      {({ open, close }) => (
        <>
          <div className="container mx-auto px-3">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon size="1x" className="block h-6 w-6" aria-hidden="true" icon={faTimes}></FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon size="1x" className="block h-6 w-6" aria-hidden="true" icon={faBars}></FontAwesomeIcon>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div className="hidden md:block">
                  <div className="flex gap-6">
                    {navigation.map((item) => (
                      item.show ?
                        item.isNextLink ?
                          <Link href={item.href} key={item.name}>
                            <a className={classNames(
                              router.pathname === item.href ? 'text-primary-500 font-bold' : '',
                              'hover:text-primary-500 py-2 text-sm font-medium transition duration-200 ease-in-out cursor-pointer'
                            )}>
                              {item.name}
                            </a>
                          </Link>
                          :
                          <a
                            key={item.name}
                            href={item.target && item.href}
                            target={item.target}
                            rel="noreferrer"
                            className={classNames(
                              router.pathname == item.href ? '' : '',
                              'hover:text-primary-500 py-2 text-sm font-medium transition duration-200 ease-in-out cursor-pointer'
                            )}
                            aria-current={router.pathname == item.href ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        :
                        <></>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                item.show ?
                  item.isNextLink ?
                    <Link href={item.href} key={item.name}>
                      <a className={classNames(
                        router.pathname === item.href ? 'text-primary-500 font-bold' : '',
                        'block px-3 py-2 rounded-md text-base font-medium hover:text-primary-500 transition-all duration-200 ease-in-out cursor-pointer'
                      )}>
                        {item.name}
                      </a>
                    </Link>
                    :
                    <a
                      key={item.name}
                      target={item.target}
                      rel="noreferrer"
                      href={item.target && item.href}
                      onClick={
                        (!item.target && item.href[0] === "#")
                          ?
                          () => handleClick(item.href, close())
                          :
                          undefined
                      }
                      className={classNames(
                        router.pathname == item.href ? '' : '',
                        'block px-3 py-2 rounded-md text-base font-medium hover:text-primary-500 transition-all duration-200 ease-in-out cursor-pointer'
                      )}
                      aria-current={router.pathname == item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  :
                  <></>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </>;
};

Navbar.propTypes = {
  //
};

export default Navbar;
