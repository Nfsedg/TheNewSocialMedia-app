import PropTypes from 'prop-types';
import style from './style.module.css';

export default function WarningMessage({ children }) {
  return (
    <div className={style.warningMessageWrapper}>
      <p>{children}</p>
    </div>
  );
}

WarningMessage.propTypes = {
  children: PropTypes.string.isRequired,
};
