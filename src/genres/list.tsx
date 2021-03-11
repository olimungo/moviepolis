import './list.css';
import * as React from 'react';

export type Props = { text: string };

export default class List extends React.Component<Props> {
    render() {
        const { text } = this.props;

        return <div className='genres-list--border'>{text}</div>;
    }
}