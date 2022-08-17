import styled from 'styled-components';

export const Container = styled.div`
  header {
    position: relative;

    width: 100%;
    height: 200px;
    background: ${({ theme }) => theme.colors.gray[700]};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
      position: absolute;

      width: 100%;
      max-width: 736px;

      margin: 0 auto;

      top: calc(200px - 26px); // 200px from header and 26px from input/2

      display: flex;
      align-items: center;
      justify-content: space-between;

      input {
        background: ${({ theme }) => theme.colors.gray[500]};

        padding: 1rem;

        border: none;
        border-radius: 8px;

        width: 100%;

        &::placeholder {
          color: ${({ theme }) => theme.colors.gray[300]};
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 1rem;

        border: none;
        border-radius: 8px;

        margin-left: 0.5rem;

        background: ${({ theme }) => theme.colors.blueDark};

        cursor: pointer;

        font-weight: 700;

        transition: background-color 0.2s;

        &:hover {
          background: ${({ theme }) => theme.colors.blue};
        }

        svg {
          margin-left: 0.5rem;
        }
      }
    }
  }

  .todos {
    width: 100%;
    max-width: 736px;

    margin: 4.5rem auto 0;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 1.25rem;

      p {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      p:first-child {
        color: ${({ theme }) => theme.colors.blue};
        font-weight: 700;

        span {
          color: ${({ theme }) => theme.colors.gray[100]};
          font-size: 0.75rem;

          background: ${({ theme }) => theme.colors.gray[400]};

          margin-left: 0.5rem;
          padding: 0.25rem 0.5rem;

          border-radius: 10px;
        }
      }

      p:last-child {
        color: ${({ theme }) => theme.colors.purple};
        font-weight: 700;

        span {
          color: ${({ theme }) => theme.colors.gray[100]};
          font-size: 0.75rem;

          background: ${({ theme }) => theme.colors.gray[400]};

          margin-left: 0.5rem;
          padding: 0.25rem 0.5rem;

          border-radius: 10px;
        }
      }
    }

    .todos-list {
      > div {
        margin-bottom: 1rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .no-tasks-wrapper {
      padding-top: 4rem;

      color: ${({ theme }) => theme.colors.gray[300]};
      text-align: center;

      border-top: 1px solid ${({ theme }) => theme.colors.gray[400]};

      h3 {
        font-size: 1rem;
      }

      p {
        margin-top: 0.25rem;
      }
    }
  }
`;
