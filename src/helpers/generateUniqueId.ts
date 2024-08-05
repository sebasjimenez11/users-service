import cuid from 'cuid';

const generateUniqueId = () :string => {
  return cuid();
}

export default generateUniqueId;