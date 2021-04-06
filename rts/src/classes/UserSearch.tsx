import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

export default class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onSearchClick = () => {
    const result = this.props.users.find((u) => {
      return u.name === this.state.name;
    });

    this.setState({ user: result });
  };

  render() {
    return (
      <div className="">
        <h3>User Search</h3>

        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
          value={this.state.name}
        />
        <button onClick={this.onSearchClick}>Find!</button>

        <h3>Result</h3>
        <div>{this.state.user?.name}</div>
        <div>{this.state.user?.age}</div>
      </div>
    );
  }
}
