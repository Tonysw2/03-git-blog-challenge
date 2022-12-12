import styled from 'styled-components'

export const CardWrap = styled.li`
  max-width: 26rem;
  min-height: 16.25rem;
  padding: 2rem;
  background-color: ${(props) => props.theme['slate-600']};
  border-radius: 10px;

  &:hover {
    outline: 2px solid ${(props) => props.theme['slate-300']};
    transition: all 0.2s;
    cursor: pointer;
  }

  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    margin-bottom: 1.5rem;

    & > h1 {
      width: min(25rem, 80%);
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.6;
    }

    & > p {
      width: min(12rem, 20%);
      display: block;
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme['slate-300']};
    }
  }

  & > p {
    --max-lines: 4;

    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--max-lines);
  }
`
