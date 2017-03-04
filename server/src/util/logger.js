import winston from 'winston';

export const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
      level: do {
        if(process.env.NODE_ENV === 'testing') {
          'error';
        } else if(process.env.NODE_ENV === 'production') {
          'info';
        } else {
          'debug';
        }
      },
      colorize: true,
      timestamp: true,
      prettyPrint: true,
      label: 'experts-server',
    }),
  ],
});

// create stream for morgan
logger.stream = {
  write: message => logger.info(message),
};
