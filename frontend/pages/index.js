import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {!user ? (
        <a href="/api/auth/login">Login</a>
      ) : (
        <>
          <a href="/api/auth/logout">Logout</a>
          <h2>Welcome {user.name}</h2>
          <p>Email: {user.email}</p>
        </>
      )}
    </div>
  );
}
