import React, { ReactElement } from 'react';

import { Box, LinearProgress, LinearProgressProps, Typography } from '@mui/material';

interface ProgressBarProps extends LinearProgressProps {
  progressLabel?: boolean;
  primaryColor?: string;
  secondaryColor?: string;
  width?: string;
  borderRadius?: string;
  height?: string;
  progressStep?: number;
  onComplete?: () => void;
  interval?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = (props): ReactElement => {
  const {
    progressLabel = true,
    primaryColor = '#5ACFB3',
    secondaryColor = '#E0E5FE',
    width = '100%',
    borderRadius = '32px',
    height = '20px',
    progressStep = 1,
    onComplete = null,
    interval = 100,
    ...rest
  } = props;

  const [progress, setProgress] = React.useState(0);
  const [complete, setComplete] = React.useState(false);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setComplete(true);
          return 100;
        }
        return oldProgress + progressStep;
      });
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, []);

  React.useEffect(() => {
    if (progress === 100) {
      onComplete && onComplete();
    }
  }, [complete]);

  return (
    <Box sx={{ width: width }}>
      <>
        {progressLabel ? (
          <Typography
            sx={{
              mb: '8px',
              color: '#000',
              textAlign: 'center',
              fontSize: '18px',
              fontWeight: 800,
              lineHeight: 'normal'
            }}>
            {progress}%
          </Typography>
        ) : null}
      </>
      <LinearProgress
        sx={{
          height: height,
          background: secondaryColor,
          borderRadius: borderRadius,
          '> span': {
            background: primaryColor
          }
        }}
        variant="determinate"
        value={progress}
        {...rest}
      />
    </Box>
  );
};
export default ProgressBar;
