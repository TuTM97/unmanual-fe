/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Components
import Link from 'next/link';
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { HiPencil, HiX } from 'react-icons/hi';

import useLayout from '@/hooks/useLayout';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';

// Types

function Customizer() {
  const { t } = useTranslation();
  const { changeLayoutMode, changeMenuMode, changeDirectionMode } = useLayout();
  const {
    rtlData: rtl,
    mode: layoutMode,
    topMenu,
  } = useAppSelector((state) => state.layout);
  const [state, setState] = useState({
    customizerAction: false,
  });
  const { customizerAction } = state;

  const dispatch = useAppDispatch();

  // open Customizer Function
  const showCustomizer = () => {
    setState({
      customizerAction: !customizerAction,
    });
  };

  const darkmodeActivated = () => {
    document.body.classList.add('dark');
    document.body.classList.add('dark');
  };

  const darkmodeDiactivated = () => {
    document.body.classList.remove('dark');
    document.body.classList.remove('dark');
  };
  const changeLayout = (mode: string) => {
    dispatch(changeLayoutMode(mode));
  };
  const changeNavbar = (topMode: boolean) => {
    const html = document.querySelector('html');
    if (topMode) {
      html?.classList.add('hexadash-topmenu');
    } else {
      html?.classList.remove('hexadash-topmenu');
    }
    dispatch(changeMenuMode(topMode));
  };
  const changeLayoutDirection = (rtlMode: boolean) => {
    if (rtlMode) {
      const html = document.querySelector('html');
      html?.setAttribute('dir', 'rtl');
    } else {
      const html = document.querySelector('html');
      html?.setAttribute('dir', 'ltr');
    }
    dispatch(changeDirectionMode(rtlMode));
  };

  return (
    <>
      <div>
        <Link
          className="group mx-[20px] inline-flex min-h-[34px] items-center gap-[8px] rounded-2xl bg-normalBG px-4 transition duration-300 hover:bg-primary/10 hover:text-primary dark:bg-[#282b37] dark:text-white60 dark:hover:bg-white60 dark:hover:text-dark xl:mx-[12px] sm:mx-[10px] sm:w-[34px] sm:justify-center sm:px-0"
          href="#"
          onClick={() => {
            showCustomizer();
          }}
        >
          <HiPencil className="h-3.5 w-3.5 text-body group-hover:text-primary dark:text-white60 dark:group-hover:text-currentColor sm:mr-0" />
          <span className="text-sm font-medium text-body group-hover:text-primary dark:text-white60 dark:group-hover:text-currentColor sm:hidden">
            {t('Customize')}...
          </span>
        </Link>
        <div
          className={`fixed top-0 z-998 h-full w-[350px] translate-x-0 overflow-y-auto bg-white shadow-regular transition-all ltr:right-0 rtl:left-0 dark:bg-[#323541] dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] sm:w-[300px] ${
            customizerAction
              ? 'ltr:translate-x-[0] rtl:translate-x-[-0]'
              : 'ltr:translate-x-[350px] rtl:translate-x-[-350px]'
          }`}
        >
          <div className="h-full">
            <div className="relative px-6 pb-4 pt-12">
              <h4 className="mb-0.5 text-base font-semibold text-dark dark:text-white87">
                {t('Customizer')}
              </h4>
              <span className="dark:text-white60">
                {t('Customize')} {t('your')} {t('overview')} {t('page')}{' '}
                {t('layout')}
              </span>
              <Link
                href="#"
                className="absolute top-7 ltr:right-4 rtl:left-4"
                onClick={() => {
                  showCustomizer();
                }}
              >
                <HiX className="text-danger" />
              </Link>
            </div>
            <div className="px-6 pb-6">
              <div className="mb-12">
                <h4 className="mb-8 text-base font-semibold text-dark dark:text-white87">
                  {t('layouts')} {t('type')}
                </h4>
                <ul className="-m-2.5 flex">
                  <li className="relative m-2.5">
                    <Link
                      onClick={() => {
                        showCustomizer();
                        changeLayoutDirection(false);
                      }}
                      href="#"
                    >
                      <img src={require('../../static/img/ltr.png')} alt="" />
                      <FaCheckCircle
                        className={
                          !rtl
                            ? 'absolute right-4 top-4 block text-success'
                            : 'hidden'
                        }
                        name="check-circle"
                      />
                    </Link>
                  </li>
                  <li className="relative m-2.5">
                    <Link
                      onClick={() => {
                        showCustomizer();
                        changeLayoutDirection(true);
                      }}
                      href="#"
                    >
                      <img src={require(`../../static/img/rtl.png`)} alt="" />
                      <FaCheckCircle
                        className={
                          rtl
                            ? 'absolute right-4 top-4 block text-success'
                            : 'hidden'
                        }
                        name="check-circle"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-12">
                <h4 className="mb-8 text-base font-semibold text-dark dark:text-white87">
                  {t('sidebar')} {t('type')}
                </h4>
                <ul className="-m-2.5 flex">
                  <li className="relative m-2.5">
                    <Link
                      onClick={() => {
                        showCustomizer();
                        darkmodeDiactivated();
                        changeLayout('lightMode');
                      }}
                      href="#"
                    >
                      <img src={require('../../static/img/light.png')} alt="" />
                      <FaCheckCircle
                        className={
                          layoutMode === 'lightMode'
                            ? 'absolute right-4 top-4 block text-success'
                            : 'hidden'
                        }
                        name="check-circle"
                      />
                    </Link>
                  </li>
                  <li className="relative m-2.5">
                    <Link
                      onClick={() => {
                        showCustomizer();
                        darkmodeActivated();
                        changeLayout('darkMode');
                      }}
                      href="#"
                    >
                      <img src={require(`../../static/img/dark.png`)} alt="" />
                      <FaCheckCircle
                        className={
                          layoutMode === 'darkMode'
                            ? 'absolute right-4 top-4 block text-success'
                            : 'hidden'
                        }
                        name="check-circle"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-12">
                <h4 className="mb-8 text-base font-semibold text-dark dark:text-white87">
                  {t('navbar')} {t('type')}
                </h4>
                <ul className="-m-2.5 flex">
                  <li className="relative m-2.5">
                    <Link
                      onClick={() => {
                        showCustomizer();
                        changeNavbar(false);
                      }}
                      href="#"
                    >
                      <img src={require('../../static/img/side.png')} alt="" />
                      <FaCheckCircle
                        className={
                          !topMenu
                            ? 'absolute right-4 top-4 block text-success'
                            : 'hidden'
                        }
                        name="check-circle"
                      />
                    </Link>
                  </li>
                  <li className="relative m-2.5">
                    <Link
                      onClick={() => {
                        showCustomizer();
                        changeNavbar(true);
                      }}
                      href="#"
                    >
                      <img src={require(`../../static/img/top.png`)} alt="" />
                      <FaCheckCircle
                        className={
                          topMenu
                            ? 'absolute right-4 top-4 block text-success'
                            : 'hidden'
                        }
                        name="check-circle"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customizer;
