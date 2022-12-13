import styled from 'styled-components'

export const CompletePostContainer = styled.div`
  width: min(54rem, 80%);
  margin: 0 auto;
  margin-top: -3rem;

  & > header {
    background-color: ${(props) => props.theme['slate-700']};
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

    & > div:first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.25rem;

      & > a:link,
      & > a:visited {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1.6;
        color: ${(props) => props.theme.blue};

        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      & > a:hover,
      & > a:active {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }

    & > h1 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.3;
      margin-bottom: 0.5rem;
    }

    & > div:last-child {
      display: flex;
      align-items: center;
      gap: 2rem;

      & > p {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        line-height: 1.6;
        color: ${(props) => props.theme['slate-300']};

        & > svg {
          color: ${(props) => props.theme['slate-400']};
        }
      }
    }
  }
`
export const CompletePostContent = styled.div`
  padding: 2.5rem 2rem;
  text-align: justify;

  .react-markdown {
    white-space: pre-wrap;
    line-height: 1.6;
    hyphens: auto;

    & > img {
      max-width: '100%';
    }

    & > ul {
      list-style-position: inside;
    }

    & > pre {
      word-wrap: break-word;
      padding: 1rem;
      background-color: ${(props) => props.theme['slate-500']};
      border-radius: 6px;
    }
  }
`
