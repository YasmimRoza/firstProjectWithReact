import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';

interface IBarraDeFerramentasProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextDeBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
	children?: React.ReactNode
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
  aoMudarTextDeBusca,
  mostrarInputBusca = false,
  textoDaBusca = '',
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo,
  children
}) => {
  const theme = useTheme();

  return(
    <Paper gap={1} height={theme.spacing(5)} marginX={1} padding={1} paddingX={2} display="flex" alignItems="center" component={Box}>
      {mostrarInputBusca && (<TextField
        size="small"
        value={textoDaBusca}
        onChange={(e) => aoMudarTextDeBusca?.(e.target.value)}
        placeholder='Pesquisar...'
      />)}
      <Box flex={1} display="flex" justifyContent="end">
        { mostrarBotaoNovo && (
          <Button
            color='primary'
            disableElevation
            variant='contained'
            onChange={aoClicarEmNovo}
            endIcon={<Icon>add</Icon>}
          >{textoBotaoNovo}</Button>
        )}
      </Box>
    </Paper>
  );
};