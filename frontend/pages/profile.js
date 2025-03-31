import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function Profile({ user }) {
  return (
    <div>
      <h1>Profile</h1>
      <img src={user.picture} alt="User profile picture" />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();

export default Profile;
