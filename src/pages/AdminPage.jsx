import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Plus,
  Pencil,
  Trash2,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ExternalLink,
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Search,
  Filter,
  X,
  SlidersHorizontal,
} from 'lucide-react';
import {
  getStoredProjects,
  addProject,
  updateProject,
  deleteProject,
  moveProject,
  resetProjectsToDefault,
  compressImageFile,
} from '../utils/projectStore';
import { isAuthenticated, login, logout } from '../utils/auth';

const CATEGORIES = [
  'Komplettbäder',
  'Großformat',
  'Walk-In Duschen',
  'Wohnbereich',
  'Außenbereich',
];

export default function AdminPage() {
  // Authentication State
  const [authed, setAuthed] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [authError, setAuthError] = useState('');

  // Projects & UI State
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [sortMode, setSortMode] = useState('manual'); // 'manual' | 'alpha-asc' | 'alpha-desc' | 'category'
  
  // Modals & Feedback
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentEditProject, setCurrentEditProject] = useState(null); // null = new project
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Form Fields in Modal
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState(CATEGORIES[0]);
  const [formScope, setFormScope] = useState('');
  const [formImage, setFormImage] = useState('');
  const [formImagePreview, setFormImagePreview] = useState('');
  const [isProcessingImage, setIsProcessingImage] = useState(false);
  const [formError, setFormError] = useState('');

  const fileInputRef = useRef(null);

  // Check auth on mount
  useEffect(() => {
    setAuthed(isAuthenticated());
  }, []);

  // Load projects when authenticated
  useEffect(() => {
    if (authed) {
      setProjects(getStoredProjects());
    }
  }, [authed]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    setAuthError('');
    const result = login(passwordInput.trim(), rememberMe);
    if (result.success) {
      setAuthed(true);
      setPasswordInput('');
      setProjects(getStoredProjects());
    } else {
      setAuthError(result.error);
    }
  };

  // Logout handler
  const handleLogout = () => {
    logout();
    setAuthed(false);
  };

  // Filtered & Sorted Projects
  const displayProjects = useMemo(() => {
    let list = [...projects];

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.scope?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== 'Alle') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Sorting
    if (sortMode === 'alpha-asc') {
      list.sort((a, b) => a.title.localeCompare(b.title, 'de'));
    } else if (sortMode === 'alpha-desc') {
      list.sort((a, b) => b.title.localeCompare(a.title, 'de'));
    } else if (sortMode === 'category') {
      list.sort((a, b) => a.category.localeCompare(b.category, 'de'));
    }
    // 'manual' keeps the original array order

    return list;
  }, [projects, searchQuery, selectedCategory, sortMode]);

  // Open modal for new project
  const handleOpenNewModal = () => {
    setCurrentEditProject(null);
    setFormTitle('');
    setFormCategory(CATEGORIES[0]);
    setFormScope('');
    setFormImage('');
    setFormImagePreview('');
    setFormError('');
    setEditModalOpen(true);
  };

  // Open modal to edit existing project
  const handleOpenEditModal = (proj) => {
    setCurrentEditProject(proj);
    setFormTitle(proj.title);
    setFormCategory(proj.category);
    setFormScope(proj.scope);
    setFormImage(proj.image);
    setFormImagePreview(proj.image);
    setFormError('');
    setEditModalOpen(true);
  };

  // Handle direct file upload with auto WebP compression
  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessingImage(true);
    setFormError('');

    try {
      const compressedDataUrl = await compressImageFile(file, 1600, 0.85);
      setFormImage(compressedDataUrl);
      setFormImagePreview(compressedDataUrl);
    } catch (err) {
      setFormError(err.message || 'Fehler beim Laden des Bildes.');
    } finally {
      setIsProcessingImage(false);
    }
  };

  // Save Project (Create or Update)
  const handleSaveProject = (e) => {
    e.preventDefault();
    if (!formTitle.trim()) {
      setFormError('Bitte geben Sie einen Projekttitel ein.');
      return;
    }
    if (!formScope.trim()) {
      setFormError('Bitte geben Sie die Ausführungsdetails an.');
      return;
    }
    if (!formImage) {
      setFormError('Bitte laden Sie ein Projektfoto hoch.');
      return;
    }

    try {
      if (currentEditProject) {
        // Update
        const updated = updateProject(currentEditProject.id, {
          title: formTitle,
          category: formCategory,
          scope: formScope,
          image: formImage,
        });
        setProjects(updated);
        showToast('Projekt erfolgreich aktualisiert!');
      } else {
        // Create
        addProject({
          title: formTitle,
          category: formCategory,
          scope: formScope,
          image: formImage,
        });
        setProjects(getStoredProjects());
        showToast('Neues Projekt erfolgreich veröffentlicht!');
      }
      setEditModalOpen(false);
    } catch (err) {
      setFormError('Fehler beim Speichern: ' + (err.message || 'Speicher voll'));
    }
  };

  // Delete Project
  const handleDelete = (id) => {
    const updated = deleteProject(id);
    setProjects(updated);
    setDeleteConfirmId(null);
    showToast('Projekt wurde entfernt.');
  };

  // Move project up/down
  const handleMove = (id, direction) => {
    const updated = moveProject(id, direction);
    setProjects(updated);
  };

  // Reset to original 16 projects
  const handleResetToDefaults = () => {
    const defaults = resetProjectsToDefault();
    setProjects(defaults);
    setResetConfirmOpen(false);
    showToast('Projekte auf 16 Original-Meisterarbeiten zurückgesetzt.');
  };

  // -------------------------------------------------------------
  // VIEW: LOGIN SCREEN (if not authenticated)
  // -------------------------------------------------------------
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#09182B] flex items-center justify-center p-4 sm:p-6 text-white relative overflow-hidden">
        {/* Decorative background glow lines */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C66030]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-md bg-[#0F2238] border-2 border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-8">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#F59725] shadow-inner">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="font-display font-black uppercase italic text-2xl sm:text-3xl text-white tracking-tight">
              ADMIN-PORTAL
            </h1>
            <p className="text-xs sm:text-sm text-neutral-400">
              Kingsley Hoffmann — Fliesenleger & Fachbetrieb
              <br />
              <span className="text-neutral-500">Geschützter Bereich für Projekt-Uploads</span>
            </p>
          </div>

          {authError && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm p-4 rounded-xl flex items-center gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                Master-Passwort
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Passwort eingeben..."
                  autoFocus
                  required
                  className="w-full bg-[#09182B] border border-white/15 focus:border-[#F59725] rounded-xl px-4 py-3.5 pr-12 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors cursor-pointer p-1"
                  aria-label="Passwort anzeigen"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-400">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-white/20 bg-[#09182B] text-[#C66030] focus:ring-0 w-4 h-4 cursor-pointer"
                />
                <span>Angemeldet bleiben</span>
              </label>
              <Link to="/" className="text-neutral-400 hover:text-white transition-colors">
                Zur Website
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl font-display font-black uppercase text-sm tracking-wider bg-[#09182B] text-white border-2 border-[#C66030] shadow-lg shadow-black/40 hover:bg-[#C66030] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Im Portal anmelden</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW: AUTHENTICATED ADMIN DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#09182B]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#09182B] text-white border-2 border-[#F59725] px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 className="w-5 h-5 text-[#F59725] shrink-0" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Top Admin Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#09182B] text-white border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg border border-white/10"
              title="Zurück zur Website"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Website</span>
            </Link>
            <div className="h-6 w-px bg-white/15 hidden sm:block" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black uppercase italic text-lg sm:text-xl text-white tracking-tight">
                  PROJEKT-VERWALTUNG
                </span>
                <span className="bg-[#C66030]/20 text-[#F59725] border border-[#F59725]/30 text-[10px] font-black uppercase px-2 py-0.5 rounded-md">
                  ADMIN
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 hidden sm:block">
                Kingsley Hoffmann • Live-Synchronisation mit Startseite & Galerie
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleOpenNewModal}
              className="py-2.5 px-4 sm:px-5 rounded-xl font-display font-black uppercase text-xs tracking-wider bg-[#09182B] text-white border-2 border-[#F59725] hover:bg-[#C66030] shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <Plus className="w-4 h-4 text-[#F59725]" />
              <span>Neues Projekt</span>
            </button>

            <button
              onClick={handleLogout}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-red-500/20 text-neutral-400 hover:text-red-300 border border-white/10 transition-colors cursor-pointer"
              title="Abmelden"
            >
              <Lock className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Quick Stats & Overview Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="font-display font-black uppercase italic text-2xl text-[#09182B]">
              MEISTERWERKE ÜBERSICHT
            </h2>
            <p className="text-sm text-neutral-600">
              Hier können Sie Projekte per direktem Foto-Upload hinzufügen, Texte bearbeiten, löschen und die Reihenfolge für Besucher anpassen.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-[#FAF9F6] border border-neutral-200 rounded-xl px-5 py-3 text-center">
              <span className="block text-2xl font-display font-black text-[#09182B]">
                {projects.length}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                Projekte gesamt
              </span>
            </div>
            <Link
              to="/projekte"
              target="_blank"
              className="bg-[#FAF9F6] hover:bg-neutral-100 border border-neutral-200 rounded-xl px-4 py-3 flex items-center gap-2 text-xs font-bold uppercase text-[#09182B] transition-colors"
            >
              <span>Vorschau öffnen</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C66030]" />
            </Link>
          </div>
        </div>

        {/* Toolbar: Search, Category Filter, and Sorting */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-neutral-200/80 shadow-xs space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Projekt durchsuchen..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 bg-[#FAF9F6] text-sm text-[#09182B] placeholder-neutral-400 focus:outline-none focus:border-[#C66030] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Mode Selector */}
            <div className="flex items-center gap-2 shrink-0">
              <SlidersHorizontal className="w-4 h-4 text-neutral-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Sortierung:
              </span>
              <select
                value={sortMode}
                onChange={(e) => setSortMode(e.target.value)}
                className="bg-[#FAF9F6] border border-neutral-200 text-xs font-bold uppercase rounded-xl px-3 py-2 text-[#09182B] focus:outline-none focus:border-[#C66030] cursor-pointer"
              >
                <option value="manual">Manuell (Standardreihenfolge)</option>
                <option value="alpha-asc">Titel (A–Z)</option>
                <option value="alpha-desc">Titel (Z–A)</option>
                <option value="category">Kategorie</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-neutral-100">
            {['Alle', ...CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-display font-black uppercase tracking-wider transition-colors cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#09182B] text-white shadow-xs'
                    : 'bg-[#FAF9F6] text-neutral-600 hover:text-[#09182B] border border-neutral-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Items Grid / List */}
        {displayProjects.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-neutral-300 space-y-4">
            <ImageIcon className="w-12 h-12 text-neutral-300 mx-auto" />
            <h3 className="font-display font-black uppercase italic text-lg text-[#09182B]">
              Keine Projekte gefunden
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto">
              Für diese Filterung liegen keine Einträge vor. Ändern Sie den Suchbegriff oder erstellen Sie ein neues Meisterprojekt.
            </p>
            <button
              onClick={handleOpenNewModal}
              className="py-2.5 px-5 rounded-xl font-display font-black uppercase text-xs tracking-wider bg-[#09182B] text-white border-2 border-[#F59725] hover:bg-[#C66030] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4 text-[#F59725]" />
              <span>Erstes Projekt hochladen</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.map((proj, index) => {
              const originalIndex = projects.findIndex((p) => p.id === proj.id);
              const isFirst = originalIndex === 0;
              const isLast = originalIndex === projects.length - 1;

              return (
                <div
                  key={proj.id}
                  className="bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
                >
                  {/* Photo Preview Stage */}
                  <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#09182B]/85 backdrop-blur-xs text-[#F59725] text-[10px] font-black uppercase px-2.5 py-1 rounded-md border border-white/10 tracking-wider">
                      {proj.category}
                    </div>

                    {/* Manual Sort Controls (only enabled in manual sort mode) */}
                    {sortMode === 'manual' && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-xs p-1 rounded-lg border border-white/15">
                        <button
                          onClick={() => handleMove(proj.id, 'up')}
                          disabled={isFirst}
                          className="p-1 rounded text-white hover:text-[#F59725] disabled:opacity-30 disabled:hover:text-white transition-colors cursor-pointer"
                          title="Nach oben verschieben"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleMove(proj.id, 'down')}
                          disabled={isLast}
                          className="p-1 rounded text-white hover:text-[#F59725] disabled:opacity-30 disabled:hover:text-white transition-colors cursor-pointer"
                          title="Nach unten verschieben"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-display font-black text-lg text-[#09182B] leading-snug line-clamp-2">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                        {proj.scope}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleOpenEditModal(proj)}
                        className="py-2 px-3.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-neutral-100 hover:bg-[#09182B] text-neutral-700 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 flex-1 justify-center"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                        <span>Bearbeiten</span>
                      </button>

                      <button
                        onClick={() => setDeleteConfirmId(proj.id)}
                        className="p-2 rounded-lg text-neutral-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                        title="Projekt löschen"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer Actions: Reset to Default Master Projects */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            Projekte werden persistent gespeichert. Änderungen sind sofort auf der Website aktiv.
          </div>
          <button
            onClick={() => setResetConfirmOpen(true)}
            className="text-neutral-500 hover:text-neutral-800 underline underline-offset-4 flex items-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Auf 16 Original-Projekte zurücksetzen</span>
          </button>
        </div>
      </main>

      {/* ------------------------------------------------------------- */}
      {/* MODAL: CREATE / EDIT PROJECT                                  */}
      {/* ------------------------------------------------------------- */}
      {editModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-neutral-200 space-y-6 my-8">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <div>
                <h2 className="font-display font-black uppercase italic text-2xl text-[#09182B]">
                  {currentEditProject ? 'Projekt bearbeiten' : 'Neues Projekt anlegen'}
                </h2>
                <p className="text-xs text-neutral-500">
                  {currentEditProject
                    ? 'Änderungen werden sofort in der Galerie übernommen.'
                    : 'Laden Sie ein echtes Projektfoto hoch und erfassen Sie die Details.'}
                </p>
              </div>
              <button
                onClick={() => setEditModalOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-[#09182B] transition-colors cursor-pointer"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formError && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm p-4 rounded-xl flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSaveProject} className="space-y-5">
              {/* Direct Photo Upload Dropzone */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Projektfoto (Direkter Datei-Upload) *
                </label>

                {formImagePreview ? (
                  <div className="relative aspect-[16/10] bg-neutral-900 rounded-2xl overflow-hidden border-2 border-neutral-200 group">
                    <img
                      src={formImagePreview}
                      alt="Projekt Vorschau"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="py-2 px-4 rounded-xl bg-white text-[#09182B] text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-neutral-100 transition-colors cursor-pointer"
                      >
                        Anderes Foto wählen
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setFormImage('');
                          setFormImagePreview('');
                        }}
                        className="py-2 px-4 rounded-xl bg-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-red-700 transition-colors cursor-pointer"
                      >
                        Foto entfernen
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-neutral-300 hover:border-[#C66030] bg-[#FAF9F6] rounded-2xl p-8 text-center cursor-pointer transition-colors space-y-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mx-auto text-[#C66030] shadow-xs">
                      {isProcessingImage ? (
                        <RefreshCw className="w-6 h-6 animate-spin" />
                      ) : (
                        <Upload className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#09182B]">
                        {isProcessingImage
                          ? 'Foto wird optimiert...'
                          : 'Klicken zum Foto auswählen oder Datei hierher ziehen'}
                      </p>
                      <p className="text-xs text-neutral-500 mt-1">
                        JPG, PNG, WebP bis 20 MB (wird im Browser automatisch gestochen scharf komprimiert)
                      </p>
                    </div>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/avif"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              {/* Title Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Projekttitel *
                </label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="z. B. Großformatiges Designer-Bad mit Walk-In Dusche"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-[#FAF9F6] text-sm text-[#09182B] focus:outline-none focus:border-[#C66030] transition-colors"
                />
              </div>

              {/* Category Select */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Kategorie *
                </label>
                <select
                  value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-[#FAF9F6] text-sm font-semibold text-[#09182B] focus:outline-none focus:border-[#C66030] transition-colors cursor-pointer"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Scope Textarea */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Leistungsumfang & Ausführungsdetails *
                </label>
                <textarea
                  rows={3}
                  value={formScope}
                  onChange={(e) => setFormScope(e.target.value)}
                  placeholder="z. B. Großformatige 120 × 260 cm Wandelemente, ebenerdige Dusche mit Rinne, Verbundabdichtung DIN 18534"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-[#FAF9F6] text-sm text-[#09182B] focus:outline-none focus:border-[#C66030] transition-colors leading-relaxed"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditModalOpen(false)}
                  className="py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-600 hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  disabled={isProcessingImage}
                  className="py-3 px-6 rounded-xl font-display font-black uppercase text-xs tracking-wider bg-[#09182B] text-white border-2 border-[#F59725] hover:bg-[#C66030] shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  {currentEditProject ? 'Änderungen speichern' : 'Projekt veröffentlichen'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL: DELETE CONFIRMATION                                    */}
      {/* ------------------------------------------------------------- */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border-2 border-red-200 space-y-5">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-display font-black uppercase italic text-xl text-[#09182B]">
                Projekt unwiderruflich löschen?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Dieses Meisterprojekt wird dauerhaft aus der Galerie und allen Übersichten entfernt.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-600 bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Abbrechen
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white shadow-md transition-colors cursor-pointer"
              >
                Endgültig löschen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL: RESET TO DEFAULTS CONFIRMATION                         */}
      {/* ------------------------------------------------------------- */}
      {resetConfirmOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border-2 border-neutral-300 space-y-5">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-display font-black uppercase italic text-xl text-[#09182B]">
                Auf 16 Original-Projekte zurücksetzen?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Alle selbst angelegten oder bearbeiteten Projekte werden verworfen und die ursprünglichen Meisteraufnahmen wiederhergestellt.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setResetConfirmOpen(false)}
                className="flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-600 bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Abbrechen
              </button>
              <button
                onClick={handleResetToDefaults}
                className="flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#09182B] hover:bg-[#C66030] text-white shadow-md transition-colors cursor-pointer"
              >
                Zurücksetzen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
