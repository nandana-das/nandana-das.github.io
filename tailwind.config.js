// Tailwind CSS Configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#2C3E50',
        secondary: '#34495E',
        accent: '#5A6C7D',
        'accent-hover': '#4A5A6B',
        success: '#27AE60',
        warning: '#F39C12',
        danger: '#E74C3C',
        'bg-light': '#FFFFFF',
        'bg-gray': '#F8F9FA',
        'bg-dark': '#4585c6',
        'text-dark': '#2C3E50',
        'text-medium': '#5D6D7E',
        'text-light': '#FFFFFF',
        'text-muted': '#95A5A6',
        border: '#E5E7EB',
        'border-hover': '#D1D5DB',
      },
      fontFamily: {
        'inter': ['Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 24px rgba(217, 168, 131, 0.08)',
        'custom-hover': '0 10px 30px rgba(217, 168, 131, 0.18)',
      }
    }
  }
}
