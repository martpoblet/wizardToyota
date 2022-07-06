import styled from "styled-components";

export const RadioImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 30px;
  @media (max-width: 850px) {
    flex-wrap: wrap;
  }
`;

export const CheckboxOption = styled.label`
  min-height: 200px;
  height: 200px;
  width: 100%;
  padding: 4px;
  border-radius: 4px;
  position: relative;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  @media (max-width: 850px) {
    min-height: 120px;
    flex: 0 0 45%;
  }
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }

  input {
    width: 1px;
    height: 1px;
    opacity: 0;
    visibility: hidden;
    &:checked + div {
      animation: 0.25s ease 0s 2 normal none running selected;
      box-shadow: #eb0a1e 0px 0px 0px 2px inset;
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
  img {
    max-width: 100%;
    max-height: 80%;
    margin: 0 auto;
    margin-top: 15px;
  }
  span {
    margin: 4px 5px 20px;
    margin-top: auto;
    text-align: center;
    color: #fff;
    font-size: 18px;
  }
  @keyframes selected {
    50% {
      opacity: 0.3;
    }
  }
`;
