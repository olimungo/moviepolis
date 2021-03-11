import './app-footer.css';
import * as React from 'react';

// export type Props = { text: string, children: React.ReactElement };
export type Props = { text: string };

export default class AppMenu extends React.Component<Props> {
  render() {
    const { text } = this.props;

    return <div className='app-footer'>
      {text}
    </div>;
  }
}