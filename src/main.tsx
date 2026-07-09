import React from 'react'
import ReactDOM from 'react-dom/client'
import { SERVICES, POPULAR_PACKAGES, STYLISTS, WHY_CHOOSE_US, REVIEWS, BUSINESS_STATS, FAQs, GALLERY_ITEMS } from '../data'
import './index.css'

// यहाँ आपकी Royal Cuts सैलून की पूरी मुख्य डिज़ाइन रेंडर होगी
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen bg-neutral-900 text-white font-sans">
      {/* Hero Section */}
      <header className="py-20 text-center bg-gradient-to-b from-neutral-800 to-neutral-900">
        <h1 className="text-5xl font-bold mb-4 tracking-wide text-amber-500">ROYAL CUTS</h1>
        <p className="text-xl text-neutral-400">Best Barber Shop in Najafgarh, Delhi</p>
        <p className="text-md text-amber-600 mt-2 font-semibold">Traditional Hand-Cut Style — No Electric Devices Only Hand Cut</p>
      </header>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center border-b border-neutral-800 pb-4 text-amber-500">Our Premium Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-neutral-800 p-6 rounded-lg shadow-lg border border-neutral-700">
              <h3 className="text-xl font-bold text-amber-400 mb-2">{service.name}</h3>
              <p className="text-neutral-400 text-sm mb-4">{service.description}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-neutral-500 text-xs font-mono">{service.duration}</span>
                <span className="text-amber-500 font-bold text-lg">₹{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stylists Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-neutral-850 rounded-xl my-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-amber-500">Meet Our Master Stylists</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STYLISTS.map((stylist) => (
            <div key={stylist.id} className="bg-neutral-800 p-6 rounded-xl border border-neutral-700 text-center">
              <h3 className="text-2xl font-bold text-white mb-1">{stylist.name}</h3>
              <p className="text-amber-500 text-sm font-medium mb-3">{stylist.role} ({stylist.experience} Experience)</p>
              <p className="text-neutral-400 text-sm italic">"{stylist.bio}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 py-8 text-center text-sm text-neutral-500 border-t border-neutral-900">
        <p>© 2026 Royal Cuts Men Salon. All Rights Reserved.</p>
        <p className="text-xs text-neutral-600 mt-1">Najafgarh Main Market Block, New Delhi, Delhi 110043</p>
      </footer>
    </div>
  </React.StrictMode>
)

