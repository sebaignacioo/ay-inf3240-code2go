export const authLogin = async (username: string, password: string) => {
  const response = await fetch(`http://localhost:4500/auth/iniciar-sesion`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return await response.json();
};

export const authRegistro = async ({
  username,
  password,
  email,
}: {
  username: string;
  password: string;
  email: string;
}) => {
  const response = await fetch(`http://localhost:4500/auth/crear-cuenta`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, email }),
  });
  return await response.json();
};
