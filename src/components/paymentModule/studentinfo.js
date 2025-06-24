import React, { useRef } from 'react';
import {
  Button,
  IconButton
} from '@mui/material';
import { RestoreOutlined, ChevronRight } from '@mui/icons-material';
import { NavLink, Outlet } from 'react-router-dom';
import useNavigation from '../customHooks/useNav';

const StudentInfo = () => {
  const { subTabs } = useNavigation();
  const tabContainerRef = useRef(null);

  const scrollRight = () => {
    if (tabContainerRef.current) {
      tabContainerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-light p-3" style={{ height: 'calc(100vh - 33vh)' }}>
      {/* Top Section */}
      <div className="payment_top d-flex flex-row justify-content-between mt-2 mb-3">
        <div className="Payments_left d-flex flex-row gap-1">
          <div className="img-dollar">
            {/* Your SVG remains unchanged */}
            {/* ... */}
          </div>
          <div className='d-flex'>
            <div>
 <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1434_5350)">
<rect x="3" y="3" width="42" height="42" rx="7" fill="#3425FF"/>
<path d="M18.7803 20.9261C18.7803 20.36 19.2392 19.901 19.8054 19.901H25.7626C25.6858 19.491 25.5562 19.12 25.3739 18.788C25.2011 18.4463 24.9516 18.1583 24.6252 17.924C24.3085 17.6799 23.9102 17.4945 23.4303 17.3675C22.96 17.2309 22.3986 17.1625 21.7459 17.1625H19.8054C19.2392 17.1625 18.7803 16.7036 18.7803 16.1374C18.7803 15.5713 19.2392 15.1123 19.8054 15.1123H30.7552C31.3213 15.1123 31.7803 15.5713 31.7803 16.1374C31.7803 16.7036 31.3213 17.1625 30.7552 17.1625H27.0582C27.3366 17.5237 27.5621 17.9338 27.7349 18.3926C27.9172 18.8417 28.0372 19.3445 28.0948 19.901H30.7552C31.3213 19.901 31.7803 20.36 31.7803 20.9261C31.7803 21.4923 31.3213 21.9512 30.7552 21.9512H28.0228C27.8212 23.1228 27.3462 24.1235 26.5975 24.9533C25.8585 25.7734 24.918 26.3396 23.7758 26.6521V26.7106C24.1022 26.8668 24.3997 27.0475 24.6684 27.2525C24.9372 27.4575 25.1963 27.6967 25.4458 27.97C25.6954 28.2336 25.9401 28.5412 26.1801 28.8926C26.4296 29.2441 26.6935 29.6444 26.9719 30.0935L29.5651 34.3452C30.0374 35.1195 29.4801 36.1123 28.5731 36.1123C28.1609 36.1123 27.7795 35.8939 27.5709 35.5384L24.6252 30.5182C24.3085 29.9812 24.0062 29.5077 23.7183 29.0977C23.4399 28.6876 23.1376 28.3459 22.8113 28.0726C22.4946 27.7992 22.1394 27.5942 21.7459 27.4575C21.362 27.3208 20.9109 27.2525 20.3927 27.2525H19.7834C19.2294 27.2525 18.7803 26.8034 18.7803 26.2493C18.7803 25.6953 19.2294 25.2462 19.7834 25.2462H21.7315C22.221 25.2462 22.6865 25.1681 23.128 25.0119C23.5695 24.8459 23.963 24.6214 24.3085 24.3382C24.6636 24.0454 24.9612 23.6988 25.2011 23.2985C25.4506 22.8885 25.6282 22.4394 25.7338 21.9512H19.8054C19.2392 21.9512 18.7803 21.4923 18.7803 20.9261Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1434_5350" x="0.95122" y="0.95122" width="46.0976" height="46.0976" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.02439"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1434_5350"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1434_5350" result="shape"/>
</filter>
</defs>
</svg>


            </div>
            <div className='ms-1'>
            <h5 style={{ margin: 0,color:"#393939",fontWeight:"700",fontSize:"22px" }}>Payments</h5>
            <p style={{ margin: 0, fontSize: '12px',color:'#575757',fontWeight:"400"}}>
              Get all student details regarding fee payment, transport, and more...
            </p>
            </div>
          </div>
        </div>
        <div className="payments_right">
             <Button
  variant="outlined"
  
  size="small"
  sx={{
    color: '#555555',
    borderColor: '#D2D2D2',
    px: "16px",
    py:"px",
    textTransform:'capitalize',
    fontSize: "14px",
    fontWeight: "400",
    borderRadius:"6px",
    width:"102%",
    height:'75%',
    backgroundColor:'#FBFBFB',
    opacity: 0.7,
  }}
>
  History
  <div className='px-2'>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" >
  <path d="M10 17.5C8.25 17.5 6.70139 16.9689 5.35417 15.9067C4.00694 14.8444 3.13194 13.4867 2.72917 11.8333C2.67361 11.625 2.71528 11.4342 2.85417 11.2608C2.99306 11.0875 3.18056 10.9867 3.41667 10.9583C3.63889 10.9306 3.84028 10.9722 4.02083 11.0833C4.20139 11.1944 4.32639 11.3611 4.39583 11.5833C4.72917 12.8333 5.41667 13.8542 6.45833 14.6458C7.5 15.4375 8.68056 15.8333 10 15.8333C11.625 15.8333 13.0036 15.2675 14.1358 14.1358C15.2681 13.0042 15.8339 11.6256 15.8333 10C15.8328 8.37444 15.2669 6.99611 14.1358 5.865C13.0047 4.73389 11.6261 4.16778 10 4.16667C9.04167 4.16667 8.14583 4.38889 7.3125 4.83333C6.47917 5.27778 5.77778 5.88889 5.20833 6.66667H6.66667C6.90278 6.66667 7.10083 6.74667 7.26083 6.90667C7.42083 7.06667 7.50056 7.26444 7.5 7.5C7.49944 7.73556 7.41944 7.93361 7.26 8.09417C7.10056 8.25472 6.90278 8.33444 6.66667 8.33333H3.33333C3.09722 8.33333 2.89944 8.25333 2.74 8.09333C2.58056 7.93333 2.50056 7.73556 2.5 7.5V4.16667C2.5 3.93056 2.58 3.73278 2.74 3.57333C2.9 3.41389 3.09778 3.33389 3.33333 3.33333C3.56889 3.33278 3.76694 3.41278 3.9275 3.57333C4.08806 3.73389 4.16778 3.93167 4.16667 4.16667V5.29167C4.875 4.40278 5.73972 3.71528 6.76083 3.22917C7.78194 2.74306 8.86167 2.5 10 2.5C11.0417 2.5 12.0175 2.69806 12.9275 3.09417C13.8375 3.49028 14.6292 4.02472 15.3025 4.6975C15.9758 5.37028 16.5106 6.16194 16.9067 7.0725C17.3028 7.98306 17.5006 8.95889 17.5 10C17.4994 11.0411 17.3017 12.0169 16.9067 12.9275C16.5117 13.8381 15.9769 14.6297 15.3025 15.3025C14.6281 15.9753 13.8364 16.51 12.9275 16.9067C12.0186 17.3033 11.0428 17.5011 10 17.5ZM10.8333 9.66667L12.9167 11.75C13.0694 11.9028 13.1458 12.0972 13.1458 12.3333C13.1458 12.5694 13.0694 12.7639 12.9167 12.9167C12.7639 13.0694 12.5694 13.1458 12.3333 13.1458C12.0972 13.1458 11.9028 13.0694 11.75 12.9167L9.41667 10.5833C9.33333 10.5 9.27083 10.4064 9.22917 10.3025C9.1875 10.1986 9.16667 10.0908 9.16667 9.97917V6.66667C9.16667 6.43056 9.24667 6.23278 9.40667 6.07333C9.56667 5.91389 9.76444 5.83389 10 5.83333C10.2356 5.83278 10.4336 5.91278 10.5942 6.07333C10.7547 6.23389 10.8344 6.43167 10.8333 6.66667V9.66667Z" fill="#252C32"/>
</svg>
</div>

</Button>
        </div>
      </div>

      {/* Tabs */}
      <div className='card'>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' ,flexDirection:"row"}}>
        <div
          ref={tabContainerRef}
          className="tabs-scroll"
          style={{
            display: 'flex',
            flexDirection:'row',
            alignItems:'center',
            gap:'5px',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            width: '100%',
            whiteSpace: 'nowrap',
            borderBottom:"1px solid #dcdcdc",
            paddingLeft:"1px",
            scrollbarWidth: 'none'
          }}
        >
          {subTabs.map((tab, index) => (
            <NavLink
              key={index}
              to={tab.path}
              end
              style={({ isActive }) => ({
                color: isActive ? '#3425FF' : 'color: var(--Dark-Gray-Dark-Gray-2, #252C32)',
                fontWeight: isActive ? '700' : '400',
                textDecoration: 'none',
                padding: ' 8px 15px',
                display: 'inline-block',
                position: 'relative',
                fontSize: '14px',
                minWidth: 'fit-content',
              })}
            >
              {({ isActive }) => (
                <>
                  {tab.name}
                  {isActive && (
                    <div
                      style={{
                        height: '2px',
                        backgroundColor: '#1E1EFF',
                        width: '100%',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        borderRadius: 4,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
         <div>
              <IconButton
          onClick={scrollRight}
          size="small"
          sx={{
            color: 'black',
            padding:"0px",
            height: 50,
            width: 50
          }}
        >
          <ChevronRight />
        </IconButton>
          </div>
      </div>
        <div className="sub-tab-content mt-3  ">
            <Outlet />
          </div>
      </div>
    </div>
  );
};

export default StudentInfo;