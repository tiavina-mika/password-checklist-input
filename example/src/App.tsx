import PasswordChecklist from 'password-checklist-input';
import { ChangeEvent, useState } from 'react';

const App = () => {
  const [password, setPassword] = useState<string>('');

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  return (
    <div className="flex flex-col items-center mt-2">
      <div className="max-w-[400px] pb-2">
        <div className="flex flex-col gap-2 mb-8 mt-2">
          <h3 className="text-2xl font-bold">password-checklist-input</h3>
          <span>Click on the input field and type a password to see the chack list</span>
        </div>
        <PasswordChecklist
          value={password}
          onChange={handlePasswordChange}
          // override class name
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          // override error messages
          validationMessages={{
            minLength: 'Devrait contenir au moins 6 caractères',
            lowerCase: 'Devrait contenir au moins une lettre minuscule',
            upperCase: 'Devrait contenir au moins une lettre majuscule',
            number: 'Devrait contenir au moins un chiffre',
            specialCharacters: 'Devrait contenir au moins un caractère spécial',
          }}
          // override options
          options={{
            minLength: 6,
            allowedSpecialChar: "="
          }}
          // override TextFieldProps
          placeholder="Enter your password"
        />
      </div>
    </div>
  )
}

export default App
