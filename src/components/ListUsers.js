import PropTypes from "prop-types";
import User, { UserType } from "./User";
import "./ListUsers.css";

export default function ListUsers(props) {
  const { users, title , onDelete} = props;

  const notArray = !Array.isArray(users);
  const isEmpty = users.length === 0;

  if (notArray) {
    return null;
  }

  return (
    <div className="ListUsers">
      <h5 className="ListUsers__title">{title}</h5>
      <div className="ListUsers__users">
        {isEmpty ? (
          <div className="alert alert-warning"> No users!</div>
        ) : (
          users.map((user) => <User user={user} key={user.id} onDelete={onDelete}/>)
        )}
      </div>
    </div>
  );
}

ListUsers.propTypes = {
  title: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(UserType),
};