import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Types for better TypeScript support
interface Artwork {
  id: number
  title: string
  medium: string
  year: string
  image: string
}

// Utility functions for the art portfolio
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

// Greek-themed utility functions
export function getGreekPattern(type: 'key' | 'wave' | 'spiral' = 'key'): string {
  const patterns = {
    key: `url("data:image/svg+xml,%3Csvg width='40' height='8' viewBox='0 0 40 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h8v8H0V0zm8 0h8v8H8V0zm8 0h8v8h-8V0zm8 0h8v8h-8V0zm8 0h8v8h-8V0z' fill='%23000' fillOpacity='0.1'/%3E%3C/svg%3E")`,
    wave: `url("data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10c10 0 10-10 20-10s10 10 20 10 10-10 20-10v2c-10 0-10 10-20 10s-10-10-20-10-10 10-20 10z' fill='%23000' fillOpacity='0.1'/%3E%3C/svg%3E")`,
    spiral: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  }
  return patterns[type]
}

export function getGreekColors() {
  return {
    marble: {
      50: '#fefefe',
      100: '#fdfdfd',
      200: '#fafafa',
      300: '#f5f5f5',
      400: '#efefef',
      500: '#e5e5e5',
      600: '#d4d4d4',
      700: '#a3a3a3',
      800: '#525252',
      900: '#262626'
    },
    gold: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f'
    },
    aegean: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a'
    }
  }
}

// Animation utilities
export function createFadeInAnimation(delay: number = 0): string {
  return `fadeIn 0.6s ease-out ${delay}s both`
}

export function createSlideUpAnimation(delay: number = 0): string {
  return `slideUp 0.8s ease-out ${delay}s both`
}

// Image utilities
export function generatePlaceholderUrl(
  width: number, 
  height: number, 
  text?: string,
  bgColor: string = 'f3f4f6',
  textColor: string = '6b7280'
): string {
  const encodedText = text ? encodeURIComponent(text) : ''
  return `/placeholder.svg?height=${height}&width=${width}&text=${encodedText}&bg=${bgColor}&color=${textColor}`
}

// Social media utilities
export function getSocialMediaIcon(platform: string): string {
  const icons: Record<string, string> = {
    instagram: 'Instagram',
    tiktok: 'Music',
    youtube: 'Youtube',
    github: 'Github',
    twitter: 'Twitter',
    facebook: 'Facebook',
    linkedin: 'Linkedin'
  }
  return icons[platform.toLowerCase()] || 'ExternalLink'
}

export function getSocialMediaColor(platform: string): string {
  const colors: Record<string, string> = {
    instagram: 'from-pink-500 to-purple-600',
    tiktok: 'from-black to-gray-800',
    youtube: 'from-red-500 to-red-600',
    github: 'from-gray-800 to-black',
    twitter: 'from-blue-400 to-blue-600',
    facebook: 'from-blue-600 to-blue-700',
    linkedin: 'from-blue-700 to-blue-800'
  }
  return colors[platform.toLowerCase()] || 'from-gray-500 to-gray-600'
}

// Artwork utilities
export function categorizeArtwork(medium: string): string {
  const categories: Record<string, string> = {
    'digital art': 'Digital',
    'oil on canvas': 'Painting',
    'acrylic': 'Painting',
    'watercolor': 'Painting',
    'mixed media': 'Mixed Media',
    'sculpture': 'Sculpture',
    'photography': 'Photography',
    'drawing': 'Drawing',
    'printmaking': 'Print'
  }
  return categories[medium.toLowerCase()] || 'Other'
}

export function sortArtworksByYear(artworks: Artwork[], ascending: boolean = false): Artwork[] {
  return [...artworks].sort((a, b) => {
    const yearA = parseInt(a.year)
    const yearB = parseInt(b.year)
    return ascending ? yearA - yearB : yearB - yearA
  })
}

// Responsive utilities
export function getResponsiveImageSizes(): string {
  return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}

// Validation utilities
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Local storage utilities
export function setLocalStorage(key: string, value: unknown): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }
}

export function getLocalStorage<T>(key: string, defaultValue: T): T {
  if (typeof window !== 'undefined') {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return defaultValue
    }
  }
  return defaultValue
}

// Theme utilities
export function getThemeClasses(theme: 'light' | 'dark' = 'light'): Record<string, string> {
  return {
    background: theme === 'light' 
      ? 'bg-gradient-to-br from-slate-50 via-amber-50 to-blue-50' 
      : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
    text: theme === 'light' ? 'text-slate-900' : 'text-slate-100',
    card: theme === 'light' ? 'bg-white' : 'bg-slate-800',
    border: theme === 'light' ? 'border-slate-200' : 'border-slate-700'
  }
}

// Performance utilities
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
