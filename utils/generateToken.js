import jsonwebtoken from 'jsonwebtoken';

const { sign } = jsonwebtoken;
const JWT_SECRET = 'your_secret_key'; // Replace with a secure key in production

/**
 * Authenticate a user by email and generate a JWT token.
 *
 * @param {Array} userModel - The user model (array of users or database query result).
 * @param {string} email - The email to authenticate.
 * @returns {Object} - An object containing the token or an error message.
 */
export function authenticateUser(userModel, email) {
  if (!email) return { error: 'Email is required', status: 400 };

  // Use findOne to get the first matching user
  const user = userModel.findOne({ where: { email } });

  return user
    ? {
        token: sign({ id: user.id, email: user.email }, JWT_SECRET, {
          expiresIn: '24h',
        }),
        status: 200,
      }
    : { error: 'User not found', status: 404 };
}
