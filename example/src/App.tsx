import clsx from 'clsx';
import PasswordChecklist from 'password-checklist-input';
import { ChangeEvent, useState, SyntheticEvent } from 'react';
import WithHookForm from './WithHookForm';

const tabs = [
  'Basic usage',
  'React Hook Form',
];

const App = () => {
  const [tab, setTab] = useState<number>(0);

  const [password, setPassword] = useState<string>('');

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChange = (newValue: number) => (_: SyntheticEvent) => {
    setTab(newValue);
  };

  return (
    <div className="flex flex-col items-center mt-2 gap-3">
      {/* ---------------- tabs ---------------- */}
      <div className="flex justify-center items-center gap-8">
        {tabs.map((label, index) => (
          <button
            key={index}
            className={clsx(index === tab ? ' border-blue-400' : 'border-transparent', 'text-lg font-semibold text-gray-900 border-b-2 py-2 px-4 hover:opacity-75 focus:outline-none transition-colors duration-300 ease-in-out')}
            type="button"
            onClick={handleChange(index)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ------------- tabs panels ------------- */}
      <div className="max-w-[400px] pb-2">
        <div className="flex flex-col gap-2 mb-8 mt-2">
          <h3 className="text-2xl font-bold">password-checklist-input</h3>
          <span>Click on the input field and type a password to see the check list</span>
        </div>
        {tab === 0 && (
          <PasswordChecklist
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your password"
            value={password}
            options={{
              minLength: 6,
              allowedSpecialChar: '=',
            }}
            validationMessages={{
              minLength: 'Devrait contenir au moins 6 caractères',
              lowerCase: 'Devrait contenir au moins une lettre minuscule',
              upperCase: 'Devrait contenir au moins une lettre majuscule',
              number: 'Devrait contenir au moins un chiffre',
              specialCharacters: 'Devrait contenir au moins un caractère spécial',
            }}
            onChange={handlePasswordChange}
          />
        )}

        {tab === 1 && (
          <WithHookForm />
        )}
      </div>
    </div>
  );
};

export default App;
