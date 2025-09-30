// Tailwind CSS Configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#1E293B',
        secondary: '#334155',
        accent: '#3B82F6',
        'accent-hover': '#2563EB',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        'bg-light': '#FFFFFF',
        'bg-gray': '#F8FAFC',
        'bg-dark': '#0F172A',
        'text-dark': '#1E293B',
        'text-medium': '#475569',
        'text-light': '#FFFFFF',
        'text-muted': '#64748B',
        border: '#E2E8F0',
        'border-hover': '#CBD5E1',
        // New vibrant colors
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
        'custom': '0 4px 24px rgba(59, 130, 246, 0.08)',
        'custom-hover': '0 10px 30px rgba(59, 130, 246, 0.18)',
        'purple': '0 4px 24px rgba(139, 92, 246, 0.08)',
        'purple-hover': '0 10px 30px rgba(139, 92, 246, 0.18)',
        'pink': '0 4px 24px rgba(236, 72, 153, 0.08)',
        'pink-hover': '0 10px 30px rgba(236, 72, 153, 0.18)',
      }
    }
  }
}
