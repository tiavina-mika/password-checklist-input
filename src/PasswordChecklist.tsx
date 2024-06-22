import { ChangeEvent, InputHTMLAttributes, forwardRef, useState } from 'react';

import VisibilityOff from './icons/VisibilityOff';
import Visibility from './icons/Visibility';
import Check from './icons/Check';
import Close from './icons/Close';
import { validatePasswordChecklist, PasswordCheckListResult } from 'validate-password-checklist';
import { PasswordChecklistProps } from './types';

const PasswordChecklist =  forwardRef<HTMLInputElement, PasswordChecklistProps & InputHTMLAttributes<HTMLInputElement>>(({
  options,
  className,
  hidePasswordIcon,
  showPasswordIcon,
  validationMessages,
  ...rest
}, ref) => {
  const [rules, setRules] = useState<PasswordCheckListResult['validationMessages']>([]);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const result = validatePasswordChecklist(value, validationMessages, options);
    const newErrors = result.validationMessages || [];
    setRules(newErrors);

    rest.onChange?.(event);
  };

  return (
    <>
      {/* ------------------------------------------- */}
      {/* ---------------- text field --------------- */}
      {/* ------------------------------------------- */}
      <div className="input-container">
        <input
          ref={ref}
          {...rest}
          className={className}
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange}
        />
        <button type="button" onClick={toggleShowPassword} className="visibility-icon-button">
          {showPassword
            ? (hidePasswordIcon || <VisibilityOff />)
            : (showPasswordIcon || <Visibility />)
          }
        </button>
      </div>

      {/* ------------------------------------------- */}
      {/* ------ password requirement checklist ----- */}
      {/* ------------------------------------------- */}
      {rules.length > 0 && (
        <ul>
          {rules.map((error, index) => (
              <li key={index}>
              {/* <li key={index} sx={{ padding: 0 }}> */}
                <span>
                {/* <span sx={{ minWidth: 24, '& svg': { width: 18 } }}> */}
                  {/* ------ left icon ------ */}
                  {error.passed
                    // ? <Check fill={theme.palette.success.main} />
                    // : <Close fill={theme.palette.error.main} />
                    ? <Check fill="red" />
                    : <Close fill="green" />
                  }
                </span>
                {/* ------ error message ------ */}
                <span
                  // sx={{ color: (theme: Theme) => error.passed
                  //   ? theme.palette.success.main
                  //   : theme.palette.error.main
                  // }}
                >
                  {error.message}
                </span>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
});

export default PasswordChecklist;
