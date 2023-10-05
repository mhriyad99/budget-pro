import {Box, Card, Paper, Typography} from '@mui/material';
import FloodRoundedIcon from '@mui/icons-material/FloodRounded';
import {FC} from 'react';
interface Props {
  title: string;
  amount: string;
  icons?: any;
  subTitle?: string;
  icons2: any;
}
const CustomHorizontalCard: FC<Props> = ({
  title,
  amount,
  icons,
  icons2,
  subTitle,
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        background: '#fff',
        flexDirection: 'row',
        borderRadius: '20px',
        border: '1px solid #F0EEEF',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Box
        sx={{
          height: '50px',
          width: '50px',
          backgroundColor: '#EBE9ED',
          m: '7px',
          borderRadius: '14px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icons}
      </Box>
      <Box sx={{minWidth: '180px'}}>
        <Typography sx={{fontSize: '17px', fontWeight: '700'}}>
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            mt: '1px',
            fontWeight: '700',
            opacity: '0.6',
          }}>
          {subTitle}
        </Typography>
      </Box>
      <Box
        sx={{
          height: '36px',
          width: '36px',
          m: '0 13px',
          borderRadius: '10px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icons2}
      </Box>
      <Box
        sx={{
          height: '36px',
          width: '36px',
          m: '0 13px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '700',
        }}>
        {amount}
      </Box>
    </Card>
  );
};
export default CustomHorizontalCard;
