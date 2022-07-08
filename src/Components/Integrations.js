import Box from '@mui/material/Box';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './Onboarding/listItems';
import { TestComponent } from 'simplr-storybook-library';
import Chart from './Onboarding/Chart';
import Deposits from './Onboarding/Deposits';
import Orders from './Onboarding/Orders';
import { DashboardContent } from './Onboarding/Dashboard';

export function Integrations(params) {
  return (
    <DashboardContent title={'Integrations'}>
      <Grid
        component='main'
        sx={{
          height: '100vh',
        }}
      >
        ss
      </Grid>
    </DashboardContent>
  );
}
