import PasswordChecklist from '../PasswordChecklist';

const App = () => {
  return (
    <div>
      <PasswordChecklist
        className='input'
        validationMessages={{
          minLength: 'Devrait contenir au moins 8 caractères',
          lowerCase: 'Devrait contenir au moins une lettre minuscule',
          upperCase: 'Devrait contenir au moins une lettre majuscule',
          number: 'Devrait contenir au moins un chiffre',
          specialCharacters: 'Devrait contenir au moins un caractère spécial',
        }}
        options={{
          minLength: 6,
          allowedSpecialChar: "="
        }}
      />
    </div>
  )
}

export default App
