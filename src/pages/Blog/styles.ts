import styled from 'styled-components'

export const BlogContainer = styled.div`
  margin: 0 auto;
  width: min(54rem, 90%);
`

export const SearhcFormContainer = styled.form`
  margin: 0 auto;
  margin-bottom: 2.5rem;
  max-width: 54rem;

  & > label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.6;
    color: ${(props) => props.theme['slate-100']};

    & > span {
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      color: ${(props) => props.theme['slate-300']};
    }
  }

  & > input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme['slate-500']};
    border-radius: 6px;
    background-color: ${(props) => props.theme['slate-900']};
    color: ${(props) => props.theme['slate-200']};
    line-height: 1.6;

    &::placeholder {
      color: ${(props) => props.theme['slate-400']};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const CardContainer = styled.div`
  margin: 0 auto;
  max-width: 54rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
`
