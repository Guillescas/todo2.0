import styled, { css } from 'styled-components';

import { IContainerProps } from './types';

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.gray[500]};

  padding: 1rem;

  border-radius: 8px;

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    input {
      display: grid;
      place-content: center;

      -webkit-appearance: none;
      appearance: none;
      background-color: transparent;
      margin: 0;
      margin-top: 0.25rem;

      width: 22px;
      height: 20px;
      border: 2px solid ${({ theme }) => theme.colors.blue};
      border-radius: 50%;
      transform: translateY(-1px);

      &::before {
        content: '';
        width: 10px;
        height: 10px;
        transform: scale(0);
        border-radius: 50%;
        transition: 0.1s transform ease-in-out;
        box-shadow: inset 22px 20px ${({ theme }) => theme.colors.blue};
        transform-origin: bottom left;
      }
      &:checked::before {
        transform: scale(1);
      }
    }

    label {
      margin: 0 0.75rem;

      line-height: 140%;

      transition: color 0.2s;

      ${({ isCompleted }) => {
        if (isCompleted) {
          return css`
            text-decoration: line-through;
            color: ${({ theme }) => theme.colors.gray[300]};
          `;
        }
      }}
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;

    padding: 0.5rem;

    border: none;
    border-radius: 8px;

    color: ${({ theme }) => theme.colors.gray[300]};

    cursor: pointer;

    transition: color 0.2s, background-color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.danger};
      background: ${({ theme }) => theme.colors.gray[400]};
    }
  }
`;
