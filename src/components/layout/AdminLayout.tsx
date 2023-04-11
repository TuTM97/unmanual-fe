/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import { Button, Col, Layout, Row } from 'antd';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link, NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useAppSelector } from '@/hooks/useRedux';

import AuthInfo from '../components/utilities/auth-info/info';
import Search from '../components/utilities/auth-info/Search';
import MenueItems from './MenueItems';
import CustomizerWrap from './overview/Customizer';
import {
  FooterStyle,
  LayoutContainer,
  SmallScreenAuthInfo,
  TopMenuSearch,
} from './Style';
import TopMenu from './TopMenu';

const { theme } = require('../config/theme/themeVariables');

const { Header, Sider, Content } = Layout;

interface IAdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children, ...props }: IAdminLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [hide, setHide] = useState(false);

  const updateDimensions = () => {
    setCollapsed(window.innerWidth <= 1200 && true);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const {
    mode: layoutMode,
    rtlData: rtl,
    topMenu,
  } = useAppSelector((state) => state.layout);

  const left = !rtl ? 'left' : 'right';
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleCollapsedMobile = () => {
    if (window.innerWidth <= 990) {
      setCollapsed(!collapsed);
    }
  };

  const onShowHide = () => {
    setHide(!hide);
  };

  const SideBarStyle = {
    margin: '63px 0 0 0',
    padding: `${!rtl ? '20px 20px 55px 0' : '20px 0 55px 20px'}`,
    overflowY: 'auto',
    height: '100vh',
    position: 'fixed',
    [left]: 0,
    zIndex: 988,
  };

  function renderThumb({ style }) {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
    };
    return <div style={{ ...style, ...thumbStyle }} />;
  }
  const renderTrackVertical = () => {
    const thumbStyle = {
      position: 'absolute',
      width: '6px',
      transition: 'opacity 200ms ease 0s',
      opacity: 0,
      [rtl ? 'left' : 'right']: '0px',
      bottom: '2px',
      top: '2px',
      borderRadius: '3px',
    };
    return (
      <div
        className="[&>div]:bg-regular dark:[&>div]:bg-[#32333f]"
        style={thumbStyle}
      />
    );
  };
  function renderView({ style }) {
    const customStyle = {
      marginRight: rtl && 'auto',
      [rtl ? 'marginLeft' : 'marginRight']: '-17px',
    };
    return <div style={{ ...style, ...customStyle }} />;
  }

  return (
    <LayoutContainer>
      <Layout className="layout">
        <Header
          style={{
            position: 'fixed',
            width: '100%',
            top: 0,
            [!rtl ? 'left' : 'right']: 0,
          }}
          className="z-998 flex h-[72px] items-center justify-between bg-white p-0 dark:bg-[#1b1e2b] dark:shadow-[0_5px_20px_rgba(160,160,160,.02)]"
        >
          <div className="flex flex-row items-center flex-1 h-full">
            <div className=" rtl:ssm::pl:[15px] grid h-full min-w-[280px] align-middle ltr:pl-[30px] ltr:pr-5 rtl:pl-5 rtl:pr-[30px] dark:bg-[#323541] ssm:min-w-[220px] ltr:ssm:px-[15px] rtl:ssm:pr-[15px] xs:min-w-[170px] xs:ltr:pl-[20px] xs:rtl:pr-[20px]">
              <div className="flex items-center justify-between">
                <Link to="/admin">
                  <Image
                    className="w-full max-w-[120px] xs:max-w-[100px]"
                    // src={
                    //   layoutMode === 'lightMode'
                    //     ? require(`../static/img/logo_dark.svg`).default
                    //     : require(`../static/img/logo_white.svg`).default
                    // }
                    src=""
                    alt=""
                  />
                </Link>
                {!topMenu || window.innerWidth <= 991 ? (
                  <Button
                    type="link"
                    className="border-none bg-transparent p-0 text-[#525768] hover:text-primary dark:border-transparent dark:bg-transparent dark:text-white60 dark:hover:text-primary"
                    onClick={toggleCollapsed}
                  >
                    <Image src="" alt="" />
                  </Button>
                ) : null}
              </div>
            </div>
            <div className="flex flex-auto items-center justify-between ltr:mr-[10px] rtl:ml-[10px] [&>div:first-child]:flex [&>div]:items-center ">
              {topMenu && window.innerWidth > 991 ? (
                <TopMenu />
              ) : (
                <CustomizerWrap />
              )}
              <div className="flex flex-row items-center md:hidden">
                {topMenu && window.innerWidth > 991 ? (
                  <TopMenuSearch>
                    <div className="flex top-right-wrap">
                      <CustomizerWrap />
                      <AuthInfo />
                    </div>
                  </TopMenuSearch>
                ) : (
                  <AuthInfo />
                )}
              </div>
            </div>
            <div className="hidden items-center ltr:pr-[25px] rtl:pl-[25px] md:flex ltr:ssm:pr-[10px] rtl:ssm:pl-[10px]">
              <Search />
              <Link
                className="inline-flex text-light dark:text-white60"
                onClick={onShowHide}
                to="#"
              >
                <UilEllipsisV className="h-[18px] w-[18px]" />
              </Link>
            </div>
          </div>
        </Header>
        <Row>
          <Col md={0} sm={24} xs={24}>
            <SmallScreenAuthInfo hide={hide}>
              <AuthInfo rtl={rtl} />
            </SmallScreenAuthInfo>
          </Col>
        </Row>
        <Layout>
          {!topMenu || window.innerWidth <= 991 ? (
            <ThemeProvider theme={theme}>
              <Sider
                width={280}
                style={SideBarStyle}
                collapsed={collapsed}
                theme={layoutMode === 'lightMode' ? 'light' : 'dark'}
              >
                <Scrollbars
                  className="custom-scrollbar"
                  autoHide
                  autoHideTimeout={500}
                  autoHideDuration={200}
                  // renderThumbHorizontal={renderThumbHorizontal}
                  renderThumbVertical={renderThumb}
                  renderView={renderView}
                  renderTrackVertical={renderTrackVertical}
                >
                  <MenueItems
                    toggleCollapsed={toggleCollapsedMobile}
                  />
                </Scrollbars>
              </Sider>
            </ThemeProvider>
          ) : null}
          <Layout className="atbd-main-layout">
            <Content>
              {React.cloneElement(children, { ...props })}
              <FooterStyle className="bg-white dark:bg-[#1B1E2B]">
                <Row>
                  <Col md={12} xs={24}>
                    <span className="admin-footer__copyright inline-block w-full font-medium text-theme-gray dark:text-white60 md:mb-[10px] md:text-center">
                      © 2023
                      <Link className="mx-[4px] text-primary" to="#">
                        SovWare
                      </Link>
                    </span>
                  </Col>
                  <Col md={12} xs={24}>
                    <div className="flex items-center justify-end gap-[15px] md:justify-center">
                      <NavLink
                        className="text-[14px] text-theme-gray hover:text-primary dark:text-white60"
                        to="#"
                      >
                        About
                      </NavLink>
                      <NavLink
                        className="text-[14px] text-theme-gray hover:text-primary dark:text-white60"
                        to="#"
                      >
                        Team
                      </NavLink>
                      <NavLink
                        className="text-[14px] text-theme-gray hover:text-primary dark:text-white60"
                        to="#"
                      >
                        Contact
                      </NavLink>
                    </div>
                  </Col>
                </Row>
              </FooterStyle>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      {window.innerWidth <= 991 ? (
        <span
          className={collapsed ? 'hexadash-shade' : 'hexadash-shade show'}
          onClick={toggleCollapsed}
        />
      ) : (
        ''
      )}
    </LayoutContainer>
  );
};

export default AdminLayout;
