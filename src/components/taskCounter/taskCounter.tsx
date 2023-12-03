import { Avatar, Box, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';

export const TaskCounter: FC = (): ReactElement => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: 'warning.light',
          }}
        >
          <Typography color="#ffffff" variant="h4">
            10
          </Typography>
        </Avatar>
        <Typography
          color="#ffffff"
          variant="h5"
          fontWeight="bold"
          fontSize="20px"
        >
          Subtitle
        </Typography>
      </Box>
    </>
  );
};
