export const createData = (
  id: number | undefined,
  username: string | null,
  email: string | null,
  address: string | undefined
) => {
  return { id, username, email, address }
}
