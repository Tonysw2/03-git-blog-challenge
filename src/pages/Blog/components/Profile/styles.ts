import styled from 'styled-components'

export const ProfileContainer = styled.div`
  margin: 0 auto;
  margin-top: -5rem;
  margin-bottom: 4.5rem;
  padding: 2.5rem 2rem;
  max-width: 54rem;
  background-color: ${(props) => props.theme['slate-700']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Avatar = styled.div`
  img {
    width: 148px;
    border-radius: 8px;
  }
`

export const ProfileInformationContainer = styled.div`
  width: 100%;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    margin-bottom: 0.5rem;

    & > p {
      font-weight: 700;
      font-size: 24px;
      line-height: 1.3;
      color: ${(props) => props.theme['slate-050']};
    }

    & > a:link,
    & > a:visited {
      text-transform: uppercase;
      color: ${(props) => props.theme.blue};
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 1.6;
      text-decoration: none;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      & > svg {
        color: ${(props) => props.theme.blue};
      }
    }

    & > a:hover,
    & > a:active {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }

  & > p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: ${(props) => props.theme['slate-200']};
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    & > p {
      line-height: 1.6;
      color: ${(props) => props.theme['slate-100']};

      display: flex;
      align-items: center;
      gap: 0.5rem;

      & > span {
        display: flex;
        align-items: center;

        & > svg {
          color: ${(props) => props.theme['slate-400']};
        }
      }
    }
  }
`
