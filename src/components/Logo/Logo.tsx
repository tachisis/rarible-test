import { Link } from 'react-router-dom';
import LogoIcon from '../../assets/images/Logo.svg';

export const Logo = () => {
  return (
    <h1 className="text-sm">
      <Link to="/" className="opacity-100">
        <img src={LogoIcon} alt="Rarible" className="w-[94px] sm:w-[102px]" />
      </Link>
    </h1>
  );
};
