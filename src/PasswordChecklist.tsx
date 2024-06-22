import { ChangeEvent, InputHTMLAttributes, forwardRef, useState } from 'react';

import VisibilityOff from './icons/VisibilityOff';
import Visibility from './icons/Visibility';
import Check from './icons/Check';
import Close from './icons/Close';
import { validatePasswordChecklist, PasswordCheckListResult } from 'validate-password-checklist';
import { PasswordChecklistProps } from './types';

import './index.css';

const PasswordChecklist =  forwardRef<HTMLInputElement, PasswordChecklistProps & InputHTMLAttributes<HTMLInputElement>>(({
  options,
  className,
  hidePasswordIcon,
  showPasswordIcon,
  validationMessages,
  containerClassName,
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
    <div className={containerClassName}>
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
        <ul className="rules">
          {rules.map((rule, index) => (
              <li key={index}>
                <div className="rule-icon-container">
                  {/* ------ left icon ------ */}
                  {rule.passed
                    ? <Check fill="green" />
                    : <Close fill="red" />
                  }
                </div>
                {/* ------ rule message ------ */}
                <span
                  style={{
                    color: rule.passed ? 'green' : 'red',
                  }}
                >
                  {rule.message}
                </span>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
});

export default PasswordChecklist;
