import React from "react";
import styled from "styled-components";
import "../App.css";

const Container = styled.div`
  display: flex;
  padding: 0 50px;
  background-color: #e4edf4;
  height: 40vh;
`;
const Left = styled.div`
  flex: 2;
`;
const Logo = styled.h2`
  color: #3b50a0;
`;
const Email = styled.h5`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Phone = styled.h5`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Web = styled.h5`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 2;
`;

const LinkLists = styled.ul`
  margin-left: 0;
  padding-left: 0;
`;
const Link = styled.li`
  list-style: none;
  width: fit-content;
  margin-top: 5px;
  color: #757da2;
  cursor: pointer;
  &:hover {
    color: #eb5757;
  }
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>শিখবে নাকি ?</Logo>
        <Phone>
          <svg
            width="24"
            height="25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer"
          >
            <path
              d="M21.809 17.149c.041.275-.056.514-.291.718l-2.765 2.37c-.125.12-.288.221-.488.305-.201.084-.399.138-.593.162a2.32 2.32 0 00-.125.009c-.069.006-.159.009-.27.009-.263 0-.69-.04-1.278-.117-.59-.078-1.31-.27-2.162-.575-.853-.305-1.82-.763-2.9-1.373-1.081-.61-2.231-1.448-3.45-2.514-.971-.826-1.775-1.616-2.412-2.37-.638-.754-1.15-1.451-1.539-2.091-.388-.64-.679-1.221-.873-1.742a8.227 8.227 0 01-.395-1.347c-.069-.377-.097-.673-.083-.888.014-.216.021-.336.021-.36a1.58 1.58 0 01.187-.511c.097-.174.215-.314.353-.422l2.765-2.388a.989.989 0 01.665-.252c.18 0 .34.045.479.135.138.09.256.2.353.332l2.224 3.645c.125.192.16.401.104.629a1.081 1.081 0 01-.353.574l-1.019.88a.29.29 0 00-.073.117.39.39 0 00-.03.134c.055.252.18.539.373.862.167.287.423.637.77 1.05.346.413.838.89 1.476 1.428.623.55 1.178.978 1.662 1.284.486.305.891.53 1.217.673.325.143.575.23.748.26l.26.045a.564.564 0 00.135-.027.365.365 0 00.135-.063l1.185-1.041c.25-.192.54-.287.873-.287.236 0 .423.036.561.107h.021l4.012 2.047c.291.156.464.353.52.593z"
              fill="#454C7E"
              opacity="0.7"
            ></path>
          </svg>
          <div style={{ marginLeft: " 15px", color: "#757da2" }}>
            +880 1760709684
          </div>
        </Phone>
        <Email>
          <svg
            width="24"
            height="25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer"
          >
            <path
              filprule="evenodd"
              clipRule="evenodd"
              d="M6.313 11.574c-1.25-.77-1.998-1.233-2.247-1.389a5.199 5.199 0 01-1.282-1.126c-.401-.477-.602-.921-.602-1.33 0-.507.151-.93.454-1.268.304-.337.736-.506 1.299-.506h16.13c.474 0 .886.152 1.232.458.348.305.521.672.521 1.101 0 .514-.179 1.004-.537 1.472a4.952 4.952 0 01-1.337 1.199 9737.1 9737.1 0 00-5.128 3.168c-.073.045-.228.144-.466.297-.237.153-.434.276-.591.37-.157.095-.347.2-.57.317a3.517 3.517 0 01-.63.263c-.197.059-.38.088-.548.088h-.022a1.93 1.93 0 01-.548-.088 3.513 3.513 0 01-.63-.263 11.62 11.62 0 01-.57-.316 22.993 22.993 0 01-.592-.37 52.91 52.91 0 00-.465-.298 555.188 555.188 0 00-2.871-1.779zm8.952 3.017c1.242-.8 3.061-1.921 5.457-3.364a5.892 5.892 0 001.096-.848v7.74c0 .429-.171.796-.515 1.101a1.798 1.798 0 01-1.238.459H3.935c-.482 0-.895-.153-1.238-.459-.344-.305-.515-.672-.515-1.101v-7.74c.321.319.69.602 1.107.848 2.644 1.599 4.46 2.72 5.446 3.364.416.272.754.485 1.013.638.26.153.605.309 1.036.468.43.159.832.239 1.205.239h.022c.373 0 .774-.08 1.205-.24.431-.159.776-.314 1.036-.467.26-.153.597-.366 1.013-.638z"
              fill="#454C7E"
              opacity="0.7"
            ></path>
          </svg>
          <div style={{ marginLeft: " 15px", color: "#757da2" }}>
            {" "}
            teamshikhbenaki@gmail.com
          </div>
        </Email>
        <Web>
          <svg
            width="20"
            height="21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer"
          >
            <g opacity="0.7" fill="#454C7E">
              <path d="M10.297 18.802c1.274-.18 2.392-1.511 3.095-3.476a15.13 15.13 0 00-3.095-.364v3.84zM12.334 18.49c.076-.021.15-.043.225-.067.063-.02.125-.042.187-.064.073-.025.146-.051.219-.079l.185-.074.212-.089a8.571 8.571 0 001.655-.969l.18-.141.159-.128c.06-.05.116-.1.174-.152.05-.045.102-.09.151-.136.057-.053.113-.108.168-.162.048-.047.096-.094.143-.143.01-.009.017-.019.026-.028a10.014 10.014 0 00-2.04-.785 7.394 7.394 0 01-1.905 3.091l.073-.017.188-.056zM18.333 10.784h-3.571a15.449 15.449 0 01-.602 4.121c.786.21 1.545.512 2.26.9a8.323 8.323 0 001.913-5.021zM10.297 10.187h3.868a14.9 14.9 0 00-.586-3.975 15.69 15.69 0 01-3.282.391v3.584zM10.297 2.167v3.841a15.141 15.141 0 003.095-.364c-.703-1.965-1.82-3.295-3.095-3.477zM10.297 14.367c1.104.015 2.205.146 3.282.392.374-1.293.571-2.63.586-3.975h-3.868v3.583zM16.42 5.166c-.715.388-1.474.69-2.26.9.386 1.34.588 2.726.601 4.121h3.572a8.325 8.325 0 00-1.912-5.021zM16.02 4.715l-.026-.028c-.047-.049-.096-.096-.144-.143-.055-.054-.11-.11-.168-.162-.049-.046-.1-.09-.15-.136-.058-.05-.116-.103-.175-.152l-.157-.127a6.572 6.572 0 00-.345-.261 7.128 7.128 0 00-.726-.465 8.077 8.077 0 00-.2-.112l-.179-.092a6.608 6.608 0 00-.39-.183c-.07-.031-.142-.06-.213-.09a8.568 8.568 0 00-.59-.215 7.308 7.308 0 00-.226-.069l-.186-.053-.073-.018a7.392 7.392 0 011.904 3.092 10 10 0 002.043-.786zM1.666 10.187h3.572c.013-1.395.216-2.78.601-4.121a10.348 10.348 0 01-2.26-.9 8.323 8.323 0 00-1.913 5.021zM9.702 18.802v-3.84a15.137 15.137 0 00-3.095.364c.703 1.965 1.82 3.295 3.095 3.476zM9.702 10.784H5.833c.016 1.345.213 2.682.587 3.975a15.679 15.679 0 013.282-.392v-3.583zM9.702 2.167C8.428 2.35 7.31 3.68 6.607 5.644a15.12 15.12 0 003.095.364v-3.84zM9.702 6.603a15.69 15.69 0 01-3.282-.391 14.897 14.897 0 00-.587 3.975h3.87V6.603zM7.926 2.41c-.024.005-.048.01-.072.017a9.765 9.765 0 00-.412.121c-.064.02-.126.043-.189.064l-.218.079a8.496 8.496 0 00-.185.074l-.212.09a8.633 8.633 0 00-.94.488c-.066.039-.13.08-.193.12a7.815 7.815 0 00-.522.36c-.061.046-.12.094-.18.142-.054.042-.107.084-.159.128-.06.049-.116.1-.173.15-.051.046-.103.09-.152.137-.057.053-.112.108-.167.162l-.144.143c-.009.01-.017.02-.026.028.65.336 1.334.6 2.04.786a7.39 7.39 0 011.904-3.09zM4.152 16.427c.055.054.11.11.167.162l.151.136.175.152.157.127c.06.048.119.096.182.142l.163.12a8.588 8.588 0 00.357.242 7.283 7.283 0 00.569.334l.179.092a6.57 6.57 0 00.39.184 8.165 8.165 0 00.616.242c.062.02.124.043.187.063.074.024.149.046.225.068.062.018.124.037.187.053.024.007.048.012.073.018a7.394 7.394 0 01-1.904-3.091c-.707.186-1.392.45-2.041.786l.025.027c.045.049.093.095.142.143zM3.578 15.805c.716-.388 1.475-.69 2.261-.9a15.455 15.455 0 01-.601-4.121H1.666a8.325 8.325 0 001.912 5.02z"></path>
            </g>
          </svg>
          <div style={{ marginLeft: " 15px", color: "#757da2" }}>
            www.shikhbenaki.tech
          </div>
        </Web>
        <div>
          <svg
            width="128"
            height="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M124 39.999H4c-2.2 0-4-1.8-4-4v-32c0-2.2 1.8-4 4-4h120c2.2 0 4 1.8 4 4v32c0 2.2-1.8 4-4 4z"
              fill="#000"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.8 19.599v-10.5c0-.6.5-1.1 1-1.1s.7.1 1 .3l19.3 10.6c.4.2.6.5.6.8 0 .3-.2.6-.6.8l-19.3 10.6c-.2.1-.5.3-1 .3s-1-.5-1-1.1v-10.7z"
              fill="url(#playstore-black_svg__paint0_linear_25:2586)"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.302 19.699l-11.7-11.7h.2c.5 0 .7.1 1 .3l14.2 7.8-3.7 3.6z"
              fill="url(#playstore-black_svg__paint1_linear_25:2586)"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.9 23.199l-3.6-3.6 3.7-3.7 5.1 2.8c.4.2.6.5.6.8 0 .3-.2.6-.6.8l-5.2 2.9z"
              fill="url(#playstore-black_svg__paint2_linear_25:2586)"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.7 31.2l11.6-11.6 3.6 3.6-14.1 7.7c-.3.2-.5.3-1.1.3.1 0 .1 0 0 0z"
              fill="url(#playstore-black_svg__paint3_linear_25:2586)"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M71.098 33.899c-.5-.4-.9-1.1-1.1-1.5l1.6-.7c.1.2.3.5.5.8.4.4 1 .8 1.6.8.6 0 1.3-.3 1.7-.8.3-.5.5-1 .5-1.7v-.6c-1.2 1.5-3.7 1.3-5.1-.3-1.5-1.6-1.5-4.3 0-5.9 1.5-1.5 3.7-1.7 5-.3v-.7h1.7v7.5c0 1.9-.7 3-1.6 3.7-.6.5-1.5.7-2.3.7-.9-.1-1.8-.4-2.5-1zm41.9.4l1.7-4-3-6.9h1.7l2.1 4.9 2.1-4.9h1.7l-4.6 10.9h-1.7zm-8.1-3.8c-.5-.5-.7-1.2-.7-1.9 0-.6.2-1.2.6-1.6.7-.7 1.7-1 2.8-1 .7 0 1.3.1 1.8.4 0-1.2-1-1.7-1.8-1.7-.7 0-1.4.4-1.7 1.1l-1.5-.6c.3-.7 1.1-2 3.1-2 1 0 2 .3 2.6 1 .6.7.8 1.5.8 2.6v4.2h-1.7v-.7c-.2.3-.6.5-.9.7-.4.2-.9.3-1.4.3-.6-.1-1.5-.3-2-.8zm-53.3-3.6c0-2 1.5-4.2 4.2-4.2 2.6 0 4.2 2.2 4.2 4.2s-1.5 4.2-4.2 4.2-4.2-2.2-4.2-4.2zm9 0c0-2 1.5-4.2 4.2-4.2 2.6 0 4.2 2.2 4.2 4.2s-1.5 4.2-4.2 4.2c-2.6 0-4.2-2.2-4.2-4.2zm-20.3 2.2c-2.5-2.5-2.4-6.6.1-9.2 1.3-1.3 2.9-1.9 4.6-1.9 1.6 0 3.2.6 4.4 1.8l-1.2 1.3c-1.8-1.8-4.7-1.7-6.4.1-1.8 1.9-1.8 4.8 0 6.7 1.8 1.9 4.8 2 6.6.1.6-.6.8-1.4.9-2.2h-4.2v-1.8h5.9c.1.4.1.9.1 1.4 0 1.5-.6 3-1.6 4-1.1 1.1-2.7 1.7-4.3 1.7-1.8-.1-3.6-.7-4.9-2zm42.3.7c-1.5-1.6-1.5-4.3 0-6 1.5-1.6 4-1.6 5.4 0 .5.5.8 1.2 1.1 1.9l-5.5 2.3c.3.7 1 1.3 2 1.3.9 0 1.5-.3 2.1-1.2l1.5 1c-.2.2-.4.4-.5.6-1.7 1.7-4.6 1.7-6.1.1zm10.4 1.2v-11.1h3.6c2.1 0 3.8 1.5 3.8 3.3 0 1.8-1.5 3.3-3.4 3.3h-2.2v4.4h-1.8v.1zm8.4 0v-11.1h1.7v11.1h-1.7zm-22.6-.2v-12.4h1.8v12.4h-1.8zm30.5-3.1c-.4-.3-1-.4-1.6-.4-1.2 0-1.9.6-1.9 1.3 0 .7.7 1.1 1.4 1.1 1 0 2.1-.8 2.1-2zm-51.2-.8c0-1.2-.8-2.5-2.3-2.5-1.5 0-2.3 1.3-2.3 2.5s.8 2.5 2.3 2.5c1.4 0 2.3-1.3 2.3-2.5zm9 0c0-1.2-.8-2.5-2.3-2.5-1.5 0-2.3 1.3-2.3 2.5s.8 2.5 2.3 2.5c1.5 0 2.3-1.3 2.3-2.5zm8.9.7c0-.1 0-.2.1-.3v-.4-.5c0-.1-.1-.3-.1-.4-.3-1-1.2-1.7-2.1-1.7-1.2 0-2.2 1.2-2.2 2.5 0 1.4 1 2.5 2.3 2.5.8.1 1.6-.6 2-1.7zm7.3-.9l3.7-1.6c-.4-.7-1-.9-1.5-.9-1.5.1-2.4 1.7-2.2 2.5zm15.3-3.4c0-1-.8-1.7-1.9-1.7h-2v3.5h2.1c1 0 1.8-.8 1.8-1.8z"
              fill="#fff"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M114.3 32.3h-.1v-.1h.1-.1v.1h.1zM114.5 32.3c0-.1 0-.1 0 0-.1-.1-.1-.1 0 0-.1 0-.1 0 0 0zm0-.1c0 .1 0 .1 0 0 0 .1-.1.1 0 0-.1 0 0 0 0 0zM114.6 32.2h-.1.1v.1-.1z"
              fill="#fff"
            ></path>
            <path
              d="M38.898 10.1c0-1.8 1.3-2.9 2.9-2.9 1.1 0 1.8.5 2.3 1.2l-.8.5c-.3-.4-.8-.7-1.5-.7-1.1 0-1.9.8-1.9 2s.8 2 1.9 2c.6 0 1.1-.3 1.3-.5v-.9h-1.6v-.9h2.7V12c-.5.6-1.3 1-2.3 1-1.7 0-3-1.2-3-2.9zM45.398 12.899v-5.6h3.8v.9h-2.9v1.4h2.8v.9h-2.8v1.6h2.9v.9l-3.8-.1zM52 12.899v-4.7h-1.7v-.9h4.4v.9H53v4.7h-1zM58.102 12.899v-5.6h1v5.6h-1zM61.802 12.899v-4.7h-1.7v-.9h4.4v.9h-1.7v4.7h-1zM67.7 10.1c0-1.7 1.2-2.9 2.9-2.9s2.9 1.2 2.9 2.9-1.2 2.9-2.9 2.9-2.9-1.3-2.9-2.9zm4.7 0c0-1.2-.7-2-1.9-2-1.1 0-1.9.9-1.9 2 0 1.2.7 2 1.9 2s1.9-.9 1.9-2zM78.502 12.899l-2.9-4v4h-1v-5.6h1l2.9 3.9v-3.9h1v5.6h-1z"
              fill="#fff"
            ></path>
            <defs>
              <linearGradient
                id="playstore-black_svg__paint0_linear_25:2586"
                x1="16.267"
                y1="6.573"
                x2="21.866"
                y2="29.564"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#006884"></stop>
                <stop offset="1" stop-color="#8AD1D0"></stop>
              </linearGradient>
              <linearGradient
                id="playstore-black_svg__paint1_linear_25:2586"
                x1="9.442"
                y1="9.843"
                x2="24.698"
                y2="18.09"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#24BBB6"></stop>
                <stop offset="1" stopColor="#DBE692"></stop>
              </linearGradient>
              <linearGradient
                id="playstore-black_svg__paint2_linear_25:2586"
                x1="26.994"
                y1="23.619"
                x2="26.994"
                y2="15.671"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FCC072"></stop>
                <stop offset="1" stopColor="#F58A5B"></stop>
              </linearGradient>
              <linearGradient
                id="playstore-black_svg__paint3_linear_25:2586"
                x1="12.395"
                y1="33.268"
                x2="24.446"
                y2="21.003"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#712B8F"></stop>
                <stop offset="1" stopColor="#EA1D27"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </Left>
      <Center>
        <Logo>প্রয়োজনীয় লিংকসমূহ</Logo>
        <LinkLists>
          <Link>অ্যাপ ডাউনলোড</Link>
          <Link>কোর্সসমুহ</Link>
          <Link>ই-বুকস</Link>
          <Link>ব্লগস</Link>
          <Link>প্রবলেম-সলবিং</Link>
        </LinkLists>
      </Center>
      <Right>
        <Logo style={{ fontSize: "15px" }}>
          আমাদের সাথে কানেক্ট থাকতে আমাদের সোস্যাল মিডিয়াগুলোতে ফলো করুন
        </Logo>
        <div class="grid grid-cols-5 social-icons">
          <a>
            <svg
              width="54"
              height="50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="-0.001"
                width="54"
                height="50"
                rx="10"
                fill="#fff"
              ></rect>
              <path
                d="M23.905 26.675h-3.222c-.52 0-.683-.195-.683-.684v-3.937c0-.52.195-.683.683-.683h3.222v-2.864c0-1.302.228-2.538.878-3.677.684-1.171 1.66-1.952 2.897-2.408A7.239 7.239 0 0130.185 12h3.19c.455 0 .65.195.65.65v3.71c0 .456-.195.651-.65.651-.88 0-1.758 0-2.637.033-.878 0-1.334.423-1.334 1.334-.032.976 0 1.92 0 2.929h3.775c.52 0 .716.195.716.716v3.937c0 .52-.163.683-.716.683h-3.775v10.609c0 .553-.163.748-.748.748h-4.068c-.488 0-.683-.195-.683-.683V26.675z"
                fill="#1777F2"
              ></path>
            </svg>
          </a>
          <a>
            <svg
              width="54"
              height="50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="-0.001"
                width="54"
                height="50"
                rx="10"
                fill="#fff"
              ></rect>
              <path fill="#fff" d="M21 18.999h12v13H21z"></path>
              <g filter="url(#youtube_svg__filter0_d_25:2476)">
                <path
                  d="M40.423 18.972c-.323-1.163-1.268-2.079-2.468-2.392C35.765 16 27 16 27 16s-8.765 0-10.956.559c-1.176.313-2.145 1.252-2.467 2.414C13 21.095 13 25.5 13 25.5s0 4.426.577 6.527c.323 1.162 1.268 2.079 2.468 2.392 2.214.581 10.955.581 10.955.581s8.764 0 10.955-.559c1.2-.313 2.145-1.23 2.468-2.392.577-2.123.577-6.527.577-6.527s.023-4.426-.577-6.549zM24.21 29.567v-8.136l7.288 4.068-7.288 4.068z"
                  fill="#FE0000"
                ></path>
              </g>
              <defs>
                <filter
                  id="youtube_svg__filter0_d_25:2476"
                  x="11"
                  y="13.999"
                  width="32"
                  height="23"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_25:2476"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_25:2476"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </a>
          <a>
            <svg
              width="54"
              height="50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="-0.001"
                width="54"
                height="50"
                rx="10"
                fill="#fff"
              ></rect>
              <path
                d="M26.499 30.647a5.147 5.147 0 100-10.294 5.147 5.147 0 000 10.294z"
                fill="url(#instagram_svg__paint0_linear_25:2481)"
              ></path>
              <path
                d="M32.719 13.064c-3.1-.087-9.303-.087-12.402 0-1.613.044-3.441.451-4.59 1.695-1.194 1.293-1.646 2.855-1.691 4.603-.08 3.068 0 12.274 0 12.274.052 1.747.497 3.31 1.69 4.603 1.15 1.244 2.978 1.65 4.591 1.695 3.1.087 9.302.087 12.402 0 1.612-.044 3.44-.451 4.59-1.695 1.194-1.293 1.645-2.855 1.691-4.603V19.362c-.046-1.747-.497-3.31-1.691-4.603-1.15-1.244-2.978-1.65-4.59-1.695zm-6.202 20.605a7.985 7.985 0 01-4.478-1.377 8.148 8.148 0 01-2.969-3.667 8.273 8.273 0 01-.459-4.72 8.205 8.205 0 012.206-4.183 8.028 8.028 0 014.128-2.236 7.961 7.961 0 014.657.465 8.085 8.085 0 013.618 3.01 8.248 8.248 0 011.358 4.538c0 2.167-.849 4.245-2.36 5.777a8.007 8.007 0 01-5.7 2.393zm8.096-14.653c-.319 0-.63-.096-.896-.276a1.63 1.63 0 01-.593-.733 1.655 1.655 0 01.35-1.78 1.593 1.593 0 011.757-.354c.294.123.546.332.723.6a1.65 1.65 0 01-.2 2.064 1.611 1.611 0 01-1.141.479z"
                fill="url(#instagram_svg__paint1_linear_25:2481)"
              ></path>
              <defs>
                <linearGradient
                  id="instagram_svg__paint0_linear_25:2481"
                  x1="22.043"
                  y1="29.977"
                  x2="31.581"
                  y2="21.72"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FD5"></stop>
                  <stop offset="0.5" stop-color="#FF543E"></stop>
                  <stop offset="1" stop-color="#C837AB"></stop>
                </linearGradient>
                <linearGradient
                  id="instagram_svg__paint1_linear_25:2481"
                  x1="14"
                  y1="37.999"
                  x2="38.95"
                  y2="16.446"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FD5"></stop>
                  <stop offset="0.5" stop-color="#FF543E"></stop>
                  <stop offset="1" stop-color="#C837AB"></stop>
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a>
            <svg
              width="54"
              height="50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="-0.001"
                width="54"
                height="50"
                rx="10"
                fill="#fff"
              ></rect>
              <path
                d="M14.853 36.998h3.416a.853.853 0 00.853-.853V21.216a.853.853 0 00-.853-.853h-3.416a.853.853 0 00-.853.853v14.93c0 .47.382.852.853.852zM14.853 17.738h3.416a.853.853 0 00.853-.853v-3.033a.853.853 0 00-.853-.853h-3.416a.853.853 0 00-.853.853v3.033c0 .471.382.853.853.853zM38.988 22.095c-.48-.631-1.188-1.151-2.124-1.558-.935-.407-1.968-.61-3.098-.61-2.295 0-4.238.875-5.832 2.626-.317.349-.548.273-.548-.199v-1.137a.853.853 0 00-.853-.853h-3.051a.853.853 0 00-.853.853v14.929c0 .47.382.853.853.853h3.416a.853.853 0 00.853-.853v-5.192c0-2.163.13-3.646.391-4.448a3.673 3.673 0 011.45-1.931c.704-.487 1.5-.73 2.387-.73.693 0 1.285.17 1.778.51.492.341.847.818 1.066 1.431.219.614.328 1.966.328 4.056v6.304c0 .47.382.853.853.853h3.416a.853.853 0 00.853-.853V27.69c0-1.494-.095-2.643-.283-3.445a5.642 5.642 0 00-1.002-2.15z"
                fill="#2567B3"
              ></path>
            </svg>
          </a>
        </div>
        <LinkLists style={{ display: "flex", fontSize: "12px" }}>
          <Link>Terms &amp; Conditions </Link>
          <Link>|</Link>
          <Link>Refund Policy</Link>
          <Link>|</Link>
          <Link>Privacy Policy</Link>
        </LinkLists>
      </Right>
    </Container>
  );
};

export default Footer;