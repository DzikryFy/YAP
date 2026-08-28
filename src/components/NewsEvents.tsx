import React from 'react';
import { NEWS_ITEMS, NewsItem } from '../data/content';
import { Calendar } from 'lucide-react';

interface NewsEventsProps {
  onSelectNews: (item: NewsItem) => void;
}

export const NewsEvents: React.FC<NewsEventsProps> = ({ onSelectNews }) => {
  return (
    <section id="news-section" className="py-14 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading Badge with stars */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="text-teal-400 text-xl select-none animate-float">✦</span>
          <div className="bg-white border-2 border-teal-100 px-8 py-2.5 rounded-full shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F7A60] tracking-tight">
              Berita, Agenda & Galeri
            </h2>
          </div>
          <span className="text-amber-400 text-xl select-none animate-float-delayed">✦</span>
        </div>

        {/* 3 News / Events / Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`news-card-${item.id}`}
              onClick={() => onSelectNews(item)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between cursor-pointer group"
            >
              {/* Image with subtle hover zoom */}
              <div className="h-48 overflow-hidden bg-slate-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Badge */}
                  <span
                    className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-md mb-2 tracking-wider ${item.badgeBg} ${item.badgeText}`}
                  >
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-800 leading-snug group-hover:text-[#0F7A60] transition-colors mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Date Footer */}
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium pt-3 border-t border-slate-100">
                  <Calendar className="w-3.5 h-3.5 text-[#0F7A60]" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
