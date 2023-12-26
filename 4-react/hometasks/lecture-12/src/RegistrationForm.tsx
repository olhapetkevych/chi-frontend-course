import React, { useState, useEffect} from 'react'

//Невеличке питання - коли ставити одинарні лапки, а коли подвійні? Не можу згадати...
const RegistrationForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string|null>(null);
    const [passwordError, setPasswordError] = useState<string|null>(null);

    useEffect(() => {
        if (username.length < 3) {
            setUsernameError('Логін повинен мати як мінімум 3 символи')
        } else {
            setUsernameError(null);
        }
    }, [username]);

    useEffect(() => {
        if (!email.includes('@')) {
            setEmailError('Некоректний формат електронної адреси');
        } else {
            setEmailError(null);
        }
    }, [email]);

    useEffect(() => {
        if (password.length < 6) {
            setPasswordError('Пароль повинен мати як мінімум 6 символів');
        } else {
            setPasswordError(null);
        }
    }, [password]);

    return (       
        <div>
            <h2>Форма реєстрації</h2>
            <form>
                <div>
                    <label htmlFor='username'>Введіть логін:</label>
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}    
                </div>
                <div>
                    <label htmlFor="email">Введіть email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                </div>
                <div>
                    <label htmlFor="password">Введіть пароль:</label>
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                </div>
                <button type="button" disabled={!!usernameError || !!emailError || !!passwordError}>
                    Зареєструватися
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;