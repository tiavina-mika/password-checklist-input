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
        <div className="flex flex-col gap-2 mb-16 mt-2">
          <h5 className="text-md font-bold">password-checklist-input</h5>
          <span>Click on the input field and type a password to see the chack list</span>
        </div>
        <PasswordChecklist
          value={password}
          onChange={handlePasswordChange}
          // override class name
          className='input'
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
