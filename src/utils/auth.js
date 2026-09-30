const AUTH_STORAGE_KEY = 'fliesenleger_admin_auth_v1';

// Default secure master secret (can be overridden via environment variable VITE_ADMIN_PASSWORD)
const MASTER_SECRET = import.meta.env.VITE_ADMIN_PASSWORD || 'Hoffmann#2026';

/**
 * Check if the user is currently authenticated
 */
export function isAuthenticated() {
  if (typeof window === 'undefined') return false;
  return (
    sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true' ||
    localStorage.getItem(AUTH_STORAGE_KEY) === 'true'
  );
}

/**
 * Authenticate with the given password
 */
export function login(password, rememberMe = false) {
  if (password === MASTER_SECRET) {
    if (rememberMe) {
      localStorage.setItem(AUTH_STORAGE_KEY, 'true');
    } else {
      sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
    }
    return { success: true };
  }
  return { success: false, error: 'Das eingegebene Passwort ist ungültig.' };
}

/**
 * Log out
 */
export function logout() {
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
  localStorage.removeItem(AUTH_STORAGE_KEY);
}
