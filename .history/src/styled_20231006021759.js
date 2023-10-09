import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  background-image: url("https://cn.bing.com/images/search?view=detailV2&ccid=aJ3yjpZG&id=29A834F287738FBE4C3A5637AE74BFF02364B4A3&thid=OIP.aJ3yjpZGDDO_RVGR27CwsAHaHg&mediaurl=https%3a%2f%2fimg.mianfeiwendang.com%2fpic%2f19920aaf71ff84275525d125%2f1-828-png_6_0_0_23_9_850_851_892.979_1262.879-816-0-0-816.jpg&exph=828&expw=816&q=%e5%9d%90%e6%a0%87%e8%bd%b4&simid=608039383950320353&FORM=IRPRST&ck=9809F38136DA0DB8A9866A6176FCE724&selectedIndex=3&qpvt=%e5%9d%90%e6%a0%87%e8%bd%b4&ajaxhist=0&ajaxserp=0");
`;

export const Toolbar = styled.div`
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const Button = styled.button`
  display: block;
  margin-bottom: 10px;
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;
