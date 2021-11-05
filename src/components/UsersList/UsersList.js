import users from 'data/data';
import UsersListItem from 'components/UsersListItem/UsersListItem';

const UsersList = () => (
  <div>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </div>
);

export default UsersList;
