import jwt from 'jsonwebtoken';

const generatetoken = (id) => {
  return jwt.sign({ id }, process.env.SEC, {
    expiresIn: '7d',
  });
};

export default generatetoken;
