// Technologies grouped by area. Each entry is backed by the CV and/or a
// public repository; `evidence` names where a reviewer can see it used.

export type SkillGroup = {
  title: string;
  items: { name: string; evidence?: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'TypeScript', evidence: 'HelaIQ, YASH POS, Beaver site' },
      { name: 'JavaScript', evidence: 'ExamDock, hotel system' },
      { name: 'PHP', evidence: 'HelaIQ, YASH POS, Nithi Docket' },
      { name: 'Python', evidence: 'HelaIQ ML service, Flask API' },
      { name: 'Java', evidence: 'Library system (JavaFX)' },
      { name: 'SQL', evidence: 'MySQL, PostgreSQL, Oracle basics' },
      { name: 'Dart, C', evidence: 'Coursework' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React 18 / 19' },
      { name: 'Next.js', evidence: 'Beaver Creation site' },
      { name: 'Tailwind CSS' },
      { name: 'TanStack Query' },
      { name: 'React Router' },
      { name: 'i18next (EN / SI)', evidence: 'HelaIQ' },
      { name: 'PWA, IndexedDB', evidence: 'YASH POS offline queue' },
      { name: 'Electron', evidence: 'ExamDock' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Laravel 9 / 12' },
      { name: 'Plain-PHP MVC + PDO', evidence: 'Nithi Docket' },
      { name: 'REST API design', evidence: 'OpenAPI spec in YASH POS' },
      { name: 'FastAPI', evidence: 'HelaIQ ML service' },
      { name: 'Flask' },
      { name: 'Node.js, Express', evidence: 'YASH POS v1' },
      { name: 'Sanctum, sessions, RBAC' },
    ],
  },
  {
    title: 'Data & ML',
    items: [
      { name: 'MySQL / MariaDB' },
      { name: 'PostgreSQL' },
      { name: 'SQLite', evidence: 'ExamDock' },
      { name: 'scikit-learn, XGBoost', evidence: 'HelaIQ readiness model' },
      { name: 'SHAP, LIME', evidence: 'HelaIQ explainability' },
      { name: 'Item Response Theory', evidence: 'HelaIQ adaptive test' },
    ],
  },
  {
    title: 'Testing & practice',
    items: [
      { name: 'PHPUnit feature tests' },
      { name: 'Vitest, Testing Library', evidence: 'YASH POS client' },
      { name: 'Concurrency & idempotency tests', evidence: 'YASH POS' },
      { name: 'Requirement analysis' },
      { name: 'Agile / Scrum' },
      { name: 'Technical documentation' },
    ],
  },
  {
    title: 'Tools & workflow',
    items: [
      { name: 'Git, GitHub' },
      { name: 'Vite' },
      { name: 'Docker', evidence: 'HelaIQ Dockerfile' },
      { name: 'Postman' },
      { name: 'Figma' },
      { name: 'Vercel, cPanel hosting' },
      { name: 'Claude, Copilot, Cursor' },
    ],
  },
];
