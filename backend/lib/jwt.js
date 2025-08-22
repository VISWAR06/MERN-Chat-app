import jwt from 'jsonwebtoken';

const generatetoken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: '7d',
  });
};

export default generatetoken;
