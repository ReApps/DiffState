import { createLogger } from 'redux-logger';

const logger = createLogger({
    diff: true,
    duration: true,
});

addMiddleware(logger);

export default function DiffState() {
    return <div>Hello, DiffState!</div>;
};

