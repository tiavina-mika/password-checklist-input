# password-checklist-input

<p align="left">
A React password input with list of password validation steps or conditions that should be fulfilled.
</p>

## Demo

- **[CodeSandbox demo](https://codesandbox.io/s/github/tiavina-mika/password-checklist-input-demo)**
- **[Live demo](https://password-checklist-input.netlify.app/)**

<br />

![Gif](https://github.com/tiavina-mika/password-checklist-input/blob/main/screenshots/example.gif)

## Installation

```shell

npm install password-checklist-input

```
or
```shell

yarn add password-checklist-input

## Get started

### Simple usage
```tsx
import PasswordChecklist from 'password-checklist-input';
import { useState, ChangeEvent } from "react";

function App() {
  const [password, setPassword] = useState<string>('');

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  return (
    <PasswordChecklist value={password} onChange={handlePasswordChange} />
  );
}
```

### Override
```tsx
    <PasswordChecklist
      // override class name
      className='border-1 border-gray-500'
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
    />
```

### Custom icons

```tsx
  <PasswordChecklist
    hidePasswordIcon={<EyeOff />}
    showPasswordIcon={<EyeOn />}
  />
```


### HTML input props

```tsx
  <PasswordChecklist
    placeholder="Enter your password"
    // ...other input props
  />
```

See [`here`](https://github.com/tiavina-mika/password-checklist-input/tree/main/example) for more examples that use `PasswordChecklist`.

## Props

|Props |Type                          | Default value                         | Description |
|----------------|-------------------------------|-----------------------------|-----------------------------|
|options|`CheckPasswordOptions`|null|Override colors and labels of each strength
|validationMessages|`ValidationMessages`|null| Override each password validation massages
|containerClassName|`string`|empty|Container class name
|className|`string`|empty|Input class name
|hidePasswordIcon|`ReactNode`|null|Custom icon for showing the password
|hidePasswordIcon|`ReactNode`|null|Custom icon for hiding the password

## Types

#### ValidationMessages

|Name |Type                          | Description |
|----------------|-------------------------------|-----------------------------
|minLength|`string`|Message to display for the minimum required password length
|lowerCase|`string`|Message to display for the lowercase validation
|upperCase|`string`|Message to display for the uppercase validation
|number|`string`|Message to display for the number validation
|specialCharacters|`string`|Message to display for the required special characters

#### CheckPasswordOptions

|Name |Type            |Default value                          | Description |
|----------------|-------------------------------|-------------------------------|-----------------------------
|minLength|`number`|8|Override the minimum required password length
|allowedSpecialChar|`string`|!@#$%^&*(),.?\":{}<>\\[\\]\\\\/`~;'_+=-|Override the allowed special characters

<br />

## Contributing

Get started [here](https://github.com/tiavina-mika/password-checklist-input/blob/main/CONTRIBUTING.md).
