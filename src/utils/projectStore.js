import { GALLERY_PROJECTS } from '../data/content';

const STORAGE_KEY = 'fliesenleger_hoffmann_projects_v1';
const EVENT_NAME = 'fliesenleger_projects_updated';

// Helper to assign stable IDs to default projects
const defaultProjectsWithIds = GALLERY_PROJECTS.map((proj, index) => ({
  id: `default-${index + 1}`,
  title: proj.title,
  category: proj.category,
  scope: proj.scope,
  image: proj.image,
  createdAt: new Date(Date.now() - (GALLERY_PROJECTS.length - index) * 86400000).toISOString(),
}));

/**
 * Get all projects from localStorage or fallback to defaults
 */
export function getStoredProjects() {
  if (typeof window === 'undefined') return defaultProjectsWithIds;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjectsWithIds));
      return defaultProjectsWithIds;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return defaultProjectsWithIds;
  } catch (err) {
    console.error('Error reading projects from storage:', err);
    return defaultProjectsWithIds;
  }
}

/**
 * Save projects list to localStorage and trigger change event
 */
export function saveProjects(projects) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: projects }));
  } catch (err) {
    console.error('Error saving projects:', err);
    throw err;
  }
}

/**
 * Add a new project to the beginning of the list
 */
export function addProject(projectData) {
  const current = getStoredProjects();
  const newProject = {
    id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    title: projectData.title.trim(),
    category: projectData.category,
    scope: projectData.scope.trim(),
    image: projectData.image,
    createdAt: new Date().toISOString(),
  };
  const updated = [newProject, ...current];
  saveProjects(updated);
  return newProject;
}

/**
 * Update an existing project
 */
export function updateProject(id, updatedFields) {
  const current = getStoredProjects();
  const updated = current.map((p) => {
    if (p.id === id) {
      return {
        ...p,
        ...updatedFields,
        title: updatedFields.title !== undefined ? updatedFields.title.trim() : p.title,
        scope: updatedFields.scope !== undefined ? updatedFields.scope.trim() : p.scope,
        updatedAt: new Date().toISOString(),
      };
    }
    return p;
  });
  saveProjects(updated);
  return updated;
}

/**
 * Delete a project by ID
 */
export function deleteProject(id) {
  const current = getStoredProjects();
  const updated = current.filter((p) => p.id !== id);
  saveProjects(updated);
  return updated;
}

/**
 * Move a project up or down in the array order
 */
export function moveProject(id, direction) {
  const current = [...getStoredProjects()];
  const index = current.findIndex((p) => p.id === id);
  if (index === -1) return current;

  const targetIndex = direction === 'up' ? index - 1 : index + 1;
  if (targetIndex < 0 || targetIndex >= current.length) return current;

  const item = current.splice(index, 1)[0];
  current.splice(targetIndex, 0, item);
  saveProjects(current);
  return current;
}

/**
 * Reset projects back to the original 16 master defaults
 */
export function resetProjectsToDefault() {
  saveProjects(defaultProjectsWithIds);
  return defaultProjectsWithIds;
}

/**
 * Subscribe to project updates
 */
export function subscribeProjects(callback) {
  if (typeof window === 'undefined') return () => {};

  const handleCustom = (e) => {
    callback(e.detail || getStoredProjects());
  };
  const handleStorage = (e) => {
    if (e.key === STORAGE_KEY) {
      callback(getStoredProjects());
    }
  };

  window.addEventListener(EVENT_NAME, handleCustom);
  window.addEventListener('storage', handleStorage);

  return () => {
    window.removeEventListener(EVENT_NAME, handleCustom);
    window.removeEventListener('storage', handleStorage);
  };
}

/**
 * Client-side high quality image compressor (Canvas based)
 * Compresses any camera photo (even 10MB+) down to ~150-250KB WebP
 */
export function compressImageFile(file, maxWidth = 1600, quality = 0.85) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith('image/')) {
      reject(new Error('Bitte laden Sie eine gültige Bilddatei hoch.'));
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        try {
          const dataUrl = canvas.toDataURL('image/webp', quality);
          resolve(dataUrl);
        } catch {
          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve(dataUrl);
        }
      };
      img.onerror = () => reject(new Error('Fehler beim Verarbeiten des Bildes.'));
      img.src = event.target.result;
    };
    reader.onerror = () => reject(new Error('Fehler beim Lesen der Datei.'));
    reader.readAsDataURL(file);
  });
}
