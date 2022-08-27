export const reducer = (state, action) => {
  switch (action.type) {
    case 'inicio':
      return {
        ...state,
        inicio: true,
        projeto: false,
        sobre: false,
        suporte: false,
      };
    case 'projetos':
      return {
        ...state,
        inicio: false,
        projeto: true,
        sobre: false,
        suporte: false,
      };
    case 'sobre':
      return {
        ...state,
        inicio: false,
        projeto: false,
        sobre: true,
        suporte: false,
      };
    case 'suporte':
      return {
        ...state,
        inicio: false,
        projeto: false,
        sobre: false,
        suporte: true,
      };
  }
  return state;
};
