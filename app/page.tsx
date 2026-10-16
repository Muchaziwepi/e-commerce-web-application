'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, Check, Minus, Plus, Search, ShoppingBag, Sparkles, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Product = { id: string; name: string; category: string; price: number; image: string; description: string; badge?: string }
type CartItem = Product & { quantity: number }

const products: Product[] = [
  { id: '1', name: 'Mori Glass Carafe', category: 'Kitchen', price: 48, image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=85', description: 'A sculptural glass carafe designed for daily rituals.', badge: 'New' },
  { id: '2', name: 'Kanso Lounge Chair', category: 'Furniture', price: 320, image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=85', description: 'Low-profile comfort with a warm oak frame.' },
  { id: '3', name: 'Sora Linen Throw', category: 'Textiles', price: 86, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85', description: 'Soft washed linen in a calming mineral tone.' },
  { id: '4', name: 'Nami Table Lamp', category: 'Lighting', price: 145, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85', description: 'A quiet glow for slow mornings and late nights.' },
  { id: '5', name: 'Oto Ceramic Set', category: 'Kitchen', price: 64, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=900&q=85', description: 'Hand-finished forms for everyday table settings.' },
  { id: '6', name: 'Haru Planter', category: 'Objects', price: 42, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85', description: 'A tactile home for your favorite growing things.' },
]

export default function Page() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [selected, setSelected] = useState<Product | null>(null)
  const [showCart, setShowCart] = useState(false)
  const [category, setCategory] = useState('All')
  const [checkedOut, setCheckedOut] = useState(false)
  const categories = ['All', 'Furniture', 'Kitchen', 'Lighting', 'Textiles', 'Objects']
  const filtered = category === 'All' ? products : products.filter((product) => product.category === category)
  const count = cart.reduce((sum, item) => sum + item.quantity, 0)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  function addToCart(product: Product) {
    setCart((items) => items.some((item) => item.id === product.id) ? items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { ...product, quantity: 1 }])
  }
  function updateQuantity(id: string, delta: number) {
    setCart((items) => items.flatMap((item) => item.id === id ? (item.quantity + delta > 0 ? [{ ...item, quantity: item.quantity + delta }] : []) : [item]))
  }

  return (
    <main className="min-h-screen bg-[#f5f2ed] text-[#25221f]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="font-serif text-2xl tracking-tight">noya<span className="text-[#b36d45]">.</span></a>
        <div className="hidden items-center gap-8 text-sm text-[#706a64] md:flex"><a href="#shop" className="text-[#25221f]">Shop</a><a href="#story">Our story</a><a href="#journal">Journal</a></div>
        <button onClick={() => setShowCart(true)} className="flex items-center gap-2 text-sm font-medium" aria-label={`Open cart with ${count} items`}><ShoppingBag className="size-5" strokeWidth={1.5} /><span>Cart</span><span className="flex size-5 items-center justify-center rounded-full bg-[#25221f] text-[10px] text-white">{count}</span></button>
      </nav>

      <section id="top" className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-10 md:grid-cols-[1fr_0.85fr] md:items-center md:px-10 md:pt-16">
        <div><p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#b36d45]"><Sparkles className="size-4" /> Thoughtful objects</p><h1 className="max-w-xl font-serif text-6xl leading-[.94] tracking-[-0.04em] md:text-8xl">Make room for <em className="font-normal text-[#b36d45]">meaning.</em></h1><p className="mt-8 max-w-md text-base leading-7 text-[#706a64]">Objects for the considered home. Made slowly, chosen carefully, and meant to live with you.</p><a href="#shop" className="mt-9 inline-flex items-center gap-3 border-b border-[#25221f] pb-2 text-sm font-semibold">Explore the collection <ArrowRight className="size-4" /></a></div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#ddd5cb]"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85" alt="Warmly lit, minimal living room with curated furniture" className="size-full object-cover" /><div className="absolute bottom-5 left-5 rounded-full bg-[#f5f2ed]/90 px-4 py-2 text-xs">The quiet edit / 01</div></div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-6 pb-24 md:px-10"><div className="mb-9 flex flex-col justify-between gap-5 border-t border-[#d8d0c7] pt-8 md:flex-row md:items-end"><div><p className="text-xs uppercase tracking-[0.2em] text-[#b36d45]">The collection</p><h2 className="mt-2 font-serif text-4xl">Objects with presence.</h2></div><div className="flex gap-5 overflow-x-auto pb-1 text-sm text-[#706a64]">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={category === item ? 'font-semibold text-[#25221f]' : ''}>{item}</button>)}</div></div><div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((product) => <article key={product.id} className="group"><button onClick={() => setSelected(product)} className="relative block aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#e7e1da] text-left"><img src={product.image} alt={product.name} className="size-full object-cover transition duration-500 group-hover:scale-105" />{product.badge && <span className="absolute left-4 top-4 rounded-full bg-[#f5f2ed] px-3 py-1 text-xs">{product.badge}</span>}<span className="absolute bottom-4 right-4 grid size-11 translate-y-2 place-items-center rounded-full bg-[#f5f2ed] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"><Plus className="size-5" /></span></button><div className="mt-4 flex items-start justify-between gap-3"><div><h3 className="font-medium">{product.name}</h3><p className="mt-1 text-sm text-[#8b837b]">{product.category}</p></div><p className="font-medium">${product.price}</p></div><button onClick={() => addToCart(product)} className="mt-4 text-sm font-semibold underline underline-offset-4">Add to cart</button></article>)}</div></section>

      <section id="story" className="bg-[#292725] px-6 py-20 text-[#f5f2ed] md:px-10"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-end"><p className="font-serif text-4xl leading-tight md:text-5xl">“The things we live with should make the everyday feel a little more <em className="text-[#d99a72]">intentional.</em>”</p><p className="max-w-sm text-sm leading-7 text-[#bcb4ab]">Noya is a small edit of useful, beautiful things. We work with makers who care about materials, process, and the life an object will have after it leaves the studio.</p></div></section>
      <footer id="journal" className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[#706a64] md:flex-row md:items-center md:justify-between md:px-10"><span className="font-serif text-xl text-[#25221f]">noya<span className="text-[#b36d45]">.</span></span><span>© 2026 Noya Objects · Made for living.</span></footer>

      {selected && <div className="fixed inset-0 z-50 grid place-items-center bg-[#25221f]/50 p-5" role="dialog" aria-modal="true"><div className="relative grid max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl bg-[#f5f2ed] md:grid-cols-2"><button onClick={() => setSelected(null)} className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full bg-[#f5f2ed]/80" aria-label="Close product details"><X className="size-5" /></button><img src={selected.image} alt={selected.name} className="aspect-square size-full object-cover" /><div className="flex flex-col justify-center p-8 md:p-10"><p className="text-xs uppercase tracking-[0.2em] text-[#b36d45]">{selected.category}</p><h2 className="mt-3 font-serif text-4xl">{selected.name}</h2><p className="mt-5 leading-7 text-[#706a64]">{selected.description}</p><p className="mt-7 text-2xl">${selected.price}</p><Button onClick={() => { addToCart(selected); setSelected(null); setShowCart(true) }} className="mt-8 h-12 rounded-full bg-[#25221f] hover:bg-[#423d38]">Add to cart <ArrowRight data-icon="inline-end" /></Button></div></div></div>}

      {showCart && <div className="fixed inset-0 z-50 bg-[#25221f]/50" role="dialog" aria-modal="true"><aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#f5f2ed] p-6 md:p-8"><div className="flex items-center justify-between"><h2 className="font-serif text-3xl">Your cart</h2><button onClick={() => setShowCart(false)} aria-label="Close cart"><X /></button></div>{cart.length === 0 ? <div className="flex flex-1 flex-col items-center justify-center text-center"><ShoppingBag className="mb-4 size-10 stroke-1 text-[#b36d45]" /><p className="font-serif text-2xl">A little empty.</p><p className="mt-2 text-sm text-[#706a64]">Add something beautiful to begin.</p></div> : <><div className="mt-8 flex-1 overflow-y-auto"><div className="flex flex-col gap-6">{cart.map((item) => <div key={item.id} className="flex gap-4"><img src={item.image} alt="" className="size-20 rounded-xl object-cover" /><div className="flex-1"><div className="flex justify-between gap-3"><p className="font-medium">{item.name}</p><p>${item.price * item.quantity}</p></div><div className="mt-3 flex items-center gap-3 text-sm"><button onClick={() => updateQuantity(item.id, -1)} className="grid size-7 place-items-center rounded-full border border-[#d8d0c7]" aria-label="Decrease quantity"><Minus className="size-3" /></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, 1)} className="grid size-7 place-items-center rounded-full border border-[#d8d0c7]" aria-label="Increase quantity"><Plus className="size-3" /></button></div></div></div>)}</div></div><div className="border-t border-[#d8d0c7] pt-6"><div className="flex justify-between text-lg"><span>Total</span><span>${total}</span></div>{checkedOut ? <p className="mt-5 flex items-center gap-2 text-sm text-[#5e7a60]"><Check className="size-4" /> Demo order received. Thank you.</p> : <Button onClick={() => setCheckedOut(true)} className="mt-5 h-12 w-full rounded-full bg-[#25221f] hover:bg-[#423d38]">Continue to checkout</Button>}</div></>}</aside></div>}
    </main>
  )
}
