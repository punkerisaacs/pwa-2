import * as React from 'react';
import { Category } from './components';
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

export default function App(): JSX.Element {
    return <Category cover={DEFAULT_IMAGE} emoji={'?'} path={''} />;
}
