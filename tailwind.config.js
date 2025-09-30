// Tailwind CSS Configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#E2E8F0',
        accent: '#3B82F6',
        'accent-hover': '#2563EB',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        'bg-light': '#0F172A',
        'bg-gray': '#1E293B',
        'bg-dark': '#020617',
        'text-dark': '#FFFFFF',
        'text-medium': '#CBD5E1',
        'text-light': '#FFFFFF',
        'text-muted': '#94A3B8',
        border: '#334155',
        'border-hover': '#475569',
        // Accent colors for highlights
        'blue': '#3B82F6',
        'blue-hover': '#2563EB',
        'purple': '#8B5CF6',
        'purple-hover': '#7C3AED',
        'pink': '#EC4899',
        'pink-hover': '#DB2777',
        'cyan': '#06B6D4',
        'cyan-hover': '#0891B2',
        'emerald': '#10B981',
        'emerald-hover': '#059669',
        'orange': '#F97316',
        'orange-hover': '#EA580C',
      },
      fontFamily: {
        'inter': ['Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 24px rgba(59, 130, 246, 0.15)',
        'custom-hover': '0 10px 30px rgba(59, 130, 246, 0.25)',
        'blue': '0 4px 24px rgba(59, 130, 246, 0.15)',
        'blue-hover': '0 10px 30px rgba(59, 130, 246, 0.25)',
        'purple': '0 4px 24px rgba(139, 92, 246, 0.15)',
        'purple-hover': '0 10px 30px rgba(139, 92, 246, 0.25)',
        'pink': '0 4px 24px rgba(236, 72, 153, 0.15)',
        'pink-hover': '0 10px 30px rgba(236, 72, 153, 0.25)',
        'emerald': '0 4px 24px rgba(16, 185, 129, 0.15)',
        'emerald-hover': '0 10px 30px rgba(16, 185, 129, 0.25)',
        'orange': '0 4px 24px rgba(249, 115, 22, 0.15)',
        'orange-hover': '0 10px 30px rgba(249, 115, 22, 0.25)',
      }
    }
  }
}
