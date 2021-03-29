import styled from "styled-components";

export const HeaderArea = styled.div`
  color: #fff;
  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .headerTitle {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    img {
      border-radius: 15px;
      padding: 5px;
    }
    h1,
    h3 {
      margin: 0;
    }
  }
  nav {
    padding-bottom: 10px;
    display: flex;
    justify-content: space-around;

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    ul {
      display: flex;
      align-items: center;
      height: 40px;
    }
    li {
      margin-left: 20px;
      margin-right: 20px;

      a {
        color: #fff;
        font-size: 14px;
        text-decoration: none;
        &:hover {
          background-color: #999;
          padding: 10px;
          color: #000;
        }
        &.button {
          background-color: #ff8100;
          border-radius: 4px;
          color: #fff;
          padding: 5px 10px;
        }
        &.button:hover {
          background-color: #e57706;
        }
      }
    }
  }
`;
