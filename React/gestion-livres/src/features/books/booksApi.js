// src/features/books/booksApi.js
const BASE = 'https://openlibrary.org'

export async function fetchBooksByQuery(query) {
  const q = encodeURIComponent(query?.trim() || 'javascript')
  const res = await fetch(`${BASE}/search.json?q=${q}&limit=20`)
  if (!res.ok) throw new Error('Failed to fetch books')
  const data = await res.json()

  // Map OpenLibrary -> ton modèle
  return (data.docs || []).map((d) => ({
    id: d.key, // ex: "/works/OL12345W"
    title: d.title ?? 'Untitled',
    author: (d.author_name && d.author_name[0]) || 'Unknown',
    likes: 0
  }))
}
