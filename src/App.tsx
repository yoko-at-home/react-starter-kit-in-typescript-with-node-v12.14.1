import React from 'react';
import Counter from './Counter';

interface AppProps {
    message?: string;
}

const App: React.FunctionComponent<AppProps> = ({message}:AppProps) => {
return <div>
    {message}
    <Counter />
</div>;
};

App.defaultProps={
    message: 'Hello, defaultProps!',
}

export default App;
