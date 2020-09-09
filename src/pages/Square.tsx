import React from 'react';

interface IProps {
  value: Number;
  onClick: () => void;
}
interface State {
  value: String | null;
}
export default class Square extends React.Component<IProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.props.onClick();
        }}
      >
        {this.props.value}
      </button>
    );
  }
}
