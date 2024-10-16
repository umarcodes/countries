import React from 'react';
import { Globe, MapPin, Users, History, Flag } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="relative h-64">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1549140600-78c9b8275e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Palestine landscape"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Palestine</h1>
          </div>
        </div>
        <div className="p-8">
          <p className="text-gray-600 mb-6">
            Palestine is a region in the Middle East with a rich history and cultural significance. It is located between the Mediterranean Sea and the Jordan River, encompassing parts of modern-day Israel, the West Bank, and the Gaza Strip.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
              icon={<Globe className="w-6 h-6 text-blue-500" />}
              title="Geography"
              content="Palestine's landscape varies from the fertile coastal plain to the Jordan Valley and includes parts of the Judean Mountains."
            />
            <InfoCard
              icon={<Users className="w-6 h-6 text-green-500" />}
              title="People"
              content="Palestinians are the Arab population native to the region, with a diverse cultural heritage influenced by various civilizations."
            />
            <InfoCard
              icon={<History className="w-6 h-6 text-yellow-500" />}
              title="History"
              content="The region has a complex history dating back thousands of years, with significant religious and historical importance to Judaism, Christianity, and Islam."
            />
            <InfoCard
              icon={<Flag className="w-6 h-6 text-red-500" />}
              title="Current Status"
              content="Palestine's political status is a subject of ongoing international debate and negotiation, with efforts towards establishing an independent Palestinian state."
            />
          </div>
        </div>
        <footer className="bg-gray-50 px-8 py-4">
          <p className="text-center text-gray-500 text-sm">
            Learn more about Palestine and its rich cultural heritage.
          </p>
        </footer>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{content}</p>
      </div>
    </div>
  );
}

export default App;