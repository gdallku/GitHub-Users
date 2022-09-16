import PropTypes from "prop-types";
import "./User.css";

export default function User(props) {
  const { user, ...rest } = props;

  if (!user) {
    return null;
  }
  

  return (
    <div className="User">
      <h5>{user.name}</h5>
      <img src={user.avatar_url} alt={user.name}></img>
      <div className="User__actions">
        <button
          className="btn btn-danger"
          onClick={() => rest.onDelete(user.id)}
        >
          {" "}
          Delete
        </button>
        <button className="btn btn-info">Update</button>
      </div>
    </div>
  );
}

export const UserType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
});

User.propTypes = {
  user: UserType.isRequired,
  onDelete: PropTypes.func
};