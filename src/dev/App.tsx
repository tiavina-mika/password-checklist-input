import PasswordChecklist from '../PasswordChecklist';

const App = () => {
  return (
    <div className="app">
      <div className="app-content">
        <div>
          <h1>Password Strength Input</h1>
          <p>Check the password strength</p>
        </div>
        <form>
          <PasswordChecklist
            className="input"
            options={{
              minLength: 6,
              allowedSpecialChar: '=',
            }}
            validationMessages={{
              minLength: 'Devrait contenir au moins 8 caractères',
              lowerCase: 'Devrait contenir au moins une lettre minuscule',
              upperCase: 'Devrait contenir au moins une lettre majuscule',
              number: 'Devrait contenir au moins un chiffre',
              specialCharacters: 'Devrait contenir au moins un caractère spécial',
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default App;
